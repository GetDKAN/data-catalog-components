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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Menu = _interopRequireDefault(require("../../components/Menu"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Footer = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Footer, _React$Component);

  var _super = _createSuper(Footer);

  function Footer() {
    (0, _classCallCheck2["default"])(this, Footer);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Footer, [{
    key: "render",
    value: function render() {
      var menu1 = this.props.links ? /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
        items: this.props.links.footer1,
        menuId: "leftnav"
      }) : null;
      var menu2 = this.props.links ? /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
        items: this.props.links.footer2,
        menuId: "rightnav"
      }) : null;
      var customClasses = this.props.customClasses;
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
  }]);
  return Footer;
}(_react["default"].Component);

Footer.defaultProps = {
  state: "loading"
};
Footer.propTypes = {
  state: _propTypes["default"].string,
  item: _propTypes["default"].any,
  links: _propTypes["default"].object
};
var _default = Footer;
exports["default"] = _default;