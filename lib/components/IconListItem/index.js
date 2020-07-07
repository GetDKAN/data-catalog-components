"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _router = require("@reach/router");

var _TopicIcon = _interopRequireDefault(require("../../templates/TopicIcon"));

function IconListItem(_ref) {
  var image = _ref.image,
      link = _ref.link,
      title = _ref.title,
      size = _ref.size,
      color = _ref.color,
      identifier = _ref.identifier;
  var content = '';

  if (image) {
    // Image provided as a url.
    content = /*#__PURE__*/_react["default"].createElement(_router.Link, {
      to: link,
      className: "dc-icon-link"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: image,
      alt: title
    }), /*#__PURE__*/_react["default"].createElement("div", null, title));
  } else {
    // Image provided by custom component.
    content = /*#__PURE__*/_react["default"].createElement(_router.Link, {
      to: link,
      className: "dc-icon-link"
    }, /*#__PURE__*/_react["default"].createElement(_TopicIcon["default"], {
      title: title,
      size: size,
      fill: color
    }), /*#__PURE__*/_react["default"].createElement("div", null, title));
  }

  return /*#__PURE__*/_react["default"].createElement("li", {
    key: identifier
  }, content);
}

IconListItem.defaultProps = {
  link: '',
  image: '',
  size: '',
  color: '',
  identifier: ''
};
IconListItem.propTypes = {
  title: _propTypes["default"].string.isRequired,
  link: _propTypes["default"].string,
  image: _propTypes["default"].string,
  size: _propTypes["default"].string,
  color: _propTypes["default"].string,
  identifier: _propTypes["default"].string
};
var _default = IconListItem;
exports["default"] = _default;