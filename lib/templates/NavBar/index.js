"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactstrap = require("reactstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var NavBar = function NavBar(_ref) {
  var navItems = _ref.navItems,
      expand = _ref.expand,
      defaultStyling = _ref.defaultStyling,
      customClasses = _ref.customClasses;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      toggleOpen = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: " ".concat(defaultStyling ? ' dc-main-navigation base-styles' : '')
  }, expand && /*#__PURE__*/_react["default"].createElement(_reactstrap.Navbar, {
    expand: "md",
    className: customClasses
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-toggle"
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.NavbarToggler, {
    onClick: function onClick() {
      return toggleOpen(!isOpen);
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fas', 'bars'],
    "aria-hidden": "true",
    role: "presentation"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Menu"))), /*#__PURE__*/_react["default"].createElement(_reactstrap.Collapse, {
    isOpen: isOpen,
    navbar: true
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Nav, {
    className: "mr-auto"
  }, navItems.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactstrap.NavItem, {
      key: index
    }, item);
  })))), !expand && /*#__PURE__*/_react["default"].createElement(_reactstrap.Navbar, {
    expand: false,
    className: customClasses
  }, /*#__PURE__*/_react["default"].createElement("ul", null, navItems.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactstrap.NavItem, {
      key: index
    }, item);
  }))));
};

NavBar.defaultProps = {
  defaultStyling: true,
  expand: true,
  customClasses: ""
};
NavBar.propTypes = {
  customClasses: _propTypes["default"].string,
  defaultStyling: _propTypes["default"].bool,
  expand: _propTypes["default"].bool,
  navItems: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    url: _propTypes["default"].string
  })).isRequired
};
var _default = NavBar;
exports["default"] = _default;