"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BasicBlock = _interopRequireDefault(require("./BasicBlock"));

function Blocks(_ref) {
  var items = _ref.items,
      component = _ref.component,
      paneTitle = _ref.paneTitle,
      containerClass = _ref.containerClass,
      blockClass = _ref.blockClass;
  var Block = component || _BasicBlock["default"];

  if (paneTitle && items) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "".concat(containerClass, " ").concat(blockClass)
    }, /*#__PURE__*/_react["default"].createElement("h2", null, paneTitle), /*#__PURE__*/_react["default"].createElement("div", {
      className: "dc-block-content"
    }, items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(Block, {
        content: item,
        key: item.id
      });
    })));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(containerClass, " ").concat(blockClass)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-block-content"
  }, items && items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(Block, {
      content: item,
      key: item.id
    });
  })));
}

Blocks.defaultProps = {
  component: 'BasicBlock',
  containerClass: 'container',
  blockClass: 'BasicBlock',
  paneTitle: ''
};
Blocks.propTypes = {
  items: _propTypes["default"].isRequired,
  component: _propTypes["default"].string,
  containerClass: _propTypes["default"].string,
  blockClass: _propTypes["default"].string,
  paneTitle: _propTypes["default"].string
};
var _default = Blocks;
exports["default"] = _default;