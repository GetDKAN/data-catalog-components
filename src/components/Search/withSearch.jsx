/* eslint-disable no-plusplus */
/* eslint react/prop-types: 0 */
import React from 'react';
import queryString from 'query-string';
import axios from 'axios';
import search from '../../services/search/search';

export default function withSearch(OriginalComponent, apiEndPoint) {
  return class extends React.Component {
    /**
     * Maps search results to something like a familiar schema.
     */
    static async normalize(items) {
      return items.map((x) => {
        let item = {};
        item = {
          identifier: x.identifier,
          modified: x.modified,
          description: x.description,
          theme: x.theme,
          format: x.distribution,
          title: x.title,
          ref: `/dataset/${x.identifier}`,
        };
        if (Object.prototype.hasOwnProperty.call(x, 'publisher') && Object.prototype.hasOwnProperty.call(x, 'name')) {
          item.publisher = x.publisher.name;
        } else {
          item.publisher = '';
        }
        return item;
      });
    }

    constructor(props) {
      super(props);
      this.searchEngineType = props.searchType;
      this.dynamicURL = apiEndPoint;
      this.sortOptions = [
        {
          title: 'Relevance',
          value: 'relevance',
        },
        {
          title: 'Date',
          value: 'date',
        },
        {
          title: 'Alphabetical',
          value: 'alpha',
        },
      ];
      this.state = {
        searchEngine: false,
        searchParams: props.defaultParams,
        selectedFacets: props.selectedFacets || [],
        totalFacets: {},
        facetsResults: {},
        searchLink: '',
      };

      this.handleSortChange = this.handleSortChange.bind(this);
      this.handlePageChange = this.handlePageChange.bind(this);
      this.handlePageSizeChange = this.handlePageSizeChange.bind(this);
      this.handleTermChange = this.handleTermChange.bind(this);
      this.handleFacetChange = this.handleFacetChange.bind(this);
      this.setUrl = this.setUrl.bind(this);
      this.staticFacets = this.staticFacets.bind(this);
      this.filteredFacets = this.filteredFacets.bind(this);
      this.resetFacets = this.resetFacets.bind(this);
      this.paginationResults = this.paginationResults.bind(this);
    }

    componentDidMount() {
      const { searchEngine } = this.state;
      this.resolveParams();
      if (!searchEngine) {
        this.initSearch();
      }
    }

    componentDidUpdate(prevProps) {
      const { location } = this.props;
      // Typical usage (don't forget to compare props):
      if (location.search !== undefined && (location.search !== prevProps.location.search)) {
        this.resolveParams();
        this.fetchData();
      }
    }

    /**
     * Set new URL params after update.
     */
    setUrl() {
      const { facets } = this.props;
      const { searchParams } = this.state;
      const searchUrl = '/search';
      const newParams = {};
      const facetKeys = Object.keys(facets);
      const facetParams = searchParams.facets;

      if (searchParams.sort) {
        newParams.sort = searchParams.sort;
      }
      if (searchParams.page) {
        newParams.page = searchParams.page;
      }
      if (searchParams.pageSize) {
        newParams.pageSize = searchParams.pageSize;
      }
      if (searchParams.q) {
        newParams.q = searchParams.q;
      }

      for (let i = 0; i < facetKeys.length; i += 1) {
        const key = facetKeys[i];
        let paramString = '';
        const facetItems = facetParams.filter((param) => {
          if (param[0] === key) {
            return param[1];
          }
          return false;
        });
        for (let x = 0; x < facetItems.length; x += 1) {
          paramString += `${facetItems[x][1]},`;
        }
        paramString = paramString.slice(0, -1);
        if (paramString) {
          newParams[key.toLowerCase()] = paramString;
        }
      }
      const searchUrlParams = `${searchUrl}?${queryString.stringify(newParams)}`;
      this.setState({ searchLink: searchUrlParams });
      if (window !== undefined) {
        window.history.pushState({}, 'Search', `${searchUrlParams}`);
      }
    }

    /**
     * Called on page load. Inits search engine and plugs in params to search.
     */
    async initSearch() {
      const { facets } = this.props;
      const searchType = this.searchEngineType;
      const searchEngine = new search[searchType]();
      if (searchType === 'Lunr') {
        const { data } = await axios.get(apiEndPoint);
        await searchEngine.init(data, facets);
      }
      this.setState({
        searchEngine,
      });
      await this.fetchData(true);
    }

    resolveParams() {
      const { location, facets } = this.props;
      const { searchParams } = this.state;
      let { selectedFacets } = this.state;
      const queryParams = queryString.parse(location.search);

      if (queryParams && queryParams.sort) {
        searchParams.sort = queryParams.sort;
      }
      if (queryParams && queryParams.page) {
        searchParams.page = parseInt(queryParams.page, 10);
      }
      if (queryParams && queryParams.pageSize) {
        searchParams.pageSize = parseInt(queryParams.pageSize, 10);
      }
      if (queryParams && queryParams.q) {
        searchParams.q = queryParams.q;
      }
      const facetKeys = Object.keys(facets);
      const paramFacetArray = Object.entries(queryParams).filter((obj) => {
        for (let i = 0; i < facetKeys.length; i += 1) {
          if (facetKeys[i].toLowerCase() === obj[0]) {
            const capitalKey = obj[0].charAt(0).toUpperCase() + obj[0].slice(1);
            const newFacetArray = obj[1].split(',').map((param) => [capitalKey, param]);
            return newFacetArray;
          }
        }
        return false;
      });

      searchParams.facets = searchParams.facets.concat(paramFacetArray);
      selectedFacets = selectedFacets.concat(paramFacetArray);

      this.setState({
        searchParams,
        selectedFacets,
      });
    }

    /**
     * Fetches data based on state.
     */
    async fetchData(isInit = false) {
      const { searchParams, selectedFacets, searchEngine } = this.state;
      if (isInit) {
        const r = await searchEngine.query('', [], searchParams.pageSize, searchParams.page, searchParams.sort);
        await this.setState({ totalFacets: r.facetsResults });
      }
      const r = await searchEngine.query(
        searchParams.q, selectedFacets, searchParams.pageSize, searchParams.page, searchParams.sort,
      );
      const items = await this.constructor.normalize(r.results);
      const { facetsResults, total } = r;
      await this.setState({
        items,
        total,
        facetsResults,
        show: false,
      });
      if (!isInit) {
        await this.setUrl();
      }
    }

    /**
     * Sort Results.
     */
    async handleSortChange(event) {
      const { searchParams } = this.state;
      const sort = event.target.value;
      searchParams.sort = sort;
      this.setState({ searchParams });
      await this.fetchData();
    }

    /**
     * Pagination.
     */
    async handlePageChange(page) {
      const { searchParams } = this.state;
      searchParams.page = parseInt(page, 10);
      this.setState({ searchParams });
      await this.fetchData();
    }

    /**
     * Change Page Size.
     */
    async handlePageSizeChange(event) {
      const { searchParams } = this.state;
      const pageSize = parseInt(event.target.value, 10);
      searchParams.page = 1;
      searchParams.pageSize = parseInt(pageSize, 10);
      await this.fetchData();
    }

    /**
     * Search Term update.
     */
    async handleTermChange(event, reset) {
      const { searchParams } = this.state;
      let term;
      if (reset) {
        term = '';
      } else {
        term = event.target.value;
      }
      searchParams.q = term;
      this.setState({ searchParams });
      await this.fetchData();
    }

    /**
     * Facet updates.
     */
    async handleFacetChange(e) {
      const { selectedFacets, searchParams } = this.state;
      const facetType = e.target.name;
      const facetValue = e.target.value;
      const active = e.target.checked;

      let updatedFacets;
      if (selectedFacets !== undefined || selectedFacets.length < 0) {
        updatedFacets = selectedFacets;
      }

      if (active === true) {
        updatedFacets.push([facetType, facetValue]);
      } else {
        updatedFacets = selectedFacets.filter((facet) => (facet[1] !== facetValue));
      }
      searchParams.page = 1;
      searchParams.facets = updatedFacets;
      await this.setState({
        searchParams,
        selectedFacets: updatedFacets,
      });
      await this.fetchData();
    }

    staticFacets(facetKey) {
      const { totalFacets, facetsResults } = this.state;
      const returnedFacets = totalFacets[facetKey].map((facet) => {
        const hasResults = facetsResults[facetKey].find((element) => element[0] === facet[0]);
        if (!hasResults) {
          return [facet[0], 0];
        }
        return [facet[0], hasResults[1]];
      });
      return returnedFacets;
    }

    filteredFacets(facetKey) {
      const { totalFacets, selectedFacets, facetsResults } = this.state;
      const returnedFacets = totalFacets[facetKey].filter((facet) => {
        const hasResults = facetsResults[facetKey].find((activeFacet) => (
          activeFacet[0] === facet[0]
        ));
        const selected = selectedFacets.find((selectedFacet) => (
          (selectedFacet[1].toLowerCase() === facet[0].toLowerCase())
          && (selectedFacet[0].toLowerCase() === facetKey.toLowerCase())
        ));
        if (selected || hasResults) {
          return facet;
        }
        return false;
      }).map((facet) => {
        const hasResults = facetsResults[facetKey].find((activeFacet) => (
          activeFacet[0] === facet[0]
        ));
        if (hasResults) {
          return [facet[0], hasResults[1]];
        }
        return [facet[0], 0];
      });
      return returnedFacets;
    }

    async resetFacets(facetKey = null) {
      const { selectedFacets, searchParams } = this.state;
      let updatedFacets;
      if (selectedFacets !== undefined || selectedFacets.length < 0) {
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
      searchParams.facets = updatedFacets;
      await this.setState({
        searchParams,
        selectedFacets: updatedFacets,
      });
      await this.fetchData();
    }

    async paginationResults() {
      const { total, searchParams } = this.state;
      const startingNumber = total > 0 ? 1 : 0;
      const currentLowestResult = startingNumber
        + ((searchParams.pageSize * searchParams.page) - searchParams.pageSize);
      let currentHighestResult = (searchParams.pageSize * searchParams.page);
      if (currentHighestResult > total) {
        currentHighestResult = total;
      }
      return {
        currentHighestResult,
        currentLowestResult,
      };
    }

    render() {
      const {
        items,
        facetsResults,
        totalFacets,
        total,
        searchParams,
        selectedFacets,
        searchLink,
      } = this.state;
      return (
        <OriginalComponent
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...this.props}
          items={items}
          facetsResults={facetsResults}
          totalFacets={totalFacets}
          total={total}
          searchParams={searchParams}
          selectedFacets={selectedFacets}
          searchLink={searchLink}
          options={{
            sort: this.sortOptions,
          }}
          searchFunctions={{
            sort: this.handleSortChange,
            pageChange: this.handlePageChange,
            pageSizeChange: this.handlePageSizeChange,
            termChange: this.handleTermChange,
            facetChange: this.handleFacetChange,
            filteredFacets: this.filteredFacets,
            staticFacets: this.staticFacets,
            resetFacets: this.resetFacets,
            paginationResults: this.paginationResults,
          }}
        />
      );
    }
  };
}
