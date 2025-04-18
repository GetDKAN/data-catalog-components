import React, { useState, useEffect, useRef } from 'react';
import qs from "qs";
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { DatastoreSchema, DatastoreCondition } from '../types/datastore';

type UseDatastoreResult = UseQueryResult<DatastoreSchema> & {
  urlString: string;
  setLimit: Function,
  setOffset: Function,
  setConditions: Function
}

type UseDatastoreOptions = {
  results?: boolean;
  count?: boolean;
  schema?: boolean;
  params?: DatastoreParams
}

type DatastoreParams = {
  limit?: number;
  offset?: number;
  conditions?: DatastoreCondition[];
}

function useDatastore(rootUrl: string, queryKey: string, distributionID: string, options: UseDatastoreOptions):  UseDatastoreResult
function useDatastore(rootUrl: string, queryKey: string, datasetID: string, distribtionIndex: number, options: UseDatastoreOptions): UseDatastoreResult
function useDatastore(rootUrl: string, queryKey: string, id: string, optionsOrDistIndex: UseDatastoreOptions | number , options?: UseDatastoreOptions){
  const [datastoreOptions,]  = useState<UseDatastoreOptions | undefined>(typeof optionsOrDistIndex === "object" ? optionsOrDistIndex : options);
  const [fetchUrl, setFetchUrl] = useState<string>("");
  const [enabled, setEnabled] = useState<boolean>(false);
  const [limit, setLimit] = useState<number | undefined>(datastoreOptions?.params?.limit ? datastoreOptions.params.limit : undefined);
  const [offset, setOffset] = useState<number | undefined>(datastoreOptions?.params?.offset ? datastoreOptions.params.offset : undefined);
  const [conditions, setConditions] = useState<DatastoreCondition[]>([]);
  const [previousParams, setPreviousParams] = useState<DatastoreParams>({});
  const result = useQuery({
    queryKey: [queryKey, fetchUrl],
    queryFn: (): Promise<DatastoreSchema> => {
      return fetch(`${fetchUrl}`).then(res => res.json());
    },
    enabled: enabled,
  });

  function search() {
    function buildNewParams(): string {
      // Set unneeded params to undefined so they are omittd by qs.
      const newParams: DatastoreParams = {
        limit: limit ? limit : undefined,
        offset: offset ? offset : undefined,
        conditions: conditions
      }
      setPreviousParams(newParams)
      return qs.stringify(newParams, { addQueryPrefix: true, encode: true })
    }
    let url: string = `${rootUrl}/datastore/query/`;
    if(id && typeof optionsOrDistIndex === "object") {
      // Build distribution id search url.
      url += `${id}${buildNewParams()}`
    } else if(id && typeof optionsOrDistIndex === "number") {
      // Build dataset id / index search url.
      url += `${id}/${optionsOrDistIndex}${buildNewParams()}`
    }
    setFetchUrl(url)
    if(!enabled) {
      setEnabled(true);
    }
  }

  useEffect(() => {
    // If offset doesn't match, search.
    if(!previousParams?.offset || previousParams?.offset !== offset) {
      search();
    } else {
      // Offset needs to be reset on most searches to keep pagination correct.
      setOffset(undefined)
    }
  }, [conditions, limit, offset])

  return {
    ...result,
    urlString: fetchUrl,
    setLimit: setLimit,
    setOffset: setOffset,
    setConditions: setConditions
  }
}

export default useDatastore;

