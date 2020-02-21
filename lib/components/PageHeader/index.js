"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

/* eslint-disable */
var PageHeader = function PageHeader(_ref) {
  var title = _ref.title;
  return _react["default"].createElement(_Wrapper["default"], null, _react["default"].createElement("h1", null, title));
};

var _default = PageHeader;
exports["default"] = _default;