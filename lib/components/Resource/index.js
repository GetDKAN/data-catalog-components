"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTable = require("react-table");

var _resource_defaults = require("../../services/resource/resource_defaults");

var _resource_reducer = _interopRequireDefault(require("../../services/resource/resource_reducer"));

var _resource_functions = require("../../services/resource/resource_functions");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Resource = function Resource(_ref) {
  var apiURL = _ref.apiURL,
      children = _ref.children,
      resource = _ref.resource,
      showDBColumnNames = _ref.showDBColumnNames,
      handleTransformQueryData = _ref.transformQueryData;

  var _useReducer = (0, _react.useReducer)(_resource_reducer["default"], _resource_defaults.defaultResourceState),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      resourceState = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    dispatch({
      type: 'GET_STORE'
    });

    function getStore() {
      return _getStore.apply(this, arguments);
    }

    function _getStore() {
      _getStore = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(resourceState.store === null)) {
                  _context.next = 6;
                  break;
                }

                _context.t0 = dispatch;
                _context.next = 4;
                return (0, _resource_functions.getDKANDatastore)(apiURL, resource, resourceState.pageSize, showDBColumnNames);

              case 4:
                _context.t1 = _context.sent;
                (0, _context.t0)(_context.t1);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getStore.apply(this, arguments);
    }

    getStore();
  }, []);
  (0, _react.useEffect)(function () {
    dispatch({
      type: 'GET_STORE'
    }); // async function getStore() {
    //   if (resourceState.store === null) {
    //     dispatch(await getDKANDatastore(apiURL, resource, resourceState.pageSize, true));
    //   }
    // }

    function queryStore() {
      return _queryStore.apply(this, arguments);
    }

    function _queryStore() {
      _queryStore = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var resourceData;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (handleTransformQueryData) {
                  resourceData = handleTransformQueryData(_objectSpread({}, resourceState));
                } else {
                  resourceData = resourceState;
                }

                _context2.t0 = dispatch;
                _context2.next = 4;
                return (0, _resource_functions.queryResourceData)(resourceData, showDBColumnNames);

              case 4:
                _context2.t1 = _context2.sent;
                (0, _context2.t0)(_context2.t1);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _queryStore.apply(this, arguments);
    }

    if (resourceState.updateQuery) {
      queryStore();
    } // if (resourceState.store !== null) {
    // } else {
    // getStore();
    // }

  }, [resourceState.updateQuery, resourceState.currentPage, resourceState.filters, resourceState.pageSize, resourceState.sort]);
  var columns = resourceState.columns,
      currentPage = resourceState.currentPage;
  var data = resourceState.values; // Define a default UI for filtering

  function DefaultColumnFilter(_ref2) {
    var _ref2$column = _ref2.column,
        filterValue = _ref2$column.filterValue,
        preFilteredRows = _ref2$column.preFilteredRows,
        setFilter = _ref2$column.setFilter,
        Header = _ref2$column.Header;
    var count = preFilteredRows ? preFilteredRows.length : 0;
    return /*#__PURE__*/_react["default"].createElement("input", {
      "aria-label": Header,
      value: filterValue || '',
      onChange: function onChange(e) {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      },
      placeholder: "Search ".concat(count, " records...")
    });
  }

  var filterTypes = _react["default"].useMemo(function () {
    return {
      // Add a new fuzzyTextFilterFn filter type.
      // fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: function text(rows, id, filterValue) {
        return rows.filter(function (row) {
          var rowValue = row.values[id];
          return rowValue !== undefined ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase()) : true;
        });
      }
    };
  }, []);

  var defaultColumn = _react["default"].useMemo(function () {
    return {
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
      minWidth: 30,
      // width: 150,
      maxWidth: 400
    };
  }, []);

  var reactTable = (0, _reactTable.useTable)({
    columns: columns,
    data: data,
    initialState: {
      pageIndex: currentPage
    },
    manualPagination: true,
    manualSortBy: true,
    manualFilters: true,
    pageCount: Number(Math.ceil(resourceState.rowsTotal / resourceState.pageSize)),
    defaultColumn: defaultColumn,
    filterTypes: filterTypes
  }, _reactTable.useFilters, _reactTable.useFlexLayout, _reactTable.useResizeColumns, _reactTable.useColumnOrder, _reactTable.useSortBy, _reactTable.usePagination);
  return /*#__PURE__*/_react["default"].createElement(_resource_defaults.ResourceDispatch.Provider, {
    value: {
      resourceState: resourceState,
      dispatch: dispatch,
      reactTable: reactTable
    }
  }, children);
};

Resource.defaultProps = {
  showDBColumnNames: false,
  transformQueryData: null
};
Resource.propTypes = {
  apiURL: _propTypes["default"].string.isRequired,
  showDBColumnNames: _propTypes["default"].bool,
  transformQueryData: _propTypes["default"].func
};
var _default = Resource;
exports["default"] = _default;