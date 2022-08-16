"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTable = require("react-table");

var _resource_defaults = require("../../services/resource/resource_defaults");

var columns = [{
  "Header": "record_number",
  "accessor": "record_number"
}, {
  "Header": "date",
  "accessor": "date"
}, {
  "Header": "price",
  "accessor": "price"
}];
var data = [{
  date: '1950-01-01',
  price: '34.73',
  record_number: 1
}, {
  date: '1950-02-01',
  price: '34.73',
  record_number: 2
}, {
  date: '1950-03-01',
  price: '34.73',
  record_number: 3
}, {
  date: '1950-04-01',
  price: '34.73',
  record_number: 4
}, {
  date: '1950-05-01',
  price: '34.73',
  record_number: 5
}, {
  date: '1950-06-01',
  price: '34.73',
  record_number: 6
}, {
  date: '1950-07-01',
  price: '34.73',
  record_number: 7
}, {
  date: '1950-08-01',
  price: '34.73',
  record_number: 8
}, {
  date: '1950-09-01',
  price: '34.73',
  record_number: 9
}, {
  date: '1950-10-01',
  price: '34.73',
  record_number: 10
}, {
  date: '1950-11-01',
  price: '34.73',
  record_number: 11
}, {
  date: '1950-12-01',
  price: '34.72',
  record_number: 12
}, {
  date: '1951-01-01',
  price: '34.72',
  record_number: 13
}, {
  date: '1951-02-01',
  price: '34.73',
  record_number: 14
}, {
  date: '1951-03-01',
  price: '34.73',
  record_number: 15
}, {
  date: '1951-04-01',
  price: '34.73',
  record_number: 16
}, {
  date: '1951-05-01',
  price: '34.73',
  record_number: 17
}, {
  date: '1951-06-01',
  price: '34.73',
  record_number: 18
}, {
  date: '1951-07-01',
  price: '34.72',
  record_number: 19
}, {
  date: '1951-08-01',
  price: '34.71',
  record_number: 20
}];

var MockResource = function MockResource(_ref) {
  var children = _ref.children;
  var store = {
    id: '144f86b3-9828-556a-be7c-9331b9843dc3',
    columns: columns,
    rootUrl: '/api/1/',
    data: [{
      expression: '748'
    }],
    values: data,
    storeType: 'DKAN',
    updateQuery: false
  };
  var resourceState = {
    columnOrder: [],
    columns: columns,
    count: 20,
    currentPage: 0,
    density: 'density-3',
    excludedColumns: {},
    filters: [],
    loading: false,
    pageSize: 20,
    queryAll: false,
    rowsTotal: 20,
    sort: [],
    store: store,
    values: []
  };

  var defaultColumn = _react["default"].useMemo(function () {
    return {
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
      minWidth: 30,
      // width: 150,
      maxWidth: 400
    };
  }, []);

  function DefaultColumnFilter(_ref2) {
    var _ref2$column = _ref2.column,
        filterValue = _ref2$column.filterValue,
        preFilteredRows = _ref2$column.preFilteredRows,
        setFilter = _ref2$column.setFilter;
    var count = preFilteredRows ? preFilteredRows.length : 0;
    return /*#__PURE__*/_react["default"].createElement("input", {
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

  var reactTable = (0, _reactTable.useTable)({
    columns: columns,
    data: data,
    initialState: {
      pageIndex: resourceState.currentPage
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
      dispatch: function dispatch() {
        return {};
      },
      reactTable: reactTable
    }
  }, children);
};

var _default = MockResource;
exports["default"] = _default;