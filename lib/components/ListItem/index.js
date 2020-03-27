"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Item = _interopRequireDefault(require("./Item"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

/* eslint-disable */
function ListItem(props) {
  return _react["default"].createElement(_Wrapper["default"], null, _react["default"].createElement(_Item["default"], null, props.item));
}

ListItem.propTypes = {
  item: _propTypes["default"].any
};
var _default = ListItem;
exports["default"] = _default;