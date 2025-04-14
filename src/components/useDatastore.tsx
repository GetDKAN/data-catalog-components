import React, { useState, useEffect, useRef } from 'react';
import qs from "qs";
import { useQuery } from '@tanstack/react-query';


type UseDatastoreResult = {
  data: any;
  status: any;
  error: any;
}

type UseDatastoreOptions = {
  distributionId?: string;
  includeResults: boolean;
  includeCount: boolean;
  includeSchema: boolean;
}

type DatastoreParams = {
  limit?: number;
  offset?: number;
  conditions?: Array<any>;
}

function buildParams(params: {limit: number}) {
  const newParams = {
    limit: params?.limit ? params.limit : undefined,
  }

  return qs.stringify(newParams, { addQueryPrefix: true, encode: true })
}

const useDatastore = (
  rootUrl: string,
  queryKey: string,
  datasetId: string,
  distributionIndex: number = 0,
  params: DatastoreParams,
  options: UseDatastoreOptions = {
    includeResults: true,
    includeCount: true,
    includeSchema: true,
  },
): UseDatastoreResult => {
  const fetchUrl: string = `${rootUrl}/datastore/query/${datasetId}/${distributionIndex}`;
  const [fetchParams, setFetchParams] = useState(buildParams(params))

  console.log(params,fetchParams)
  const {status, data, error} = useQuery({
    queryKey: [queryKey],
    queryFn: (): Promise<Array<any>> => {
      return fetch(`${fetchUrl}${fetchParams}`).then(res => res.json());
    }
  });


  // function search() {
  //   // Set new search params.
  //   const newParams = {
  //     limit: limit,
  //     offset: offset,
  //     results: includeResults ? undefined : false,
  //     schema: includeSchema ? undefined : false,
  //     count: includeCount ? undefined : false,
  //     conditions: conditions,
      
  //   };

  //   if (JSON.stringify(newParams) === JSON.stringify(paramsRef.current) && enabled) {
  //     return;
  //   }
  //   paramsRef.current = newParams;
  //   // setSearchParams(newParams)
  //   setFetchParams(qs.stringify(newParams, { addQueryPrefix: true, encode: true }))
  //   if(!enabled) {
  //     setEnabled(true);
  //   }
  // }

  // useEffect(() => {
  //   if (offset !== 0) {
  //     setOffset(0)
  //   } else {
  //     search();
  //   }
  // }, [conditions, limit])

  // useEffect(() => {
  //   search();
  // }, [offset])


  return {status, data, error}
}

export default useDatastore;

