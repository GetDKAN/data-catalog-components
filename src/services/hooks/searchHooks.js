// import React from 'react';
// import axios from 'axios';
// import queryString from 'query-string';
// import search from '../search/search';

// export function useLunrSearch(url, defaultFacets) {
//   const [searchEngine, setSearchEngine] = React.useState();
//   React.useEffect(() => {
//     // eslint-disable-next-line dot-notation
//     const newSearchEngine = new search['Lunr']();
//     async function fetchSearchIndex() {
//       const data = await axios.get(url);
//       return data;
//     }
//     async function initSearchEngine() {
//       const { data } = await fetchSearchIndex();
//       await newSearchEngine.init(data, defaultFacets);
//       await setSearchEngine(newSearchEngine);
//     }
//     initSearchEngine();
//   }, [url, defaultFacets]);

//   return searchEngine;
// }

// export function useSearchData(
//   searchEngine,
//   searchPage,
//   searchQuery,
//   searchSort,
//   searchPageSize,
//   selectedFacets,
// ) {
//   const [loading, setLoading] = React.useState(true);
//   const [totalResults, setTotalResults] = React.useState(0);
//   const [facetResults, setFacetResults] = React.useState({});
//   const [items, setItems] = React.useState([]);

//   React.useEffect(() => {
//     function normalizeItems(resultItems) {
//       return resultItems.map((x) => {
//         let item = {};
//         item = {
//           identifier: x.identifier,
//           modified: x.modified,
//           description: x.description,
//           theme: x.theme,
//           format: x.distribution,
//           title: x.title,
//           ref: `/dataset/${x.identifier}`,
//         };
//         if (Object.prototype.hasOwnProperty.call(x, 'publisher') && Object.prototype.hasOwnProperty.call(x, 'name')) {
//           item.publisher = x.publisher.name;
//         } else {
//           item.publisher = '';
//         }
//         return item;
//       });
//     }

//     async function fetchData() {
//       if (searchEngine !== null) {
//         const results = await searchEngine.query(
//           searchQuery, selectedFacets, searchPageSize, searchPage, searchSort,
//         );
//         setFacetResults(results.facetsResults);
//         setItems(normalizeItems(results.results));
//         setTotalResults(results.total);
//         setLoading(false);
//       }
//     }

//     if (searchEngine !== undefined) {
//       fetchData();
//     }
//   }, [
//     searchEngine, searchPage, searchQuery, searchSort, searchPageSize, selectedFacets,
//   ]);

//   return [loading, items, facetResults, totalResults];
// }


// export function useFacetTypes(facets) {
//   const facetTypes = Object.keys(facets);
//   return facetTypes;
// }

// export function useUrlParams(
//   searchUrl, defaultFacets, searchPage, searchQuery, searchSort, searchPageSize, selectedFacets,
// ) {
//   const [newParams, setNewParams] = React.useState({});
//   const facetKeys = Object.keys(defaultFacets);

//   React.useEffect(() => {
//     const params = {};
//     params.sort = searchSort;
//     params.page = searchPage;
//     params.pageSize = searchPageSize;
//     params.q = searchQuery;

//     facetKeys.map((key) => {
//       let paramString = '';
//       const facetItems = selectedFacets.filter((param) => {
//         if (param[0] === key) {
//           return param[1];
//         }
//         return false;
//       });

//       facetItems.map((item) => {
//         paramString += `${item[1]},`;
//         return paramString;
//       });

//       paramString = paramString.slice(0, -1);
//       if (paramString) {
//         params[key] = paramString;
//       }
//       return paramString;
//     });
//     setNewParams(params);
//   }, [searchSort, searchPage, searchPageSize, searchQuery, selectedFacets]);

//   return `${searchUrl}?${queryString.stringify(newParams)}`;
// }

// export function useFilteredFacets(facetKey, selectedFacets, facetResults) {
//   const [returnedFacets, setReturnedFacets] = React.useState([]);

//   React.useEffect(() => {
//     const filteredFacets = facetResults[facetKey].filter((facet) => {
//       const hasResults = facetResults[facetKey].find((activeFacet) => (
//         activeFacet[0] === facet[0]
//       ));
//       const selected = selectedFacets.find((selFacet) => (
//         (selFacet[1].toLowerCase() === facet[0].toLowerCase())
//           && (selFacet[0].toLowerCase() === facetKey.toLowerCase())
//       ));

//       if (selected || hasResults) {
//         return facet;
//       }
//       return false;
//     }).map((facet) => {
//       const hasResults = facetResults[facetKey].find((activeFacet) => (
//         activeFacet[0] === facet[0]
//       ));

//       if (hasResults) {
//         return [facet[0], hasResults[1]];
//       }
//       return [facet[0], 0];
//     });

//     setReturnedFacets(filteredFacets);
//   }, [facetKey, selectedFacets, facetResults]);
//   return returnedFacets;
// }
