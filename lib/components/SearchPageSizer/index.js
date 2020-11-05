"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var SearchPageSizer = function SearchPageSizer(_ref) {
  var className = _ref.className,
      currentValue = _ref.currentValue,
      inputClasses = _ref.inputClasses,
      label = _ref.label,
      options = _ref.options,
      resizeFunc = _ref.resizeFunc,
      showLabel = _ref.showLabel;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, showLabel && /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "search-page-sizer"
  }, label), /*#__PURE__*/_react["default"].createElement("select", {
    id: "search-page-sizer",
    className: inputClasses,
    value: currentValue,
    onChange: resizeFunc
  }, options.map(function (opt) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: opt,
      value: opt
    }, opt);
  })));
};

SearchPageSizer.defaultProps = {
  className: 'search-page-sizer',
  inputClasses: 'search-page-sizer-input',
  label: 'Page Size',
  options: [5, 10, 25, 50],
  showLabel: true
};
SearchPageSizer.propTypes = {
  className: _propTypes["default"].string,
  currentValue: _propTypes["default"].number.isRequired,
  inputClasses: _propTypes["default"].string,
  label: _propTypes["default"].string,
  options: _propTypes["default"].arrayOf(_propTypes["default"].number),
  resizeFunc: _propTypes["default"].func.isRequired,
  showLabel: _propTypes["default"].bool
};
var _default = SearchPageSizer;
exports["default"] = _default;