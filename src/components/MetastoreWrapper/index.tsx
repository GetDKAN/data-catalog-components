import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MetastoreContext from './MetastoreContext';

const MetastoreWrapper = ({CustomContext, rootUrl, children, schema, items = true}) => {
  console.log(items, schema)
  const {status, data, error} = useQuery({
    queryKey: ['metastoreDataset', schema],
    queryFn: () => {
      return fetch(`${rootUrl}/metastore/schemas/${schema}${items ? "/items" : ""}`).then(
        (res) => res.json(),
      )
    }
  });
  return(
    <MetastoreContext.Provider value={{
      status: status,
      data: data,
    }}>
      {children}
    </MetastoreContext.Provider>
  );
}

export default MetastoreWrapper;
