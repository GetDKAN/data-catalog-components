"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

/* eslint-disable */
function Tags(props) {
  var label = props.label ? /*#__PURE__*/_react["default"].createElement("h3", null, props.label) : '';
  var tags = props.tags.map(function (tag) {
    var ref = "{".concat(props.path).concat(tag.data);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "dc-tag",
      key: tag.identifier
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: ref
    }, " ", tag.data, " "));
  }, '<div></div>');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-tag-wrapper"
  }, label, " ", tags);
}

var _default = Tags;
exports["default"] = _default;