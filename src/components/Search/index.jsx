import React, { useEffect,useReducer } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import searchReducer from '../../services/search/search_reducer';
import { SearchDispatch, defaultSearchState } from '../../services/search/search_defaults';

import { useQuery } from '@tanstack/react-query';
import SearchContent from "../../templates/SearchContent";
import SearchSidebar from '../../templates/SearchSidebar';
import { getApiSearchParams, normalizeItems } from './functions';

const getSearchData = (apiParams, searchEndpoint) => {
  const { isPending, error, data } = useQuery({
    queryKey: ['searchData', apiParams],
    queryFn: () => {
      return fetch(`${searchEndpoint}?${apiParams}&facets=0`).then(
        (res) => res.json(),
      )
    }
  });
  return {loading: isPending, data};
};

const Search = ({
  initialSearchState,
  searchEndpoint,
  defaultFacets,
  sortOptions,
  setSearchUrl,
  path
}) => {
  const defaultState = {
    ...defaultSearchState,
    ...initialSearchState,
  };

  const [searchState, dispatch] = useReducer(searchReducer, defaultState);

  // On Mount: Synchronize url params with search state.
  useEffect(() => {
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
  }, []);

  // Update URL.
  useEffect(() => {
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
      
      searchUrl = Object.keys(params).length ? `${path}?${params}` : `${path}`;
      const currentUrl = `${loc.pathname}${loc.search}`;

      if (window !== undefined && searchUrl !== currentUrl) {
        window.history.pushState({}, 'Search', `${searchUrl}`);
      }
    }
  }, [
    searchState.sort,
    searchState['sort-order'],
    searchState.fulltext,
    searchState['page-size'],
    searchState.page,
    searchState.selectedFacets,
  ]);

  const apiParams = getApiSearchParams(searchState, defaultFacets, sortOptions);
  const {loading, data} = getSearchData(apiParams, searchEndpoint);

  // facets
  let facets = []
  Object.keys(defaultFacets).forEach((facet) => {
    const { isPending, error, data } = useQuery({
      queryKey: ['getFacets', facet + apiParams],
      queryFn: () => {
        return fetch(`${searchEndpoint}?${apiParams}&facets=${facet}`).then(
          (res) => res.json(),
        )
      }
    });
    if(data) {
      data.facets.map((facet) => {
        facets.push(facet)
      })
    }
  });

  return (
    <SearchDispatch.Provider
      value={{
        searchState, dispatch, defaultFacets,
      }}
    >
      { data && (
        <div className="row">
          <SearchContent
            loading={loading}
            data={data}
          />
          <SearchSidebar facetsResults={facets} sortOptions={sortOptions} />
        </div>
      )}
    </SearchDispatch.Provider>
  );
};

Search.defaultProps = {
  setSearchUrl: true,
  normalize: null,
  initialSearchState: {},
};

Search.propTypes = {
  initialSearchState: PropTypes.objectOf(PropTypes.object),
  searchEndpoint: PropTypes.string.isRequired,
  defaultFacets: PropTypes.objectOf(PropTypes.object).isRequired,
  sortOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSearchUrl: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

export default Search;
