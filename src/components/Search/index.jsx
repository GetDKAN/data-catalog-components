import React, { useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import queryString from 'query-string';
import searchReducer from '../../services/search/search_reducer';
import { SearchDispatch, defaultSearchState } from '../../services/search/search_defaults';
import { buildInitialFacets } from '../../services/search/search_functions';

const Search = ({
  initialSearchState,
  searchEndpoint,
  children,
  defaultFacets,
  sortOptions,
  setSearchUrl,
  path,
  location,
  normalize,
}) => {
  const parsedQuery = queryString.parse(location.search);
  const [hasWindow, setHasWindow] = useState(false);
  const [searchState, dispatch] = useReducer(
    searchReducer,
    {
      ...defaultSearchState,
      ...initialSearchState,
      ...parsedQuery,
    },
  );

  useEffect(() => {
    if (window !== undefined) {
      setHasWindow(true);
    }
    const initialFacets = buildInitialFacets(queryString.parse(location.search), defaultFacets);
    searchState.selectedFacets = (initialSearchState && initialSearchState.selectedFacets)
      ? initialSearchState.selectedFacets : initialFacets;
    searchState.fulltext = parsedQuery.fulltext ? parsedQuery.fulltext : '';
    searchState.page = parsedQuery.page ? parsedQuery.page : defaultSearchState.page;
    searchState.sort = parsedQuery.sort ? parsedQuery.page : defaultSearchState.sort;
    searchState.sort_order = parsedQuery.sort_order
      ? parsedQuery.sort_order : defaultSearchState.sort_order;
    searchState['page-size'] = parsedQuery['page-size']
      ? parsedQuery['page-size'] : defaultSearchState['page-size'];
  }, [location]);

  useEffect(() => {
    function findSortParams() {
      const returnedSort = sortOptions.filter(
        (option) => (option.field === searchState.sort)
          || (option.label.toLowerCase() === searchState.sort),
      );
      if (!returnedSort.length) {
        returnedSort.push(sortOptions[0]);
      }
      return returnedSort;
    }

    async function getSearchData() {
      const facetKeys = Object.keys(defaultFacets);
      const urlOptions = ['fulltext', 'sort', 'sort_order', 'page-size', 'page', ...facetKeys];
      // Get data
      dispatch({ type: 'FETCH_DATA' });
      // Figure out sort options
      const currentSort = findSortParams();
      searchState.sort = currentSort[0].field;
      // set search params using sort and searchState
      const searchParams = {};
      const apiSearchParams = {};

      urlOptions.forEach((param) => {
        if (searchState[param] !== defaultSearchState[param]) {
          searchParams[param] = searchState[param];
        }
        apiSearchParams[param] = searchState[param];
      });

      // Set selected facets for search
      if (searchState.selectedFacets.length) {
        facetKeys.map((key) => {
          const searchFacets = searchState.selectedFacets.filter(
            (facet) => facet[0].toLowerCase() === key.toLowerCase(),
          );
          const facetText = searchFacets.map((facet) => facet[1]);
          if (facetText.length) {
            searchParams[key.toLowerCase()] = facetText;
            apiSearchParams[key.toLowerCase()] = facetText;
          }
          return false;
        });
      }

      const params = queryString.stringify(searchParams, { arrayFormat: 'comma' });
      const apiParams = queryString.stringify(apiSearchParams, { arrayFormat: 'comma' });
      // set search url
      if (setSearchUrl) {
        const searchUrl = Object.keys(params).length ? `${path}/?${params}` : `${path}/`;
        if (window !== undefined && searchUrl !== `${location.pathname}${location.search}`) {
          window.history.pushState({}, 'Search', `${searchUrl}`);
        }
      }

      // make the search api request
      const results = await axios.get(`${searchEndpoint}?${apiParams}`);

      // dispatch results to reducer
      dispatch({
        type: 'GET_SEARCH_DATA',
        data: {
          totalItems: results.data.total,
          items: normalize ? normalize(results.data.results) : results.data.results,
          facetsResults: results.data.facets,
        },
      });
    }

    // Do all the above
    getSearchData();
  }, [
    sortOptions,
    defaultFacets,
    path,
    setSearchUrl,
    searchEndpoint,
    searchState.sort,
    searchState.fulltext,
    searchState['page-size'],
    searchState.page,
    searchState.selectedFacets,
    normalize,
    location,
  ]);

  return (
    <SearchDispatch.Provider
      value={{
        searchState, dispatch, defaultFacets,
      }}
    >
      { hasWindow
      && children }
    </SearchDispatch.Provider>
  );
};

Search.defaultProps = {
  setSearchUrl: true,
  normalize: null,
};

Search.propTypes = {
  searchEndpoint: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultFacets: PropTypes.objectOf(PropTypes.object).isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSearchUrl: PropTypes.bool,
  path: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  normalize: PropTypes.func,
};

export default Search;
