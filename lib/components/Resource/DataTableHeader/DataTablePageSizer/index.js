"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var DataTablePageSizer = function DataTablePageSizer(_ref) {
  var label = _ref.label,
      pageSizeChange = _ref.pageSizeChange,
      currentOption = _ref.currentOption,
      options = _ref.options,
      className = _ref.className,
      selectClassName = _ref.selectClassName,
      id = _ref.id;
  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement("label", {
    htmlFor: "table-".concat(id),
    className: "page-size-label"
  }, _react["default"].createElement("span", {
    className: "page-size-label-text"
  }, label), ' ', _react["default"].createElement("select", {
    id: "table-".concat(id),
    className: selectClassName,
    value: currentOption,
    onChange: pageSizeChange
  }, options.map(function (option) {
    return _react["default"].createElement("option", {
      key: option.value,
      value: option.value
    }, option.label);
  }))));
};

DataTablePageSizer.defaultProps = {
  label: 'Rows per page',
  className: 'page-size-options',
  currentOption: '20',
  options: [{
    defaultChecked: true,
    label: '20',
    value: '20'
  }, {
    label: '50',
    value: '50'
  }, {
    label: '100',
    value: '100'
  }],
  selectClassName: 'page-size-select'
};
DataTablePageSizer.propTypes = {
  label: _propTypes["default"].string,
  className: _propTypes["default"].string,
  selectClassName: _propTypes["default"].string,
  pageSizeChange: _propTypes["default"].func.isRequired,
  options: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    defaultChecked: _propTypes["default"].bool,
    label: _propTypes["default"].string,
    value: _propTypes["default"].string
  })),
  id: _propTypes["default"].string.isRequired,
  currentOption: _propTypes["default"].string
};
var _default = DataTablePageSizer;
exports["default"] = _default;