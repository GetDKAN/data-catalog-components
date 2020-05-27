"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = searchReducer;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function updateSelectedFacetsState(state, action) {
  var selectedFacets = state.selectedFacets;
  var newFacet = action.data.newFacet;
  var newSelectedFacets = (0, _toConsumableArray2["default"])(selectedFacets);
  var found = newSelectedFacets.findIndex(function (e) {
    return newFacet[0] === e[0] && newFacet[1] === e[1];
  });

  if (found > -1) {
    newSelectedFacets.splice(found, 1);
  } else {
    newSelectedFacets.push(newFacet);
  }

  return _objectSpread(_objectSpread({}, state), {}, {
    selectedFacets: newSelectedFacets,
    page: 1
  });
}

function searchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case 'GET_SEARCH_ENGINE':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        searchEngine: action.data.searchEngine,
        searchType: action.data.searchType,
        facets: action.data.facets
      });

    case 'SET_SEARCH_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        totalItems: action.data.totalItems,
        items: action.data.items
      });

    case 'SET_FACETS_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        facetsResults: action.data.facetsResults
      });

    case 'SET_SEARCH_PARAMETERS':
      return _objectSpread(_objectSpread({}, state), {}, {
        searchURL: action.data.searchURL
      });

    case 'UPDATE_SORT':
      return _objectSpread(_objectSpread({}, state), {}, {
        sort: action.data.sort,
        sort_order: action.data.sort_order
      });

    case 'UPDATE_SORT_ONLY':
      return _objectSpread(_objectSpread({}, state), {}, {
        sort: action.data.sort
      });

    case 'UPDATE_SORT_ORDER':
      return _objectSpread(_objectSpread({}, state), {}, {
        sort_order: action.data.sort_order
      });

    case 'UPDATE_FULLTEXT':
      return _objectSpread(_objectSpread({}, state), {}, {
        fulltext: action.data.fulltext,
        page: 1
      });

    case 'UPDATE_PAGE_SIZE':
      return _objectSpread(_objectSpread({}, state), {}, {
        'page-size': action.data['page-size'],
        page: 1
      });

    case 'UPDATE_CURRENT_PAGE':
      return _objectSpread(_objectSpread({}, state), {}, {
        page: action.data.page
      });

    case 'UPDATE_FACETS':
      return updateSelectedFacetsState(state, action);

    case 'RESET_FULLTEXT':
      return _objectSpread(_objectSpread({}, state), {}, {
        fulltext: ''
      });

    case 'RESET_FACETS':
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedFacets: action.data.selectedFacets,
        page: 1
      });

    case 'RESET_ALL':
      return _objectSpread(_objectSpread({}, state), {}, {
        fulltext: '',
        selectedFacets: []
      });

    default:
      return 'Not a valid action type.';
  }
}