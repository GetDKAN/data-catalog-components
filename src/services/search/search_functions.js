// Since all facets are kept in one array, this function serves two purposes:
// Without a facetKey it will just return an empty array for all facets.
// With a facetKey it will just return all facets not matching the facetKey.
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

// Parse intitial facets based on query parameters from a url.
// Requires the facets be in an object of {facetKey: facetValue}.
export function buildInitialFacets(queryParams, defaultFacets) {
  const facetKeys = Object.keys(defaultFacets);
  const paramFacetArray = Object.entries(queryParams).filter((obj) => {
    for (let i = 0; i < facetKeys.length; i += 1) {
      if (facetKeys[i].toLowerCase() === obj[0].toLowerCase()) {
        const newFacetArray = obj[1].split(',').map((param) => [obj[0].toLowerCase(), param]);
        return newFacetArray;
      }
    }
    return false;
  });
  return paramFacetArray;
}

export function updateSort(value, options) {
  const newSort = options.filter((opt) => opt.field === value);
  return { type: 'UPDATE_SORT', data: { sort: newSort[0].field, 'sort-order': newSort[0].order } };
}
