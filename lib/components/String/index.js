"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

/* eslint-disable */

/* Deprecated: use Text component */
function String(props) {
  var label = props.label && props.label.length > 0 ? /*#__PURE__*/_react["default"].createElement("strong", null, props.label, ":") : '';
  return /*#__PURE__*/_react["default"].createElement("div", null, label, " ", props.value);
}

var _default = String;
exports["default"] = _default;