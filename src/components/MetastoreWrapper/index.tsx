import React, { ReactNode, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import MetastoreContext from './MetastoreContext';
import { MetastoreSchemaTheme } from '../../types/theme';

type MetastoreWrapperProps = {
  rootUrl: string;
  children: ReactNode;
  schema: string;
  items: boolean;
  showRefId: boolean;
  id: string;
  ContextProvider: ReactNode;
}

const fetchTheme = (rootUrl: string, id: string): Promise<any> => (
  fetch(`${rootUrl}/metastore/schemas/theme/${id}`)
    .then((rest) => rest.json())
);

export const fetchThemes = (rootUrl: string): Promise<Array<MetastoreSchemaTheme>> => (
  fetch(`${rootUrl}/metastore/schemas/theme/items`)
    .then((rest) => rest.json())
);

const anyValue = (status: any, data: any) => ({status: status, data: data});
const themeValue = (status: any, data: Array<MetastoreSchemaTheme>) => ({status: status, data: data});


const MetastoreWrapper = ({ContextProvider, rootUrl, children, schema, items = true}: MetastoreWrapperProps) => {
  if(!schema) {
    return;
  }
  let fetchFn: Function | null = null;
  let valueFn: Function | null = anyValue;
  if(schema == "theme") {
    fetchFn = fetchThemes;
    valueFn = themeValue;
  }

  const {status, data, error} = useQuery({
    queryKey: ['metastoreDataset', schema],
    queryFn: () => {
      return fetchFn
    }
  });
  return(
    <MetastoreContext.Provider value={valueFn(status, data)}>
      {children}
    </MetastoreContext.Provider>
  );
}

export default MetastoreWrapper;
