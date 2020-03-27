"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = searchReducer;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function searchReducer(state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return _objectSpread({}, state, {
        loading: true
      });

    case 'GET_SEARCH_ENGINE':
      return _objectSpread({}, state, {
        loading: false,
        searchEngine: action.data.searchEngine,
        searchType: action.data.searchType,
        facets: action.data.facets
      });

    case 'GET_SEARCH_DATA':
      return _objectSpread({}, state, {
        loading: false,
        totalItems: action.data.totalItems,
        items: action.data.items,
        facetsResults: action.data.facetsResults
      });

    case 'SET_SEARCH_PARAMETERS':
      return _objectSpread({}, state, {
        searchURL: action.data.searchURL
      });

    case 'UPDATE_SORT':
      return _objectSpread({}, state, {
        sort: action.data.sort,
        sort_order: action.data.sort_order
      });

    case 'UPDATE_FULLTEXT':
      return _objectSpread({}, state, {
        fulltext: action.data.fulltext
      });

    case 'UPDATE_PAGE_SIZE':
      return _objectSpread({}, state, {
        'page-size': action.data['page-size'],
        page: 1
      });

    case 'UPDATE_CURRENT_PAGE':
      return _objectSpread({}, state, {
        page: action.data.page
      });

    case 'UPDATE_FACETS':
      return _objectSpread({}, state, {
        selectedFacets: action.data.selectedFacets,
        page: 1
      });

    case 'RESET_FULLTEXT':
      return _objectSpread({}, state, {
        fulltext: ''
      });

    case 'RESET_FACETS':
      return _objectSpread({}, state, {
        selectedFacets: action.data.selectedFacets,
        page: 1
      });

    case 'RESET_ALL':
      return _objectSpread({}, state, {
        fulltext: '',
        selectedFacets: []
      });

    default:
      return 'Not a valid action type.';
  }
}