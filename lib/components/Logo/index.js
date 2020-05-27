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

var _router = require("@reach/router");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Logo = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Logo, _Component);

  var _super = _createSuper(Logo);

  function Logo() {
    (0, _classCallCheck2["default"])(this, Logo);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Logo, [{
    key: "render",
    value: function render() {
      var logo = this.props.image;
      return /*#__PURE__*/_react["default"].createElement(_router.Link, {
        to: "/",
        className: "dc-logo"
      }, /*#__PURE__*/_react["default"].createElement("img", {
        src: logo,
        alt: "Open Data Catalog"
      }));
    }
  }]);
  return Logo;
}(_react.Component);

Logo.defaultProps = {
  image: 'https://dkan-default-content-files.s3.amazonaws.com/files/logo.svg'
};
var _default = Logo;
exports["default"] = _default;