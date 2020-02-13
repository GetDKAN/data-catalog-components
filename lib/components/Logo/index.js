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

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

/* eslint-disable */
var Logo =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Logo, _Component);

  function Logo() {
    (0, _classCallCheck2["default"])(this, Logo);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Logo).apply(this, arguments));
  }

  (0, _createClass2["default"])(Logo, [{
    key: "render",
    value: function render() {
      var logo = this.props.image ? this.props.image : {
        image: image
      };
      return _react["default"].createElement(_Wrapper["default"], {
        href: "/",
        className: "logo"
      }, _react["default"].createElement("img", {
        src: logo,
        alt: "Open Data Catalog"
      }));
    }
  }]);
  return Logo;
}(_react.Component);

Logo.defaultProps = {
  image: 'http://demo.getdkan.com/profiles/dkan/themes/nuboot_radix/logo.svg'
};
var _default = Logo;
exports["default"] = _default;