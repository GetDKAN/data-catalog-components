"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Ol = _styledComponents["default"].ol(_templateObject());

var _default = Ol;
exports["default"] = _default;