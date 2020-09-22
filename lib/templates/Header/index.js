"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _router = require("@reach/router");

var _NavBar = _interopRequireDefault(require("../NavBar"));

var Header = function Header(_ref) {
  var link = _ref.link,
      logo = _ref.logo,
      site = _ref.site,
      slogan = _ref.slogan,
      customClasses = _ref.customClasses,
      navItems = _ref.navItems;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: customClasses
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "branding"
  }, /*#__PURE__*/_react["default"].createElement(_router.Link, {
    to: link,
    className: "dc-logo"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: logo,
    alt: "Open Data Catalog"
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-site-name"
  }, site && /*#__PURE__*/_react["default"].createElement(_router.Link, {
    to: link
  }, site), slogan && /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-slogan"
  }, slogan)))), navItems && /*#__PURE__*/_react["default"].createElement(_NavBar["default"], {
    navItems: navItems,
    className: customClasses
  }));
};

Header.defaultProps = {
  customClasses: null,
  link: '/',
  logo: 'https://dkan-default-content-files.s3.amazonaws.com/files/logo.svg',
  site: '',
  slogan: ''
};
Header.propTypes = {
  customClasses: _propTypes["default"].string,
  link: _propTypes["default"].string,
  logo: _propTypes["default"].string,
  site: _propTypes["default"].string,
  slogan: _propTypes["default"].string,
  navItems: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    url: _propTypes["default"].string
  })).isRequired
};
var _default = Header;
exports["default"] = _default;