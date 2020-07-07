"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Tags = function Tags(_ref) {
  var tags = _ref.tags,
      label = _ref.label,
      path = _ref.path;
  var heading = label ? /*#__PURE__*/_react["default"].createElement("h3", null, label) : '';
  var tagsList = tags.map(function (tag) {
    var ref = "".concat(path).concat(encodeURIComponent(tag.data));
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "dc-tag",
      key: tag.identifier
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: ref
    }, tag.data));
  }, '<div></div>');
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-tag-wrapper"
  }, heading, ' ', tagsList);
};

Tags.defaultProps = {
  label: null
};
Tags.propTypes = {
  label: _propTypes["default"].string,
  tags: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  path: _propTypes["default"].string.isRequired
};
var _default = Tags;
exports["default"] = _default;