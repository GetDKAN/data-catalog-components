"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareColumns = prepareColumns;
exports.advancedColumns = advancedColumns;
exports.getDKANDatastore = getDKANDatastore;
exports.queryResourceData = queryResourceData;
exports.queryAllResourceData = queryAllResourceData;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _datastore = _interopRequireDefault(require("./datastore"));

// Build columns in correct structure for Datatable component.
function prepareColumns(columns) {
  return columns.map(function (column) {
    return {
      Header: column,
      accessor: column
    };
  });
} // Filter and reorder columns based on the toggled and reordered state.
// Use this to keep base columns in order so changes can be reset without
// extra queries to rebuild the data.


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
} // Create a new datastore using the DKAN datastore.


function getDKANDatastore(_x, _x2) {
  return _getDKANDatastore.apply(this, arguments);
} // Get new rows of data from the datastore.


function _getDKANDatastore() {
  _getDKANDatastore = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(rootURL, resource) {
    var initLimit,
        showDBCols,
        identifier,
        store,
        _yield$store$getDatas,
        columns,
        numOfRows,
        items,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            initLimit = _args.length > 2 && _args[2] !== undefined ? _args[2] : 20;
            showDBCols = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
            identifier = resource.identifier;
            _context.next = 5;
            return _datastore["default"].create(identifier, rootURL);

          case 5:
            store = _context.sent;
            _context.next = 8;
            return store.getDatastoreInfo();

          case 8:
            _yield$store$getDatas = _context.sent;
            columns = _yield$store$getDatas.columns;
            numOfRows = _yield$store$getDatas.numOfRows;

            if (!numOfRows) {
              _context.next = 18;
              break;
            }

            // eslint-disable-next-line
            console.log(showDBCols);
            _context.next = 15;
            return store.query(null, null, null, initLimit, 0, null, false, showDBCols);

          case 15:
            items = _context.sent;
            console.log(items); //const sqlColumns = await axios.get(`${rootURL}datastore/sql/?query=[SELECT * FROM ${identifier}][LIMIT ${initLimit} OFFSET 0]${showDBCols ? '&show-db-columns' : ''}`);

            return _context.abrupt("return", {
              type: 'USE_STORE',
              data: {
                store: store,
                rowsTotal: numOfRows,
                columns: prepareColumns(columns),
                storeType: 'DKAN',
                queryAll: true,
                values: items.data,
                count: numOfRows
              }
            });

          case 18:
            return _context.abrupt("return", {
              type: 'NO_DATASTORE'
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getDKANDatastore.apply(this, arguments);
}

function queryResourceData(_x3) {
  return _queryResourceData.apply(this, arguments);
} // Return all rows from the datastore.


function _queryResourceData() {
  _queryResourceData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resourceData) {
    var showDBCols,
        includeCount,
        items,
        count,
        _args2 = arguments;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            showDBCols = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
            includeCount = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;
            _context2.next = 4;
            return resourceData.store.query(resourceData.filters, null, null, resourceData.pageSize, resourceData.currentPage, resourceData.sort, includeCount, showDBCols);

          case 4:
            items = _context2.sent;
            _context2.next = 7;
            return resourceData.store.query(resourceData.filters, null, null, resourceData.pageSize, resourceData.currentPage, resourceData.sort, true, showDBCols).then(function (data) {
              return data;
            });

          case 7:
            count = _context2.sent;
            return _context2.abrupt("return", {
              type: 'QUERY_STORE',
              data: {
                values: items.data,
                count: Number(count.data[0].expression)
              }
            });

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _queryResourceData.apply(this, arguments);
}

function queryAllResourceData(_x4) {
  return _queryAllResourceData.apply(this, arguments);
}

function _queryAllResourceData() {
  _queryAllResourceData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(store) {
    var items;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return store.query(null, null, null, 0, null, null);

          case 2:
            items = _context3.sent;
            ;
            return _context3.abrupt("return", {
              type: 'QUERY_STORE',
              data: {
                values: items.data,
                count: items.count
              }
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _queryAllResourceData.apply(this, arguments);
}