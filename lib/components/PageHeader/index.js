"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var PageHeader = function PageHeader(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h1", null, title));
};

PageHeader.propTypes = {
  title: _propTypes["default"].string.isRequired
};
var _default = PageHeader;
exports["default"] = _default;