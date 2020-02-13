"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 20px 0;\n\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ThemeTag(props) {
  var Wrapper = _styledComponents["default"].div(_templateObject()); //const label = props.label ? <strong>{props.label}:</strong> : '';


  console.log(props);
  return _react["default"].createElement(Wrapper, {
    className: "theme-tag-wrapper",
    key: "dist-".concat(topic.identifier, "-").concat(i)
  }, _react["default"].createElement(TopicImage, {
    title: topic.title,
    height: "16",
    width: "16",
    fill: "#A7AAAC"
  }), topic.title);
}

var _default = Tags;
exports["default"] = _default;