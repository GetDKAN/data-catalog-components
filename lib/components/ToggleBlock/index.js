"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ToggleBlock;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ToggleBlock(_ref) {
  var customId = _ref.customId,
      className = _ref.className,
      title = _ref.title,
      children = _ref.children,
      headingClasses = _ref.headingClasses,
      innerClasses = _ref.innerClasses,
      allowToggle = _ref.allowToggle,
      defaultClosed = _ref.defaultClosed;

  var _useState = (0, _react.useState)(!defaultClosed),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      show = _useState2[0],
      toggleShow = _useState2[1];

  var toggleBlockHeading = _react["default"].createElement("h2", {
    className: headingClasses
  }, title);

  if (allowToggle) {
    toggleBlockHeading = _react["default"].createElement("h2", {
      className: headingClasses
    }, _react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return toggleShow(!show);
      }
    }, title));
  }

  return _react["default"].createElement("div", {
    id: customId,
    className: "".concat(className, " ").concat(show ? 'open' : 'closed')
  }, toggleBlockHeading, show && _react["default"].createElement("div", {
    className: innerClasses
  }, children));
}

ToggleBlock.defaultProps = {
  customId: undefined,
  allowToggle: true,
  headingClasses: 'toggle-block-title',
  innerClasses: 'toggle-block-inner',
  className: 'toggle-block',
  defaultClosed: false
};
ToggleBlock.propTypes = {
  customId: _propTypes["default"].string,
  title: _propTypes["default"].node.isRequired,
  children: _propTypes["default"].node.isRequired,
  headingClasses: _propTypes["default"].string,
  innerClasses: _propTypes["default"].string,
  allowToggle: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  defaultClosed: _propTypes["default"].bool
};