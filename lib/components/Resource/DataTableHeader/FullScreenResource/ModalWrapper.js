"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .advanced-options-modal-close {\n      background: none;\n      padding-left: 0;\n      text-decoration: none;\n      &::before {\n        font-family: fontAwesome !important;\n        content: '\f00d';\n        font-weight: 400;\n        font-size: 22px;\n      }\n      &:hover,\n      &:focus {\n        background: none;\n      }\n    }\n\n  .dialog-title {\n    font-size: 18px;\n  }\n  \n  .ds-c-dialog__header {\n    padding: 16px 24px;\n  }\n\n"], ["\n  .advanced-options-modal-close {\n      background: none;\n      padding-left: 0;\n      text-decoration: none;\n      &::before {\n        font-family: fontAwesome !important;\n        content: '\\f00d';\n        font-weight: 400;\n        font-size: 22px;\n      }\n      &:hover,\n      &:focus {\n        background: none;\n      }\n    }\n\n  .dialog-title {\n    font-size: 18px;\n  }\n  \n  .ds-c-dialog__header {\n    padding: 16px 24px;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ModalWrapper = _styledComponents["default"].div(_templateObject());

var _default = ModalWrapper;
exports["default"] = _default;