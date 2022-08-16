"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _resource_defaults = require("../../services/resource/resource_defaults");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DataTable = function DataTable() {
  var _useContext = (0, _react.useContext)(_resource_defaults.ResourceDispatch),
      resourceState = _useContext.resourceState,
      reactTable = _useContext.reactTable,
      dispatch = _useContext.dispatch;

  var density = resourceState.density ? "".concat(resourceState.density, " -striped -highlight") : '-striped -highlight';
  var getTableProps = reactTable.getTableProps,
      getTableBodyProps = reactTable.getTableBodyProps,
      headerGroups = reactTable.headerGroups,
      prepareRow = reactTable.prepareRow,
      page = reactTable.page,
      _reactTable$state = reactTable.state,
      pageIndex = _reactTable$state.pageIndex,
      sortBy = _reactTable$state.sortBy,
      filters = _reactTable$state.filters,
      canPreviousPage = reactTable.canPreviousPage,
      canNextPage = reactTable.canNextPage,
      pageOptions = reactTable.pageOptions,
      nextPage = reactTable.nextPage,
      previousPage = reactTable.previousPage;

  _react["default"].useEffect(function () {
    if (resourceState.store) {
      if (resourceState.currentPage !== pageIndex) {
        dispatch({
          type: 'UPDATE_PAGE',
          data: {
            page: pageIndex
          }
        });
      }
    }
  }, [resourceState.store, pageIndex]);

  _react["default"].useEffect(function () {
    if (resourceState.store) {
      if (resourceState.sort !== sortBy) {
        dispatch({
          type: 'UPDATE_COLUMN_SORT',
          data: {
            sort: sortBy
          }
        });
      }
    }
  }, [resourceState.store, sortBy]);

  _react["default"].useEffect(function () {
    if (resourceState.store) {
      if (resourceState.filters !== filters) {
        dispatch({
          type: 'UPDATE_FILTERS',
          data: {
            filters: filters
          }
        });
      }
    }
  }, [resourceState.store, filters]);

  if (!reactTable.columns.length) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-datatable -striped -highlight ".concat(density)
  }, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, getTableProps(), {
    role: "grid",
    className: "dc-table"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-thead -header"
  }, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
      role: "row"
    }, headerGroup.getHeaderGroupProps(), {
      className: "tr"
    }), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        style: {
          position: 'relative'
        }
      }, column.getHeaderProps(column.getSortByToggleProps()), {
        className: "th"
      }), /*#__PURE__*/_react["default"].createElement("span", null, column.isSorted ? column.isSortedDesc ? ' -🔽' : ' 🔼' : ''), column.render('Header'), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, column.getResizerProps(), {
        className: "resizer ".concat(column.isResizing ? 'isResizing' : '')
      })));
    }));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-thead -filters"
  }, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
      role: "row"
    }, headerGroup.getHeaderGroupProps(), {
      className: "tr"
    }), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({
        style: {
          position: 'relative'
        }
      }, column.getHeaderProps(), {
        className: "th"
      }), /*#__PURE__*/_react["default"].createElement("div", null, column.canFilter ? column.render('Filter') : null));
    }));
  })), /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, getTableBodyProps(), {
    className: "dc-tbody"
  }), page.length <= 0 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "tr dc-tr",
    style: {
      textAlign: 'center'
    }
  }, "No results found."), page.map(function (row) {
    prepareRow(row);
    return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, row.getRowProps(), {
      className: "tr dc-tr"
    }), row.cells.map(function (cell) {
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, cell.getCellProps(), {
        className: "td dc-td"
      }), cell.render('Cell'));
    }));
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "pagination-bottom"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "-pagination"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "-previous"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return previousPage();
    },
    disabled: !canPreviousPage,
    className: "-btn"
  }, '<')), /*#__PURE__*/_react["default"].createElement("div", {
    className: "-center"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "-pageInfo"
  }, "Page", ' ', /*#__PURE__*/_react["default"].createElement("strong", null, pageIndex + 1, ' ', "of", ' ', pageOptions.length))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "-next"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return nextPage();
    } //
    ,
    disabled: !canNextPage,
    className: "-btn"
  }, '>')))));
};

var _default = DataTable;
exports["default"] = _default;