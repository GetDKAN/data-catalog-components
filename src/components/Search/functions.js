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

export function getApiSearchParams(searchState, defaultFacets, sortOptions) {
  let state = {};
  state = Object.assign(state, searchState);

  const facetKeys = Object.keys(defaultFacets);
  const urlOptions = ['fulltext', 'sort', 'sort-order', 'page-size', 'page', ...facetKeys];

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

export function normalizeItems(resultItems) {
  let nItems = resultItems;
  if (!Array.isArray(nItems)) {
    nItems = Object.values(nItems);
  }
  return nItems.map((x) => {
    let item = {};
    item = {
      identifier: x.identifier,
      modified: x.modified,
      description: x.description,
      theme: x.theme,
      format: x.distribution,
      title: x.title,
      ref: `/dataset/${x.identifier}`
    };
    if (
      Object.prototype.hasOwnProperty.call(x, "publisher") &&
      Object.prototype.hasOwnProperty.call(x.publisher, "name")
    ) {
      item.publisher = x.publisher.name;
    } else {
      item.publisher = "";
    }
    return item;
  });
}