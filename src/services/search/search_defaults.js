import { createContext } from 'react';

export const SearchDispatch = createContext(null);

export const defaultSearchState = {
  items: [],
  facetsResults: {},
  loading: false,
  page: 1,
  'page-size': 10,
  fulltext: '',
  selectedFacets: [],
  sort: 'modified',
  sort_order: 'desc',
  totalItems: 0,
};
