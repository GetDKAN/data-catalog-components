"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactstrap = require("reactstrap");

var NavBar = function NavBar(_ref) {
  var navItems = _ref.navItems,
      expand = _ref.expand,
      defaultStyling = _ref.defaultStyling,
      customClasses = _ref.customClasses;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isOpen = _useState2[0],
      toggleOpen = _useState2[1];

  return _react["default"].createElement("div", {
    className: "".concat(customClasses, " ").concat(defaultStyling ? ' dc-main-navigation base-styles' : '')
  }, expand && _react["default"].createElement(_reactstrap.Navbar, {
    expand: "md navbar-dark"
  }, _react["default"].createElement(_reactstrap.NavbarToggler, {
    onClick: function onClick() {
      return toggleOpen(!isOpen);
    }
  }), _react["default"].createElement(_reactstrap.Collapse, {
    isOpen: isOpen,
    navbar: true
  }, _react["default"].createElement(_reactstrap.Nav, {
    className: "mr-auto"
  }, navItems.map(function (item, index) {
    return _react["default"].createElement(_reactstrap.NavItem, {
      key: index
    }, item);
  })))), !expand && _react["default"].createElement(_reactstrap.Navbar, {
    expand: false,
    className: customClasses
  }, _react["default"].createElement("ul", null, navItems.map(function (item, index) {
    return _react["default"].createElement(_reactstrap.NavItem, {
      key: index
    }, item);
  }))));
};

NavBar.defaultProps = {
  defaultStyling: true,
  expand: true,
  customClasses: ""
};
var _default = NavBar;
exports["default"] = _default;