"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 1.6rem;\n  margin-bottom: 1rem;\n  border-collapse: separate;\n  .form-text.form-control {\n    display: inline-block;\n    margin-top: 0;\n    width: 70%;\n    height: 34px;\n    font-weight: 300;\n    font-size: 1.6rem;\n  }\n  .input-group-btn {\n    display: inline-block;\n    button {\n      background-color: ", ";\n      border: none;\n      border-radius: 100px;\n      color: #fff;\n      cursor: pointer;\n      display: inline-block;\n      font-weight: 500;\n      font-size: 1.6rem;\n      letter-spacing: 1px;\n      margin: 0 8px;\n      padding: 4px 15px;\n      text-align: center;\n      text-decoration: none;\n      text-shadow: none;\n      touch-action: manipulation;\n      vertical-align: middle;\n      white-space: nowrap;\n      &:hover,\n      &:focus {\n        background-color: ", ";\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var FormGroup = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.primaryDark;
});

var _default = FormGroup;
exports["default"] = _default;