import React, { useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import queryString from 'query-string';
import searchReducer from '../../services/search/search_reducer';
import { SearchDispatch, defaultSearchState } from '../../services/search/search_defaults';

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
  const [hasWindow, setHasWindow] = useState(false);
  const [searchState, dispatch] = useReducer(
    searchReducer,
    {
      ...defaultSearchState,
      ...initialSearchState,
      ...queryString.parse(location.search),
    },
  );

  useEffect(() => {
    if (window !== undefined) {
      setHasWindow(true);
    }
  }, []);

  useEffect(() => {
    function findSortParams() {
      const returnedSort = sortOptions.filter((option) => option.field === searchState.sort);
      if (!returnedSort.length) {
        returnedSort.push(sortOptions[0]);
      }
      return returnedSort;
    }

    async function getSearchData() {
      // Get data
      dispatch({ type: 'FETCH_DATA' });
      // Figure out sort options
      const currentSort = findSortParams();
      // set search params using sort and searchState
      const searchParams = {
        sort: currentSort[0].field,
        sort_order: currentSort[0].order,
        fulltext: searchState.fulltext,
        pageSize: searchState.pageSize,
        page: searchState.page,
      };
      // Set selected facets for search
      if (searchState.selectedFacets.length) {
        const facetKeys = Object.keys(defaultFacets);
        facetKeys.map((key) => {
          const searchFacets = searchState.selectedFacets.filter(
            (facet) => facet[0].toLowerCase() === key.toLowerCase(),
          );
          const facetText = searchFacets.map((facet) => facet[1]);
          if (facetText.length) {
            searchParams[key.toLowerCase()] = facetText;
          }
          return false;
        });
      }
      const params = queryString.stringify(searchParams, { arrayFormat: 'comma' });
      // set search url
      if (setSearchUrl) {
        const searchUrl = `${path}?${params}`;
        if (window !== undefined && searchUrl !== undefined) {
          window.history.pushState({}, 'Search', `${searchUrl}`);
        }
      }

      // make the search api request
      const results = await axios.get(`${searchEndpoint}?${params}`);

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
    searchState.pageSize,
    searchState.page,
    searchState.selectedFacets,
    normalize,
  ]);

  return (
    <SearchDispatch.Provider
      value={{
        searchState, dispatch, defaultFacets,
      }}
    >
      {hasWindow
      && children
      }
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
  updateSearchUrl: PropTypes.bool,
  path: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  normalize: PropTypes.func,
};

export default Search;
