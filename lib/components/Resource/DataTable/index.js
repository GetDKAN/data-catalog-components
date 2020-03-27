"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTable = _interopRequireDefault(require("react-table"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

require("react-table/react-table.css");

var DataTable = function DataTable(_ref) {
  var data = _ref.data,
      loading = _ref.loading,
      columns = _ref.columns,
      pageSize = _ref.pageSize,
      pages = _ref.pages,
      currentPage = _ref.currentPage,
      sortedChange = _ref.sortedChange,
      pageChange = _ref.pageChange,
      filterChange = _ref.filterChange,
      index = _ref.index,
      density = _ref.density,
      filtered = _ref.filtered;
  var style = density ? "".concat(density, " -striped -highlight") : '-striped -highlight';
  return _react["default"].createElement(_Wrapper["default"], null, _react["default"].createElement(_reactTable["default"], {
    loading: loading,
    index: index,
    data: data,
    filterable: true,
    page: currentPage,
    pages: pages,
    pageSize: pageSize,
    defaultPageSize: pageSize,
    manual: true,
    defaultFiltered: filtered,
    showPageJump: false,
    showPageSizeOptions: false,
    onPageChange: pageChange,
    onSortedChange: sortedChange,
    onFilteredChange: filterChange,
    columns: columns,
    className: style
  }));
};

DataTable.defaultProps = {
  density: '',
  filtered: []
};
DataTable.propTypes = {
  data: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  loading: _propTypes["default"].bool.isRequired,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  pageSize: _propTypes["default"].number.isRequired,
  pages: _propTypes["default"].number.isRequired,
  sortedChange: _propTypes["default"].func.isRequired,
  pageChange: _propTypes["default"].func.isRequired,
  filterChange: _propTypes["default"].func.isRequired,
  index: _propTypes["default"].number.isRequired,
  density: _propTypes["default"].string,
  currentPage: _propTypes["default"].number.isRequired,
  filtered: _propTypes["default"].arrayOf(_propTypes["default"].object)
};
var _default = DataTable;
exports["default"] = _default;