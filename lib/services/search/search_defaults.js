"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSearchState = exports.SearchDispatch = void 0;

var _react = require("react");

var SearchDispatch = (0, _react.createContext)(null);
exports.SearchDispatch = SearchDispatch;
var defaultSearchState = {
  facets: [],
  facetsResults: {},
  loading: false,
  page: 1,
  'page-size': 10,
  fulltext: '',
  selectedFacets: [],
  sort: 'modified',
  sort_order: 'desc',
  totalItems: 0
};
exports.defaultSearchState = defaultSearchState;