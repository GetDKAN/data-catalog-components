"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Copyright = function Copyright(_ref) {
  var copyright = _ref.copyright,
      link = _ref.link,
      clickable = _ref.clickable;
  return _react["default"].createElement("div", {
    className: "copyright"
  }, "".concat(copyright, " "), _react["default"].createElement("a", {
    href: link
  }, clickable));
};

Copyright.defaultProps = {
  copyright: "Powered by ",
  clickable: "DKAN",
  link: "http://getdkan.com"
};
Copyright.propTypes = {
  copyright: _propTypes["default"].string,
  clickable: _propTypes["default"].string,
  link: _propTypes["default"].string
};
var _default = Copyright;
exports["default"] = _default;