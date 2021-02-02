"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _router = require("@reach/router");

var Logo = function Logo(_ref) {
  var image = _ref.image;
  return /*#__PURE__*/_react["default"].createElement(_router.Link, {
    to: "/",
    className: "dc-logo"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: image,
    alt: "Open Data Catalog"
  }));
};

Logo.defaultProps = {
  image: 'https://dkan-default-content-files.s3.amazonaws.com/files/logo.svg'
};
Logo.propTypes = {
  image: _propTypes["default"].string
};
var _default = Logo;
exports["default"] = _default;