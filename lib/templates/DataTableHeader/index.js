"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _resource_defaults = require("../../services/resource/resource_defaults");

var _ManageColumns = _interopRequireDefault(require("../../components/DataTable/ManageColumns"));

var _DataTablePageResults = _interopRequireDefault(require("../../components/DataTable/DataTablePageResults"));

var _DataTableDensity = _interopRequireDefault(require("../../components/DataTable/DataTableDensity"));

var _DataTablePageSizer = _interopRequireDefault(require("../../components/DataTable/DataTablePageSizer"));

var _DataIcon = _interopRequireDefault(require("../../components/DataIcon"));

var DataTableHeader = function DataTableHeader() {
  var _React$useContext = _react["default"].useContext(_resource_defaults.ResourceDispatch),
      reactTable = _React$useContext.reactTable,
      resourceState = _React$useContext.resourceState,
      dispatch = _React$useContext.dispatch;

  if (!reactTable.columns.length) {
    return null;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-datatable-header"
  }, resourceState.store && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_DataTablePageResults["default"], {
    total: resourceState.count,
    pageSize: resourceState.pageSize,
    currentPage: resourceState.currentPage
  }), /*#__PURE__*/_react["default"].createElement(_DataTablePageSizer["default"], {
    pageSizeChange: function pageSizeChange(value) {
      return dispatch({
        type: 'UPDATE_PAGE_SIZE',
        data: {
          pageSize: value
        }
      });
    },
    id: resourceState.store.id,
    initSize: resourceState.pageSize
  }), /*#__PURE__*/_react["default"].createElement(_DataTableDensity["default"], {
    densityChange: function densityChange(density) {
      return dispatch({
        type: 'UPDATE_DENSITY',
        data: {
          density: density
        }
      });
    },
    items: [{
      icon: /*#__PURE__*/_react["default"].createElement(_DataIcon["default"], {
        icon: "density-1",
        name: "density-1",
        fill: "#666666",
        height: 20,
        width: 20
      }),
      text: 'expanded',
      value: 'density-1'
    }, {
      icon: /*#__PURE__*/_react["default"].createElement(_DataIcon["default"], {
        icon: "density-2",
        name: "density-2",
        fill: "#666666",
        height: 20,
        width: 20
      }),
      text: 'normal',
      value: 'density-2'
    }, {
      icon: /*#__PURE__*/_react["default"].createElement(_DataIcon["default"], {
        icon: "density-3",
        name: "density-3",
        fill: "#666666",
        height: 20,
        width: 20
      }),
      text: 'tight',
      value: 'density-3'
    }]
  }), reactTable.allColumns && /*#__PURE__*/_react["default"].createElement(_ManageColumns["default"], null)));
};

var _default = DataTableHeader;
exports["default"] = _default;