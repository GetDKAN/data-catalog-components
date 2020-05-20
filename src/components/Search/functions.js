import axios from 'axios';
import queryString from 'query-string';

function getSortParams(searchState, sortOptions) {
  const returnedSort = sortOptions.filter(
    (option) => (option.field === searchState.sort)
        || (option.label.toLowerCase() === searchState.sort),
  );
  if (!returnedSort.length) {
    returnedSort.push(sortOptions[0]);
  }
  return returnedSort;
}

function getApiSearchParams(searchState, defaultFacets, sortOptions) {
  let state = {};
  state = Object.assign(state, searchState);

  const facetKeys = Object.keys(defaultFacets);
  const urlOptions = ['fulltext', 'sort', 'sort_order', 'page-size', 'page', ...facetKeys];

  // Figure out sort options
  const currentSort = getSortParams(state, sortOptions);
  state.sort = currentSort[0].field;

  // set search params using sort and searchState
  const apiSearchParams = {};

  urlOptions.forEach((param) => {
    apiSearchParams[param] = state[param];
  });

  // Set selected facets for search
  if (state.selectedFacets.length) {
    facetKeys.map((key) => {
      const searchFacets = state.selectedFacets.filter(
        (facet) => facet[0].toLowerCase() === key.toLowerCase(),
      );
      const facetText = searchFacets.map((facet) => facet[1]);
      if (facetText.length) {
        apiSearchParams[key.toLowerCase()] = facetText;
      }
      return false;
    });
  }

  return queryString.stringify(apiSearchParams, { arrayFormat: 'comma' });
}

export default async function getData(
  searchEndpoint,
  normalize,
  searchState,
  defaultFacets,
  sortOptions,
  dispatch,
  facets = false,
) {
  // Transition to loading state.
  dispatch({ type: 'FETCH_DATA' });

  const apiParams = getApiSearchParams(searchState, defaultFacets, sortOptions);

  let type = '';
  let data = {};
  // make the search api request
  if (facets) {
    const results = await axios.get(`${searchEndpoint}/facets?${apiParams}`);
    type = 'SET_FACETS_DATA';
    data = {
      facetsResults: results.data.facets,
    };
  } else {
    const results = await axios.get(`${searchEndpoint}?${apiParams}`);
    type = 'SET_SEARCH_DATA';
    data = {
      totalItems: results.data.total,
      items: normalize ? normalize(results.data.results) : results.data.results,
    };
  }

  // dispatch results to reducer
  dispatch({
    type,
    data,
  });
}
