"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var Announcement = function Announcement(_ref) {
  var heading = _ref.heading,
      children = _ref.children,
      role = _ref.role,
      variation = _ref.variation;
  var icon;

  switch (variation) {
    case 'success':
      icon = 'check-circle';
      break;

    case 'warn':
      icon = 'exclamation-circle';
      break;

    case 'error':
      icon = 'times-circle';
      break;

    case 'info':
      icon = 'info-circle';
      break;

    default:
      icon = 'info-circle';
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-alert dc-alert--".concat(variation),
    role: role
  }, heading && /*#__PURE__*/_react["default"].createElement("h3", null, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fas', "".concat(icon)],
    size: "1x",
    "aria-hidden": "true",
    role: "presentation"
  }), heading), children);
};

Announcement.defaultProps = {
  heading: 'Announcement',
  role: 'alert',
  variation: null
};
Announcement.propTypes = {
  heading: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  role: _propTypes["default"].oneOf(['alert', 'alertdialog']),
  variation: _propTypes["default"].oneOf(['error', 'warn', 'success', 'info'])
};
var _default = Announcement;
exports["default"] = _default;