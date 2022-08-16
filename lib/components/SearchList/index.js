"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var SearchList = function SearchList(_ref) {
  var children = _ref.children,
      message = _ref.message,
      className = _ref.className,
      listClassName = _ref.listClassName,
      resultsClassName = _ref.resultsClassName;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, message && /*#__PURE__*/_react["default"].createElement("div", {
    className: resultsClassName
  }, message), /*#__PURE__*/_react["default"].createElement("ol", {
    className: listClassName
  }, children));
};

SearchList.defaultProps = {
  message: '',
  listClassName: 'search-list',
  className: '',
  resultsClassName: 'results-message'
};
SearchList.propTypes = {
  children: _propTypes["default"].node.isRequired,
  message: _propTypes["default"].string,
  listClassName: _propTypes["default"].string,
  className: _propTypes["default"].string,
  resultsClassName: _propTypes["default"].string
};
var _default = SearchList;
exports["default"] = _default;