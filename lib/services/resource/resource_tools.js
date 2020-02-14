"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resourceReducer = resourceReducer;
exports.prepareColumns = prepareColumns;
exports.queryResourceData = queryResourceData;
exports.queryAllResourceData = queryAllResourceData;
exports.getFileDatastore = getFileDatastore;
exports.getDKANDatastore = getDKANDatastore;
exports.advancedColumns = advancedColumns;
exports.defaultResourceState = exports.ResourceDispatch = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = require("react");

var _axios = _interopRequireDefault(require("axios"));

var _datastore = _interopRequireDefault(require("./datastore"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ResourceDispatch = (0, _react.createContext)(null);
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

function resourceReducer(state, action) {
  switch (action.type) {
    case 'GET_STORE':
      return _objectSpread({}, state, {
        loading: true
      });

    case 'NO_DATASTORE':
      return _objectSpread({}, state, {
        storeType: null
      });

    case 'USE_STORE':
      return _objectSpread({}, state, {
        loading: false,
        store: action.data.store,
        storeType: action.data.storeType,
        columns: action.data.columns,
        rowsTotal: action.data.rowsTotal,
        queryAll: true
      });

    case 'QUERY_STORE':
      return _objectSpread({}, state, {
        loading: false,
        values: action.data.values,
        count: action.data.count,
        queryAll: false
      });

    case 'UPDATE_PAGE':
      return _objectSpread({}, state, {
        currentPage: action.data.page
      });

    case 'UPDATE_FILTERS':
      return _objectSpread({}, state, {
        filters: action.data.filters,
        currentPage: 0
      });

    case 'UPDATE_PAGE_SIZE':
      return _objectSpread({}, state, {
        pageSize: Number(action.data.pageSize),
        currentPage: 0
      });

    case 'UPDATE_COLUMN_SORT':
      return _objectSpread({}, state, {
        sort: action.data.sort
      });

    case 'REORDER_COLUMNS':
      return _objectSpread({}, state, {
        columnOrder: action.data.columnOrder
      });

    case 'TOGGLE_COLUMNS':
      return _objectSpread({}, state, {
        excludedColumns: action.data.excludedColumns
      });

    case 'UPDATE_DENSITY':
      return _objectSpread({}, state, {
        density: action.data.density
      });

    default:
      return 'Not a valid action type.';
  }
} // Build columns in correct structure for Datatable component.


function prepareColumns(columns) {
  return columns.map(function (column) {
    return {
      Header: column,
      accessor: column
    };
  });
} // Get new rows of data from the datastore.


function queryResourceData(_x) {
  return _queryResourceData.apply(this, arguments);
} // Return all rows from the datastore.


function _queryResourceData() {
  _queryResourceData = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(resourceData) {
    var includeCount,
        filters,
        pageSize,
        currentPage,
        sort,
        store,
        items,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            includeCount = _args.length > 1 && _args[1] !== undefined ? _args[1] : false;
            filters = resourceData.filters, pageSize = resourceData.pageSize, currentPage = resourceData.currentPage, sort = resourceData.sort, store = resourceData.store;
            _context.next = 4;
            return store.query(filters, null, null, pageSize, currentPage, sort, includeCount).then(function (data) {
              return data;
            });

          case 4:
            items = _context.sent;
            return _context.abrupt("return", {
              type: 'QUERY_STORE',
              data: {
                values: items.data,
                count: items.count
              }
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _queryResourceData.apply(this, arguments);
}

function queryAllResourceData(_x2) {
  return _queryAllResourceData.apply(this, arguments);
} // Create a new datastore using a CSV file.


function _queryAllResourceData() {
  _queryAllResourceData = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(store) {
    var items;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return store.query(null, null, null, 0, null, null).then(function (data) {
              return data;
            });

          case 2:
            items = _context2.sent;
            return _context2.abrupt("return", {
              type: 'QUERY_STORE',
              data: {
                values: items.data,
                count: items.count
              }
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _queryAllResourceData.apply(this, arguments);
}

function getFileDatastore(_x3) {
  return _getFileDatastore.apply(this, arguments);
} // Create a new datastore using the DKAN datastore.


function _getFileDatastore() {
  _getFileDatastore = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(downloadURL) {
    var store, initCount, columns;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return new _datastore["default"]['file'](downloadURL);

          case 2:
            store = _context3.sent;

            if (!store) {
              _context3.next = 13;
              break;
            }

            _context3.next = 6;
            return store.query(null, null, null, 0, null, null, true).then(function (data) {
              return data;
            });

          case 6:
            initCount = _context3.sent;
            _context3.t0 = prepareColumns;
            _context3.next = 10;
            return store.getColumns();

          case 10:
            _context3.t1 = _context3.sent;
            columns = (0, _context3.t0)(_context3.t1);
            return _context3.abrupt("return", {
              type: 'USE_STORE',
              data: {
                store: store,
                rowsTotal: initCount.count,
                columns: columns,
                storeType: 'FILE'
              }
            });

          case 13:
            return _context3.abrupt("return", {
              type: 'NO_DATASTORE'
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getFileDatastore.apply(this, arguments);
}

function getDKANDatastore(_x4, _x5) {
  return _getDKANDatastore.apply(this, arguments);
} // Filter and reorder columns based on the toggled and reordered state.
// Use this to keep base columns in order so changes can be reset without
// extra queries to rebuild the data.


function _getDKANDatastore() {
  _getDKANDatastore = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(rootURL, resource) {
    var identifier, checkForDatastore, columns, numOfRows, store;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            identifier = resource.identifier;
            _context4.next = 3;
            return _axios["default"].get("".concat(rootURL, "datastore/imports/").concat(identifier)).then(function (res) {
              return res.data;
            })["catch"](function (e) {
              // eslint-disable-next-line no-console
              console.warn(e.message);
            });

          case 3:
            checkForDatastore = _context4.sent;

            if (!checkForDatastore) {
              _context4.next = 10;
              break;
            }

            columns = checkForDatastore.columns, numOfRows = checkForDatastore.numOfRows; // eslint-disable-next-line

            _context4.next = 8;
            return new _datastore["default"]['dkan'](identifier, columns, rootURL);

          case 8:
            store = _context4.sent;
            return _context4.abrupt("return", {
              type: 'USE_STORE',
              data: {
                store: store,
                rowsTotal: numOfRows,
                columns: prepareColumns(columns),
                storeType: 'DKAN',
                queryAll: true
              }
            });

          case 10:
            return _context4.abrupt("return", {
              type: 'NO_DATASTORE'
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _getDKANDatastore.apply(this, arguments);
}

function advancedColumns() {
  var columns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var updatedColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var excludedColumns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var excludedArray = [];
  var newItems = columns;

  if (updatedColumns.length) {
    newItems = updatedColumns;
  }

  Object.keys(excludedColumns).forEach(function (key) {
    if (!excludedColumns[key]) {
      excludedArray.push(key);
    }
  });
  var columnOrder = newItems.reduce(function (reordered, item) {
    if (!excludedArray.includes(item.accessor)) {
      reordered.push(item);
    }

    return reordered;
  }, []);
  return columnOrder;
}