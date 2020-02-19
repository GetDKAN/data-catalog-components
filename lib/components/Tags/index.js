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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    margin: 20px 0;\n    display: flex;\n    align-items: flex-start;\n    align-content: flex-start;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    .tag {\n      margin: 5px;\n      a {\n        border: 1px solid ", ";\n        border-radius: 15px;\n        background-color: ", ";\n        color: ", ";\n        padding: 4px 12px;\n        position: relative;\n        &:hover,\n        &:focus {\n          background: #fff;\n          color: #000;\n          text-decoration: none;\n        }\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Tags(props) {
  var Wrapper = _styledComponents["default"].div(_templateObject(), function (props) {
    return props.theme.borderColor;
  }, function (props) {
    return props.theme.grayDust;
  }, function (props) {
    return props.theme.grayDark;
  });

  var label = props.label ? _react["default"].createElement("strong", null, props.label, ":") : '';
  var tags = props.tags.map(function (tag) {
    var ref = "{".concat(props.path).concat(tag.data);
    return _react["default"].createElement("div", {
      className: "tag",
      key: tag.identifier
    }, _react["default"].createElement("a", {
      href: ref
    }, " ", tag.data, " "));
  }, '<div></div>');
  return _react["default"].createElement(Wrapper, {
    className: "tag-wrapper"
  }, label, " ", tags);
}

var _default = Tags;
exports["default"] = _default;