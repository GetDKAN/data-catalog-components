"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 30px;\n  a {\n    line-height: 22px;\n    padding: 9px 16px;\n    position: relative;\n    display: block;\n    border-left: 1px solid ", ";\n    border-right: 1px solid ", ";\n    color: ", ";\n    &:hover {\n      text-decoration: none;\n      background: rgba(0, 0, 0, 0.03);\n    }\n    &:hover:after {\n      content: \"\\f055\";\n      color: ", ";\n      font-family: \"FontAwesome\";\n      position: absolute;\n      top: 8px;\n      right: 8px;\n    }\n    &.active {\n      background-color: rgba(0, 0, 0, 0.03);\n    }\n    &.active:after {\n      content: \"\\f00d\";\n      font-family: \"FontAwesome\";\n      position: absolute;\n      top: 8px;\n      right: 8px;\n    }\n    &.active:hover:after {\n      color: ", ";\n    }\n  }\n"], ["\n  margin-bottom: 30px;\n  a {\n    line-height: 22px;\n    padding: 9px 16px;\n    position: relative;\n    display: block;\n    border-left: 1px solid ", ";\n    border-right: 1px solid ", ";\n    color: ", ";\n    &:hover {\n      text-decoration: none;\n      background: rgba(0, 0, 0, 0.03);\n    }\n    &:hover:after {\n      content: \"\\\\f055\";\n      color: ", ";\n      font-family: \"FontAwesome\";\n      position: absolute;\n      top: 8px;\n      right: 8px;\n    }\n    &.active {\n      background-color: rgba(0, 0, 0, 0.03);\n    }\n    &.active:after {\n      content: \"\\\\f00d\";\n      font-family: \"FontAwesome\";\n      position: absolute;\n      top: 8px;\n      right: 8px;\n    }\n    &.active:hover:after {\n      color: ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FacetBlockDiv = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.borderColor;
}, function (props) {
  return props.theme.borderColor;
}, function (props) {
  return props.theme.textColor;
}, function (props) {
  return props.theme.success;
}, function (props) {
  return props.theme.danger;
});

var _default = FacetBlockDiv;
exports["default"] = _default;