import React, { useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import queryString from 'query-string';
import searchReducer from '../../services/search/search_reducer';
import { SearchDispatch, defaultSearchState } from '../../services/search/search_defaults';

const Search = ({
  
  searchEndpoint,
  children,
  defaultFacets,
  sortOptions,
  updateSearchUrl,
  path,
  location,
  normalize,
}) => {
  const [hasWindow, setHasWindow] = useState(false);
  const [searchState, dispatch] = useReducer(
    searchReducer,
    {
      ...defaultSearchState,
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
      dispatch({ type: 'FETCH_DATA' });
      const currentSort = findSortParams();
      const searchParams = {
        sort: currentSort[0].field,
        sort_order: currentSort[0].order,
        fulltext: searchState.fulltext,
        pageSize: searchState.pageSize,
        page: searchState.page,
      };
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
      if (updateSearchUrl) {
        const searchUrl = `${path}?${queryString.stringify(searchParams, { arrayFormat: 'comma' })}`;
        if (window !== undefined && searchUrl !== undefined) {
          window.history.pushState({}, 'Search', `${searchUrl}`);
        }
      }
      const results = await axios.get(`${searchEndpoint}?${queryString.stringify(searchParams, { arrayFormat: 'comma' })}`);

      dispatch({
        type: 'GET_SEARCH_DATA',
        data: {
          totalItems: results.data.total,
          items: normalize ? normalize(results.data.results) : results.data.results,
          facetsResults: results.data.facets,
        },
      });
    }
    getSearchData();
  }, [
    sortOptions,
    defaultFacets,
    path,
    updateSearchUrl,
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
  updateSearchUrl: true,
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
