"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = resourceReducer;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function resourceReducer(state, action) {
  switch (action.type) {
    case 'GET_STORE':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case 'NO_DATASTORE':
      return _objectSpread(_objectSpread({}, state), {}, {
        storeType: null
      });

    case 'USE_STORE':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        values: action.data.values,
        store: action.data.store,
        storeType: action.data.storeType,
        columns: action.data.columns,
        rowsTotal: action.data.rowsTotal,
        queryAll: true,
        count: action.data.count
      });

    case 'QUERY_STORE':
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        values: action.data.values,
        count: action.data.count,
        queryAll: false,
        updateQuery: false
      });

    case 'UPDATE_PAGE':
      return _objectSpread(_objectSpread({}, state), {}, {
        currentPage: action.data.page,
        updateQuery: true
      });

    case 'UPDATE_FILTERS':
      return _objectSpread(_objectSpread({}, state), {}, {
        filters: action.data.filters,
        currentPage: 0,
        updateQuery: true
      });

    case 'UPDATE_PAGE_SIZE':
      return _objectSpread(_objectSpread({}, state), {}, {
        pageSize: Number(action.data.pageSize),
        currentPage: 0,
        updateQuery: true
      });

    case 'UPDATE_COLUMN_SORT':
      return _objectSpread(_objectSpread({}, state), {}, {
        sort: action.data.sort,
        updateQuery: true
      });

    case 'REORDER_COLUMNS':
      return _objectSpread(_objectSpread({}, state), {}, {
        columnOrder: action.data.columnOrder,
        updateQuery: true
      });

    case 'TOGGLE_COLUMNS':
      return _objectSpread(_objectSpread({}, state), {}, {
        excludedColumns: action.data.excludedColumns,
        updateQuery: true
      });

    case 'UPDATE_DENSITY':
      return _objectSpread(_objectSpread({}, state), {}, {
        density: action.data.density,
        updateQuery: true
      });

    default:
      return 'Not a valid action type.';
  }
}