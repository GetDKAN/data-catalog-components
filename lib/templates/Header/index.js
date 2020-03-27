"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Logo = _interopRequireDefault(require("../../components/Logo"));

var _NavBar = _interopRequireDefault(require("../../templates/NavBar"));

/* eslint-disable */
var Header =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Header, _Component);

  function Header() {
    (0, _classCallCheck2["default"])(this, Header);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Header).apply(this, arguments));
  }

  (0, _createClass2["default"])(Header, [{
    key: "render",
    value: function render() {
      var siteName = this.props.site ? _react["default"].createElement("a", {
        href: this.props.link
      }, this.props.site) : null;
      var slogan = this.props.slogan ? _react["default"].createElement("div", {
        className: "slogan"
      }, this.props.slogan) : null;
      return _react["default"].createElement("div", {
        className: "dc-header"
      }, _react["default"].createElement("div", {
        className: this.props.customClasses
      }, _react["default"].createElement("div", {
        className: "branding"
      }, _react["default"].createElement(_Logo["default"], null), _react["default"].createElement("div", {
        className: "site-name"
      }, siteName, slogan))), this.props.navItems && _react["default"].createElement(_NavBar["default"], {
        navItems: this.props.navItems,
        className: this.props.customClasses
      }));
    }
  }]);
  return Header;
}(_react.Component);

Header.defaultProps = {
  link: "/"
};
var _default = Header;
exports["default"] = _default;