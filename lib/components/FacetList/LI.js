"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: #FFFFFF;\n  padding: 0;\n  list-style-type: none;\n  width: 100%;\n  position: relative;\n  display: block;\n  &:last-of-type {\n   border-bottom: 1px solid ", ";\n }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var LI = _styledComponents["default"].li(_templateObject(), function (props) {
  return props.theme.borderColor;
});

var _default = LI;
exports["default"] = _default;