import React, { useState, useEffect, useRef } from 'react';
import qs from "qs";
import { useQuery } from '@tanstack/react-query';
import DatastoreContext from './DatastoreContext';

const defaultOptions = {
  limit: 10,
  offset: 0,
  conditions: undefined,
  sorts: undefined,
  properties: undefined,
  groupings: undefined,
}

//${rootUrl}/datastore/query/${id}?${additionalParamsString}
const DatastoreWrapper = ({
  rootUrl,
  id,
  dist_index = null,
  dist_id,
  children,
  options,
  includeResults = true,
  includeCount = true,
  includeSchema = true,
}) => {
  const paramsRef = useRef("");
  
  const joinedOptions = {
    ...defaultOptions,
    ...options,
  }
  let queryPoint = '';
  const [limit, setLimit] = useState(joinedOptions.limit ? joinedOptions.limit : undefined)
  const [offset, setOffset] = useState(joinedOptions.offset ? joinedOptions.offset : 0)
  const [fetchParams, setFetchParams] = useState("");
  const [enabled, setEnabled] = useState(false);
  const [conditions, setConditions] = useState([])

  if (dist_index >= 0) {
    queryPoint = `${rootUrl}/datastore/query/${id}/${dist_index}`;
  } else {
    queryPoint = `${rootUrl}/datastore/query/${id}`;
  }

    // Fetch data using state that has been set.
    function fetchData() {
      return fetch(`${queryPoint}${fetchParams}`).then(
        (res) => res.json(),
      )
    }

  const {status, data, error} = useQuery({
    queryKey: [`datastore_${id}_${dist_index >= 0 ? dist_index : 0}`, fetchParams],
    queryFn: () => fetchData(),
    enabled: enabled,
  });

  function search() {
      // Set new search params.
      const newParams = {
        limit: limit,
        offset: offset,
        results: includeResults ? undefined : false,
        schema: includeSchema ? undefined : false,
        count: includeCount ? undefined : false,
        conditions: conditions,
        
      };

      if (JSON.stringify(newParams) === JSON.stringify(paramsRef.current) && enabled) {
        return;
      }
      paramsRef.current = newParams;
      // setSearchParams(newParams)
      setFetchParams(qs.stringify(newParams, { addQueryPrefix: true, encode: true }))
      if(!enabled) {
        setEnabled(true);
      }
    }

    useEffect(() => {
      if (offset !== 0) {
        setOffset(0)
      } else {
        search();
      }
    }, [conditions, limit])
  
    useEffect(() => {
      search();
    }, [offset])

    return(
    <DatastoreContext.Provider value={{
      id: id,
      count: data?.count,
      status: status,
      schema: data?.schema[dist_id]?.fields,
      datastore: data,
      limit: {
        value: limit,
        set: setLimit
      },
      offset: {
        value: offset,
        set: setOffset
      },
      conditions: {
        value: conditions,
        set: setConditions
      }
    }}>
      {children}
    </DatastoreContext.Provider>
  );
}

export default DatastoreWrapper;
