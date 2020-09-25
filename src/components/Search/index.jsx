import React, {
  useEffect, useState, useReducer, useRef,
} from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import searchReducer from '../../services/search/search_reducer';
import { SearchDispatch, defaultSearchState } from '../../services/search/search_defaults';
import getData from './functions';

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
  trailingSlashInUrl,
}) => {
  const defaultState = {
    ...defaultSearchState,
    ...initialSearchState,
  };

  const [hasWindow, setHasWindow] = useState(false);
  const [searchState, dispatch] = useReducer(searchReducer, defaultState);

  const firstUrl = useRef(true);
  const firstFetchSearch = useRef(true);
  const firstFetchFacet = useRef(true);

  // On Mount: Synchronize url params with search state.
  useEffect(() => {
    setHasWindow(true);

    // Set the state from query parameters.
    const params = queryString.parse(window.location.search);

    let dispatched = false;

    const actions = {};
    actions['page-size'] = 'UPDATE_PAGE_SIZE';
    actions.page = 'UPDATE_CURRENT_PAGE';
    actions.fulltext = 'UPDATE_FULLTEXT';
    actions.sort = 'UPDATE_SORT_ONLY';
    actions['sort-order'] = 'UPDATE_SORT_ORDER';

    const urlOptions = Object.keys(actions);

    urlOptions.forEach((param) => {
      if (params[param]) {
        const data = params;
        dispatched = true;
        dispatch({
          type: actions[param],
          data,
        });
      }
    });

    const facetKeys = Object.keys(defaultFacets);
    facetKeys.forEach((key) => {
      if (params[key]) {
        params[key].split(',').forEach((facetName) => {
          const newFacet = [key, facetName];
          dispatched = true;
          dispatch({
            type: 'UPDATE_FACETS',
            data: {
              newFacet,
              page: params.page
            },
          });
        });
      }
    });

    // We are relying on a state change to trigger a data fetch.
    // If we have no parameters to trigger the state change and dispatch,
    // lets force a data fetch.
    if (!dispatched) {
      getData(searchEndpoint, normalize, searchState, defaultFacets, sortOptions, dispatch);
      getData(searchEndpoint, normalize, searchState, defaultFacets, sortOptions, dispatch, true);
    }
  }, []);

  // Fetch Search Data.
  useEffect(() => {
    if (firstFetchSearch.current) {
      firstFetchSearch.current = false;
      return;
    }
    getData(searchEndpoint, normalize, searchState, defaultFacets, sortOptions, dispatch);
  }, [
    searchState.sort,
    searchState.fulltext,
    searchState['page-size'],
    searchState.page,
    searchState.selectedFacets,
  ]);

  // Fetch Facet Data.
  useEffect(() => {
    if (firstFetchFacet.current) {
      firstFetchFacet.current = false;
      return;
    }
    getData(searchEndpoint, normalize, searchState, defaultFacets, sortOptions, dispatch, true);
  }, [
    searchState.sort,
    searchState.fulltext,
    searchState['page-size'],
    searchState.page,
    searchState.selectedFacets,
  ]);

  // Update URL.
  useEffect(() => {
    if (firstUrl.current) {
      firstUrl.current = false;
      return;
    }

    const searchParams = {};
    const facetKeys = Object.keys(defaultFacets);
    const state = { ...searchState };

    // Set other url parameters
    const urlOptions = ['fulltext', 'sort', 'sort-order', 'page-size', 'page'];
    urlOptions.forEach((option) => {
      // We only want to store state in the url if they are not the default state.
      if (state[option] && state[option] !== defaultState[option]) {
        searchParams[option] = state[option];
      }
    });

    // Set selected facets for search
    if (state.selectedFacets.length) {
      facetKeys.forEach((key) => {
        const searchFacets = state.selectedFacets.filter(
          (facet) => facet[0].toLowerCase() === key.toLowerCase(),
        );

        searchFacets.forEach((facet) => {
          if (!(key in searchParams)) {
            searchParams[key] = [];
          }
          searchParams[key].push(facet[1]);
        });
      });
    }

    const params = queryString.stringify(searchParams, { arrayFormat: 'comma' });

    if (setSearchUrl) {
      const loc = window.location;
      let searchUrl = '';
      if (trailingSlashInUrl) {
        searchUrl = Object.keys(params).length ? `${path}/?${params}` : `${path}/`;
      }
      else {
        searchUrl = Object.keys(params).length ? `${path}?${params}` : `${path}`;
      }
      const currentUrl = `${loc.pathname}${loc.search}`;

      if (window !== undefined && searchUrl !== currentUrl) {
        window.history.pushState({}, 'Search', `${searchUrl}`);
      }
    }
  }, [
    searchState.items,
    searchState.facetsResults,
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
  initialSearchState: {},
  trailingSlashInUrl: true,
};

Search.propTypes = {
  initialSearchState: PropTypes.objectOf(PropTypes.object),
  searchEndpoint: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  defaultFacets: PropTypes.objectOf(PropTypes.object).isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSearchUrl: PropTypes.bool,
  path: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  normalize: PropTypes.func,
  trailingSlashInUrl: PropTypes.bool,
};

export default Search;
