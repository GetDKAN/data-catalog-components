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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Menu = _interopRequireDefault(require("../../components/Menu"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

/* eslint-disable */
var Footer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Footer, _React$Component);

  function Footer() {
    (0, _classCallCheck2["default"])(this, Footer);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Footer).apply(this, arguments));
  }

  (0, _createClass2["default"])(Footer, [{
    key: "render",
    value: function render() {
      var menu1 = this.props.links ? _react["default"].createElement(_Menu["default"], {
        items: this.props.links.footer1,
        menuId: "leftnav"
      }) : null;
      var menu2 = this.props.links ? _react["default"].createElement(_Menu["default"], {
        items: this.props.links.footer2,
        menuId: "rightnav"
      }) : null;
      var customClasses = this.props.customClasses;
      return _react["default"].createElement("div", {
        className: "".concat(customClasses, " dc-footer")
      }, _react["default"].createElement("div", {
        className: "page-footer"
      }, _react["default"].createElement("div", {
        className: "branding"
      }, _react["default"].createElement("h2", null, "Open Source Open Data"), _react["default"].createElement("p", null, "We can only realize the full power of open data when the tools used for its collection, publishing and analysis are also open and transparent."), _react["default"].createElement("p", null, "Powered by ", _react["default"].createElement("a", {
        href: "http://getdkan.com"
      }, "DKAN")), _react["default"].createElement("div", {
        className: "social"
      }, _react["default"].createElement("a", {
        href: "https://www.facebook.com/GetDKAN/"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: ['fab', 'facebook'],
        size: "1x",
        "aria-hidden": "true",
        role: "presentation"
      }), _react["default"].createElement("span", {
        className: "sr-only"
      }, "Facebook")), _react["default"].createElement("a", {
        href: "https://twitter.com/getdkan"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: ['fab', 'twitter'],
        size: "1x",
        "aria-hidden": "true",
        role: "presentation"
      }), _react["default"].createElement("span", {
        className: "sr-only"
      }, "Twitter")), _react["default"].createElement("a", {
        href: "https://dkan.slack.com/"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: ['fab', 'slack'],
        size: "1x",
        "aria-hidden": "true",
        role: "presentation"
      }), _react["default"].createElement("span", {
        className: "sr-only"
      }, "Slack")), _react["default"].createElement("a", {
        href: "https://github.com/getdkan"
      }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: ['fab', 'github'],
        size: "1x",
        "aria-hidden": "true",
        role: "presentation"
      }), _react["default"].createElement("span", {
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