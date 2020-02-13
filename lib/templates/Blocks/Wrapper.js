"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  .pane-content {\n    display: flex;\n    align-items: flex-start;\n    align-content: stretch;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-evenly;\n    h2,\n    h3 {\n      margin-top: 0;\n    }\n    padding-top: 50px;\n  }\n\n  h2 {\n    text-align: center;\n    padding-top: 50px;\n    margin: 0;\n  }\n\n  &.BasicBlock {\n    h2 {\n      padding-bottom: 1.6rem;\n    }\n    .basic-block {\n      padding: 0 20px;\n      min-width: 33%;\n    }\n  }\n  &.StatBlock {\n    background-color: ", ";\n    color: #ffffff;\n    position: relative;\n    .pane-content {\n      padding-top: 0;\n    }\n    .stat-block {\n      margin-top: 50px;\n      margin-bottom: 50px;\n      h2 {\n        font-size: 64px;\n        display: inline-block;\n        color: white;\n        font-weight: 300;\n        margin: 0 0 0 15px;\n        padding: 0;\n      }\n      i {\n        color: ", ";\n        font-size: 48px;\n        display: inline-block;\n      }\n      p {\n        text-align: center;\n        margin: 0;\n      }\n    }\n  }\n  &.StepsBlock {\n    background-color: #ffffff;\n    .steps-block {\n      position: relative;\n      padding: 0 20px;\n      margin-bottom: 50px;\n      text-align: center;\n      max-width: 33%;\n      h3 {\n        margin-top: 65px;\n        text-align: center;\n      }\n    }\n    .steps-step {\n      position: absolute;\n      width: 50px;\n      height: 50px;\n      top: 0;\n      left: 50%;\n      transform: translateX(-50%);\n      border-radius: 100%;\n      border: 1px solid ", ";\n      line-height: 50px;\n      font-size: 20px;\n      color: ", ";\n      text-align: center;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    .pane-content {\n      flex-wrap: wrap;\n      .steps-block {\n        max-width: 100%;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.primaryLight;
}, function (props) {
  return props.theme.primary;
}, function (props) {
  return props.theme.primaryDust;
}, function (props) {
  return props.theme.primaryDark;
});

var _default = Wrapper;
exports["default"] = _default;