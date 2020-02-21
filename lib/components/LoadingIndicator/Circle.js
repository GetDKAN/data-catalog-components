"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    ", "\n\n    &:before {\n      content: '';\n      display: block;\n      margin: 0 auto;\n      width: 15%;\n      height: 15%;\n      background-color: #999;\n      border-radius: 100%;\n      animation: ", " 1.2s infinite ease-in-out both;\n      ", "\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  0%,\n  39%,\n  100% {\n    opacity: 0;\n  }\n\n  40% {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var circleFadeDelay = (0, _styledComponents.keyframes)(_templateObject());

var Circle = function Circle(props) {
  var CirclePrimitive = _styledComponents["default"].div(_templateObject2(), props.rotate && "\n      -webkit-transform: rotate(".concat(props.rotate, "deg);\n      -ms-transform: rotate(").concat(props.rotate, "deg);\n      transform: rotate(").concat(props.rotate, "deg);\n    "), circleFadeDelay, props.delay && "\n        -webkit-animation-delay: ".concat(props.delay, "s;\n        animation-delay: ").concat(props.delay, "s;\n      "));

  return _react["default"].createElement(CirclePrimitive, null);
};

Circle.propTypes = {
  delay: _propTypes["default"].number,
  rotate: _propTypes["default"].number
};
var _default = Circle;
exports["default"] = _default;