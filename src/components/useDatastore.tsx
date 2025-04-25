import React, { useState, useEffect, useRef } from 'react';
import qs from "qs";
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { DatastoreSchema, DatastoreCondition } from '../types/datastore';

type UseDatastoreResult = UseQueryResult<DatastoreSchema> & {
  urlString: string;
  params: {
    set: Function;
    previous: DatastoreParams | undefined;
  };
}

type UseDatastoreOptions = {
  results?: boolean;
  count?: boolean;
  schema?: boolean;
  params?: DatastoreParams;
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
  const [params, setParams] = useState<DatastoreParams | undefined>(datastoreOptions?.params ? datastoreOptions.params : undefined)
  const prevParams = useRef<DatastoreParams | undefined>(undefined);
  const result = useQuery({
    queryKey: [queryKey, fetchUrl],
    queryFn: (): Promise<DatastoreSchema> => {
      return fetch(`${fetchUrl}`).then(res => res.json());
    },
    enabled: enabled,
  });

  function search() {
    function buildNewParams(): string {
      return qs.stringify(params, { addQueryPrefix: true, encode: true })
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
    if(!prevParams?.current || (JSON.stringify(prevParams.current) !== JSON.stringify(params))) {
      search();
      prevParams.current = params;
    }
  }, [params]);

  return {
    ...result,
    urlString: fetchUrl,
    params: {
      set:setParams,
      previous: prevParams.current,
    }
  }
}

export default useDatastore;

