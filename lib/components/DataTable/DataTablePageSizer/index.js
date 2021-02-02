"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var DataTablePageSizer = function DataTablePageSizer(_ref) {
  var label = _ref.label,
      pageSizeChange = _ref.pageSizeChange,
      initSize = _ref.initSize,
      options = _ref.options,
      className = _ref.className,
      selectClassName = _ref.selectClassName,
      id = _ref.id;

  var _React$useState = _react["default"].useState(initSize),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      selValue = _React$useState2[0],
      setSelValue = _React$useState2[1];

  _react["default"].useEffect(function () {
    pageSizeChange(Number(selValue));
  }, [selValue]);

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "dc-".concat(id, "-pagesize")
  }, label), /*#__PURE__*/_react["default"].createElement("select", {
    value: selValue,
    className: selectClassName,
    onChange: function onChange(e) {
      return setSelValue(e.target.value);
    },
    type: "select",
    name: "dc-".concat(id, "-pagesize"),
    id: "dc-".concat(id, "-pagesize")
  }, options.map(function (opt) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: opt.value,
      key: opt.value
    }, opt.label);
  })));
};

DataTablePageSizer.defaultProps = {
  label: 'Rows per page',
  className: 'dc-page-size-options',
  initSize: 20,
  options: [{
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
  initSize: _propTypes["default"].number
};
var _default = DataTablePageSizer;
exports["default"] = _default;