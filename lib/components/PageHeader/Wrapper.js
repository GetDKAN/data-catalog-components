"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  padding: 0 30px 0 30px;\n\n  h1 {\n    position: relative;\n    font-size: 40px;\n    line-height: 46px;\n  }\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents["default"].div(_templateObject());

var _default = Wrapper;
exports["default"] = _default;