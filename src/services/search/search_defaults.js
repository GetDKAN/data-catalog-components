import { createContext } from 'react';

export const SearchDispatch = createContext(null);

export const defaultSearchState = {
  facets: [],
  facetsResults: {},
  loading: false,
  page: 1,
  pageSize: 10,
  fulltext: '',
  selectedFacets: [],
  sort: 'modified',
  sort_order: 'desc',
  totalItems: 0,
};
