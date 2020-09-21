"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultResourceState = exports.ResourceDispatch = void 0;

var _react = require("react");

var ResourceDispatch = /*#__PURE__*/(0, _react.createContext)(null);
exports.ResourceDispatch = ResourceDispatch;
var defaultResourceState = {
  columnOrder: [],
  columns: [],
  count: 0,
  currentPage: 0,
  density: 'density-3',
  excludedColumns: {},
  filters: [],
  loading: false,
  pageSize: 20,
  queryAll: false,
  rowsTotal: 0,
  sort: [],
  store: null,
  values: []
};
exports.defaultResourceState = defaultResourceState;