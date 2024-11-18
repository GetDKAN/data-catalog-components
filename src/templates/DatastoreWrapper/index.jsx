import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import DatastoreContext from './DatastoreContext';

//${rootUrl}/datastore/query/${id}?${additionalParamsString}
const DatastoreWrapper = ({rootUrl, id, dist_index = null, children}) => {
  let queryPoint = '';
  if (dist_index >= 0) {
    queryPoint = `${rootUrl}/datastore/query/${id}/${dist_index}`;
  } else {
    queryPoint = `${rootUrl}/datastore/query/${id}`;
  }

  const {status, data, error} = useQuery({
    queryKey: [`datastore_${id}_${dist_index >= 0 ? dist_index : 0}`, id],
    queryFn: () => {
      return fetch(queryPoint).then(
        (res) => res.json(),
      )
    }
  });
  return(
    <DatastoreContext.Provider value={{
      status: status,
      datastore: data,
    }}>
      {children}
    </DatastoreContext.Provider>
  );
}

export default DatastoreWrapper;
