"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetSelectedFacets = resetSelectedFacets;
exports.buildInitialFacets = buildInitialFacets;
exports.setSelectedFacets = setSelectedFacets;
exports.updateSort = updateSort;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

// Since all facets are kept in one array, this function serves two purposes:
// Without a facetKey it will just return an empty array for all facets.
// With a facetKey it will just return all facets not matching the facetKey.
function resetSelectedFacets(selectedFacets) {
  var facetKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var updatedFacets = [];

  if (selectedFacets !== undefined && selectedFacets.length > 0) {
    updatedFacets = selectedFacets;
  }

  if (facetKey) {
    updatedFacets = updatedFacets.filter(function (facet) {
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
      selectedFacets: updatedFacets
    }
  };
} // Parse intitial facets based on query parameters from a url.
// Requires the facets be in an object of {facetKey: facetValue}.


function buildInitialFacets(queryParams, defaultFacets) {
  var facetKeys = Object.keys(defaultFacets);
  var paramFacetArray = Object.entries(queryParams).filter(function (obj) {
    for (var i = 0; i < facetKeys.length; i += 1) {
      if (facetKeys[i].toLowerCase() === obj[0].toLowerCase()) {
        var newFacetArray = obj[1].split(',').map(function (param) {
          return [obj[0].toLowerCase(), param];
        });
        return newFacetArray;
      }
    }

    return false;
  });
  return paramFacetArray;
}

function setSelectedFacets(eventTarget, selectedFacets, singular) {
  var facetType = eventTarget.name;
  var facetValue = eventTarget.value;
  var active = eventTarget.checked;
  var updatedFacets = selectedFacets;
  var newFacetList = [];

  if (singular) {
    updatedFacets = selectedFacets.filter(function (facet) {
      return facet[0] !== facetType;
    });
  }

  if (active === true) {
    newFacetList = [].concat((0, _toConsumableArray2["default"])(updatedFacets), [[facetType, facetValue]]);
  } else {
    newFacetList = updatedFacets.filter(function (facet) {
      return facet[1] !== facetValue;
    });
  }

  return {
    type: 'UPDATE_FACETS',
    data: {
      selectedFacets: newFacetList
    }
  };
}

function updateSort(value, options) {
  var newSort = options.filter(function (opt) {
    return opt.field === value;
  });
  return {
    type: 'UPDATE_SORT',
    data: {
      sort: newSort[0].field,
      sort_order: newSort[0].order
    }
  };
}