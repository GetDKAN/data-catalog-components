"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Title = function Title(_ref) {
  var headerLevel = _ref.headerLevel,
      title = _ref.title,
      classes = _ref.classes;
  var HeaderLevel = "".concat(headerLevel);
  return _react["default"].createElement(HeaderLevel, {
    className: classes
  }, title);
};

Title.defaultProps = {
  headerLevel: "h1"
};
Title.propTypes = {
  // Defaults to h1, but any level can be passed to the component.
  headerLevel: _propTypes["default"].oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  // The text used in the header.
  title: _propTypes["default"].string.isRequired,
  classes: _propTypes["default"].string
};
var _default = Title;
exports["default"] = _default;