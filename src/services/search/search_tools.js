import { createContext } from 'react';
import axios from 'axios';
import search from './search';

export const SearchDispatch = createContext(null);

export const defaultSearchState = {
  page: 1,
  pageSize: 20,
  query: '',
  sort: 'date',
  facets: [],
  loading: false,
  searchEngine: null,
  items: [],
  selectedFacets: [],
  totalItems: 0,
  facetsResults: {},
};

export function searchReducer(state, action) {
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
    case 'UPDATE_SORT':
      return {
        ...state,
        sort: action.data.sort,
      };
    case 'UPDATE_QUERY':
      return {
        ...state,
        query: action.data.query,
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
    case 'RESET_QUERY':
      return {
        ...state,
        query: '',
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
        query: '',
      };
    default:
      return 'Not a valid action type.';
  }
}

export async function fetchSearchData(searchState, customNormalize = null) {
  const {
    page, pageSize, query, sort, selectedFacets, searchEngine,
  } = searchState;

  const data = await searchEngine.query(
    query, selectedFacets, pageSize, page, sort,
  );
  let items = data.results;
  if (customNormalize) {
    items = customNormalize(items);
  }
  return {
    type: 'GET_SEARCH_DATA',
    data: {
      totalItems: data.total,
      items,
      facetsResults: data.facetsResults,
    },
  };
}

export async function getLunrSearch(searchUrl, defaultFacets) {
  // eslint-disable-next-line dot-notation
  const newSearchEngine = new search['Lunr']();
  const { data } = await axios.get(searchUrl);
  await newSearchEngine.init(data, defaultFacets);
  return {
    type: 'GET_SEARCH_ENGINE',
    data: {
      searchEngine: newSearchEngine,
      searchType: 'Lunr',
      facets: newSearchEngine.facets,
    },
  };
}

export function setSelectedFacets(eventTarget, selectedFacets) {
  const facetType = eventTarget.name;
  const facetValue = eventTarget.value;
  const active = eventTarget.checked;
  const updatedFacets = selectedFacets;
  let newFacetList = [];
  if (active === true) {
    newFacetList = [...updatedFacets, [facetType, facetValue]];
  } else {
    newFacetList = selectedFacets.filter((facet) => (facet[1] !== facetValue))
  }
  return {
    type: 'UPDATE_FACETS',
    data: {
      selectedFacets: newFacetList,
    },
  };
}

export function resetSelectedFacets(selectedFacets, facetKey = null) {
  let updatedFacets = [];
  if (selectedFacets !== undefined && selectedFacets.length > 0) {
    updatedFacets = selectedFacets;
  }
  if (facetKey) {
    updatedFacets = updatedFacets.filter((facet) => {
      if (facet[0].toLowerCase() !== facetKey.toLowerCase()) {
        return facet;
      }
      return false;
    });
  } else {
    updatedFacets = [];
  }
  return {
    type: 'RESET_FACETS',
    data: {
      selectedFacets: updatedFacets,
    },
  };
}
