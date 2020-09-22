"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _Menu = _interopRequireDefault(require("../../components/Menu"));

function Footer(_ref) {
  var links = _ref.links,
      customClasses = _ref.customClasses;
  var menu1 = links ? /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    items: links.footer1,
    menuId: "leftnav"
  }) : null;
  var menu2 = links ? /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    items: links.footer2,
    menuId: "rightnav"
  }) : null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-footer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(customClasses, " page-footer")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "branding"
  }, /*#__PURE__*/_react["default"].createElement("h2", null, "Open Source Open Data"), /*#__PURE__*/_react["default"].createElement("p", null, "We can only realize the full power of open data when the tools used for its collection, publishing and analysis are also open and transparent."), /*#__PURE__*/_react["default"].createElement("p", null, "Powered by ", /*#__PURE__*/_react["default"].createElement("a", {
    href: "http://getdkan.com"
  }, "DKAN")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "social"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://www.facebook.com/GetDKAN/"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fab', 'facebook'],
    size: "1x",
    "aria-hidden": "true",
    role: "presentation"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Facebook")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://twitter.com/getdkan"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fab', 'twitter'],
    size: "1x",
    "aria-hidden": "true",
    role: "presentation"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Twitter")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://dkan.slack.com/"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fab', 'slack'],
    size: "1x",
    "aria-hidden": "true",
    role: "presentation"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Slack")), /*#__PURE__*/_react["default"].createElement("a", {
    href: "https://github.com/getdkan"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fab', 'github'],
    size: "1x",
    "aria-hidden": "true",
    role: "presentation"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Github")))), menu1, menu2));
}

Footer.defaultProps = {
  customClasses: '',
  links: null
};
Footer.propTypes = {
  customClasses: _propTypes["default"].string,
  links: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].string,
    url: _propTypes["default"].string
  }))
};
var _default = Footer;
exports["default"] = _default;