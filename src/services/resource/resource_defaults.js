import { createContext } from 'react';

export const ResourceDispatch = createContext(null);

export const defaultResourceState = {
  columnOrder: [],
  columns: [],
  count: 0,
  currentPage: 0,
  density: 'density-3',
  excludedColumns: {},
  filters: [],
  loading: false,
  pageSize: 20,
  queryAll: false,
  rowsTotal: 0,
  sort: [],
  store: null,
  values: [],
};
