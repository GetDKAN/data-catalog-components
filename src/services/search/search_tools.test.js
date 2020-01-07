import {
  searchReducer,
  defaultSearchState,
} from './search_tools';

describe('Search Reducer', () => {
  it('returns "Not a valid action type." when nothing matches', () => {
    expect(searchReducer(defaultSearchState, { type: 'FOOBAR' })).toBe('Not a valid action type.');
  });
  it('returns "loading: true" when passed FETCH_DATA', () => {
    expect(searchReducer({ loading: false }, { type: 'FETCH_DATA' })).toStrictEqual({ loading: true });
  });
  it('returns "loading: false" and correct searchEngine, searchType, and facets when passed GET_SEARCH_ENGINE', () => {
    expect(searchReducer(
      { loading: true, searchEngine: null, facets: [] },{ type: 'GET_SEARCH_ENGINE', data: { searchEngine: {}, facets: [1, 2], searchType: 'DKAN' } },
    ))
      .toStrictEqual({
        loading: false, searchEngine: {}, searchType: 'DKAN', facets: [1, 2],
      });
  });
  it('returns "loading: false" and correct totalItems, items, and facetResults when passed GET_SEARCH_DATA', () => {
    expect(searchReducer({ loading: true, totalItems: 0, facetsResults: {} }, { type: 'GET_SEARCH_DATA', data: { totalItems: 10, items: [1, 2], facetsResults: { dkan: true } } }))
      .toStrictEqual({
        loading: false, totalItems: 10, items: [1, 2], facetsResults: { dkan: true },
      });
  });
  it('returns "searchURL: https://dkan2.com" when passed SET_SEARCH_PARAMETERS', () => {
    expect(searchReducer({ }, { type: 'SET_SEARCH_PARAMETERS', data: { searchURL: 'https://dkan2.com' } })).toStrictEqual({ searchURL: 'https://dkan2.com' });
  });
  it('returns "sort: alpha" when passed UPDATE_SORT', () => {
    expect(searchReducer({ }, { type: 'UPDATE_SORT', data: { sort: 'alpha' } })).toStrictEqual({ sort: 'alpha' });
  });
  it('returns "qwerty" when passed UPDATE_QUERY', () => {
    expect(searchReducer({ }, { type: 'UPDATE_QUERY', data: { query: 'qwerty' } })).toStrictEqual({ query: 'qwerty' });
  });
  it('returns "page: 1" and correct pageSize when passed UPDATE_PAGE_SIZE', () => {
    expect(searchReducer({ }, { type: 'UPDATE_PAGE_SIZE', data: { pageSize: 20 } })).toStrictEqual({ pageSize: 20, page: 1 });
  });
  it('returns "page: 2" when passed UPDATE_CURRENT_PAGE', () => {
    expect(searchReducer({ }, { type: 'UPDATE_CURRENT_PAGE', data: { page: 2 } })).toStrictEqual({ page: 2 });
  });
  it('returns "page: 1" and correct selectedFacets when passed UPDATE_FACETS', () => {
    expect(searchReducer({ }, { type: 'UPDATE_FACETS', data: { selectedFacets: [1, 2] } })).toStrictEqual({ selectedFacets: [1, 2], page: 1 });
  });
  it('returns "query: \'\'" when passed RESET_QUERY', () => {
    expect(searchReducer({ }, { type: 'RESET_QUERY' })).toStrictEqual({ query: '' });
  });
  it('returns "page: 1" and correct selectedFacets when passed RESET_FACETS', () => {
    expect(searchReducer({ }, { type: 'RESET_FACETS', data: { selectedFacets: [1, 2] } })).toStrictEqual({ selectedFacets: [1, 2], page: 1 });
  });
  it('returns "query: \'\', selectedFacets: []" when passed RESET_ALL', () => {
    expect(searchReducer({ }, { type: 'RESET_ALL' })).toStrictEqual({ query: '', selectedFacets: [] });
  });
});
