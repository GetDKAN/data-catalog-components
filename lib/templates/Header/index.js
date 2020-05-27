"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _NavBar = _interopRequireDefault(require("../../templates/NavBar"));

var _router = require("@reach/router");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Header = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Header, _Component);

  var _super = _createSuper(Header);

  function Header() {
    (0, _classCallCheck2["default"])(this, Header);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Header, [{
    key: "render",
    value: function render() {
      var logo = this.props.logo ? this.props.logo : 'https://dkan-default-content-files.s3.amazonaws.com/files/logo.svg';
      var siteName = this.props.site ? /*#__PURE__*/_react["default"].createElement(_router.Link, {
        to: this.props.link
      }, this.props.site) : null;
      var slogan = this.props.slogan ? /*#__PURE__*/_react["default"].createElement("div", {
        className: "slogan"
      }, this.props.slogan) : null;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "dc-header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: this.props.customClasses
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "branding"
      }, /*#__PURE__*/_react["default"].createElement(_router.Link, {
        to: this.props.link,
        className: "dc-logo"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: logo,
        alt: "Open Data Catalog"
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "site-name"
      }, siteName, slogan))), this.props.navItems && /*#__PURE__*/_react["default"].createElement(_NavBar["default"], {
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