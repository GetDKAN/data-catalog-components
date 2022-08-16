"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ToggleBlock;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

  var toggleBlockHeading = /*#__PURE__*/_react["default"].createElement("h2", {
    className: headingClasses
  }, title);

  if (allowToggle) {
    toggleBlockHeading = /*#__PURE__*/_react["default"].createElement("h2", {
      className: headingClasses
    }, /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      onClick: function onClick() {
        return toggleShow(!show);
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: ['fas', show ? 'chevron-down' : 'chevron-right'],
      size: "1x",
      "aria-hidden": "true",
      role: "presentation"
    }), title));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    id: customId,
    className: "".concat(className, " ").concat(show ? 'open' : 'closed')
  }, toggleBlockHeading, show && /*#__PURE__*/_react["default"].createElement("div", {
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