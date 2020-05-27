"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Ol = _interopRequireDefault(require("../List/Ol"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 1em 0;\n  list-style: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ResultsList = (0, _styledComponents["default"])(_Ol["default"])(_templateObject());
var _default = ResultsList;
exports["default"] = _default;