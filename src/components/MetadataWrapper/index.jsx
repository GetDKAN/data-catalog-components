import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MetadataContext from './MetadataContext';


const MetadataWrapper = ({rootUrl, id, children}) => {
  const {status, data, error} = useQuery({
    queryKey: ['metastoreDataset', id],
    queryFn: () => {
      return fetch(`${rootUrl}/metastore/schemas/dataset/items/${id}?show-reference-ids`).then(
        (res) => res.json(),
      )
    }
  });
  return(
    <MetadataContext.Provider value={{
      status: status,
      metadata: data,
    }}>
      {children}
    </MetadataContext.Provider>
  );
}

export default MetadataWrapper;
