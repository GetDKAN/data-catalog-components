"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _htmlToReact = require("html-to-react");

var Text = function Text(_ref) {
  var label = _ref.label,
      value = _ref.value,
      children = _ref.children,
      wrapper = _ref.wrapper;
  var parser = new _htmlToReact.Parser();
  var tag = wrapper.tag,
      classes = wrapper.classes;

  var TextWrapper = function TextWrapper() {
    if (tag) {
      var TagElement = "".concat(tag);
      return /*#__PURE__*/_react["default"].createElement(TagElement, {
        className: classes
      }, label && /*#__PURE__*/_react["default"].createElement("strong", null, "".concat(label, ": ")), value ? parser.parse(value) : children);
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, label && /*#__PURE__*/_react["default"].createElement("strong", null, "".concat(label, ": ")), value ? parser.parse(value) : children);
  };

  return /*#__PURE__*/_react["default"].createElement(TextWrapper, null);
};

Text.defaultProps = {
  label: '',
  value: '',
  children: '',
  wrapper: {}
};
Text.propTypes = {
  // Text in strong tag followed by semi colon.
  label: _propTypes["default"].string,
  // The content of the Text component after the label.
  // Will be required in future versions.
  children: _propTypes["default"].node,
  // If classes are added, will wrap text in div with classes.
  wrapper: _propTypes["default"].shape({
    tag: _propTypes["default"].string,
    classes: _propTypes["default"].string
  }),
  // Deprecated way to pass markup to the Text component.
  value: _propTypes["default"].string
};
var _default = Text;
exports["default"] = _default;