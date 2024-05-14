import { createContext } from 'react';

export const ResourceDispatch = createContext(null);

export const defaultResourceState = {
  columnOrder: [],
  columns: [],
  columnVisibility: {},
  count: 0,
  currentPage: 0,
  density: 'density-3',
  filters: [],
  loading: false,
  pageSize: 20,
  rowsTotal: 0,
  sort: [],
};
