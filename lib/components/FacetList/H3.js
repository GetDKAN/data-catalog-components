"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  font-size: 1.6rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #323A45;\n  letter-spacing: .5px;\n  border: 1px solid ", ";\n  padding: 13px 16px;\n  margin: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var H3 = _styledComponents["default"].h3(_templateObject(), function (props) {
  return props.theme.primaryDust;
}, function (props) {
  return props.theme.primary;
});

var _default = H3;
exports["default"] = _default;