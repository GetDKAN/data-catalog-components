"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .density-1 .rt-tbody .rt-td {\n    padding: 21px 5px;\n  }\n  .density-2 .rt-tbody .rt-td {\n    padding: 14px 5px;\n  }\n  .density-3 .rt-tbody .rt-td {\n    padding: 5px 5px;\n  }\n  .-striped .rt-tr.-odd {\n    background-color: rgba(0,0,0,.05);\n  }\n  .-highlight .rt-tbody .rt-tr:not(.-padRow):hover {\n    background-color: #FFFEEE;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents["default"].div(_templateObject());

var _default = Wrapper;
exports["default"] = _default;