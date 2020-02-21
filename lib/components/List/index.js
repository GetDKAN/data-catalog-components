"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Ul = _interopRequireDefault(require("./Ul"));

/* eslint-disable */
function List(props) {
  var ComponentToRender = props.component;

  var content = _react["default"].createElement("div", null); // If we have items, render them


  if (props.items) {
    content = props.items.map(function (item) {
      return _react["default"].createElement(ComponentToRender, {
        key: "item-".concat(item.ref),
        item: item
      });
    });
  } else {
    // Otherwise render a single component
    content = _react["default"].createElement(ComponentToRender, null);
  }

  return _react["default"].createElement(_Ul["default"], {
    className: props.className
  }, content);
}

List.propTypes = {
  component: _propTypes["default"].func.isRequired,
  items: _propTypes["default"].array,
  className: _propTypes["default"].string
};
var _default = List;
exports["default"] = _default;