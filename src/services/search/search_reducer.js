export function updateSelectedFacetsState(state, action) {
  const { selectedFacets } = state;
  const { newFacet } = action.data;
  const newSelectedFacets = [...selectedFacets];

  const found = newSelectedFacets.findIndex((e) => newFacet[0] === e[0] && newFacet[1] === e[1]);

  if (found > -1) {
    newSelectedFacets.splice(found, 1);
  } else {
    newSelectedFacets.push(newFacet);
  }

  return {
    ...state,
    selectedFacets: newSelectedFacets,
    page: action.data.page || 1,
  };
}

export default function searchReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_SORT':
      return {
        ...state,
        sort: action.data.sort,
        'sort-order': action.data['sort-order'],
      };
    case 'UPDATE_SORT_ONLY':
      return {
        ...state,
        sort: action.data.sort,
      };
    case 'UPDATE_SORT_ORDER':
      return {
        ...state,
        'sort-order': action.data['sort-order'],
      };
    case 'UPDATE_FULLTEXT':
      return {
        ...state,
        fulltext: action.data.fulltext,
        page: action.data.page || 1,
      };
    case 'UPDATE_PAGE_SIZE':
      return {
        ...state,
        'page-size': action.data['page-size'],
        page: action.data.page || 1,
      };
    case 'UPDATE_CURRENT_PAGE':
      return {
        ...state,
        page: action.data.page,
      };
    case 'UPDATE_FACETS':
      return updateSelectedFacetsState(state, action);
    case 'RESET_FULLTEXT':
      return {
        ...state,
        fulltext: '',
      };
    case 'RESET_FACETS':
      return {
        ...state,
        selectedFacets: action.data.selectedFacets,
        page: action.data.page || 1,
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
