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
      if (facetKeys[i] === obj[0]) {
        const capitalKey = obj[0].charAt(0).toUpperCase() + obj[0].slice(1);
        const newFacetArray = obj[1].split(',').map((param) => [capitalKey, param]);
        return newFacetArray;
      }
    }
    return false;
  });
  return {
    type: 'UPDATE_FACETS',
    data: {
      selectedFacets: paramFacetArray,
    },
  };
}

export function setSelectedFacets(eventTarget, selectedFacets, singular) {
  const facetType = eventTarget.name;
  const facetValue = eventTarget.value;
  const active = eventTarget.checked;
  let updatedFacets = selectedFacets;
  let newFacetList = [];
  if (singular) {
    updatedFacets = selectedFacets.filter((facet) => (facet[0] !== facetType));
  }
  if (active === true) {
    newFacetList = [...updatedFacets, [facetType, facetValue]];
  } else {
    newFacetList = updatedFacets.filter((facet) => (facet[1] !== facetValue));
  }
  return {
    type: 'UPDATE_FACETS',
    data: {
      selectedFacets: newFacetList,
    },
  };
}
