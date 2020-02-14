export default function searchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        loading: true,
      };
    case 'GET_SEARCH_ENGINE':
      return {
        ...state,
        loading: false,
        searchEngine: action.data.searchEngine,
        searchType: action.data.searchType,
        facets: action.data.facets,
      };
    case 'GET_SEARCH_DATA':
      return {
        ...state,
        loading: false,
        totalItems: action.data.totalItems,
        items: action.data.items,
        facetsResults: action.data.facetsResults,
      };
    case 'SET_SEARCH_PARAMETERS':
      return {
        ...state,
        searchURL: action.data.searchURL,
      };
    case 'UPDATE_SORT':
      return {
        ...state,
        sort: action.data.sort,
        sort_order: action.data.sort_order,
      };
    case 'UPDATE_FULLTEXT':
      return {
        ...state,
        fulltext: action.data.fulltext,
      };
    case 'UPDATE_PAGE_SIZE':
      return {
        ...state,
        pageSize: action.data.pageSize,
        page: 1,
      };
    case 'UPDATE_CURRENT_PAGE':
      return {
        ...state,
        page: action.data.page,
      };
    case 'UPDATE_FACETS':
      return {
        ...state,
        selectedFacets: action.data.selectedFacets,
        page: 1,
      };
    case 'RESET_FULLTEXT':
      return {
        ...state,
        fulltext: '',
      };
    case 'RESET_FACETS':
      return {
        ...state,
        selectedFacets: action.data.selectedFacets,
        page: 1,
      };
    case 'RESET_ALL':
      return {
        ...state,
        fulltext: '',
        selectedFacets: [],
      };
    default:
      return 'Not a valid action type.';
  }
}
