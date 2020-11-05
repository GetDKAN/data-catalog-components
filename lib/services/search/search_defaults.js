"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSearchState = exports.SearchDispatch = void 0;

var _react = require("react");

var SearchDispatch = /*#__PURE__*/(0, _react.createContext)(null);
exports.SearchDispatch = SearchDispatch;
var defaultSearchState = {
  items: [],
  facetsResults: {},
  loading: false,
  page: 1,
  'page-size': 10,
  fulltext: '',
  selectedFacets: [],
  sort: 'modified',
  'sort-order': 'desc',
  totalItems: 0
};
exports.defaultSearchState = defaultSearchState;