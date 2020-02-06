import { createContext } from 'react';

export const SearchDispatch = createContext(null);

export const defaultSearchState = {
  facets: [],
  facetsResults: {},
  loading: false,
  page: 1,
  pageSize: 10,
  fulltext: '',
  searchEngine: null,
  selectedFacets: [],
  sort: 'date',
  totalItems: 0,
};
