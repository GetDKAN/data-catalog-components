"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("./Icon"));

var FormatIcon =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(FormatIcon, _React$PureComponent);

  function FormatIcon() {
    (0, _classCallCheck2["default"])(this, FormatIcon);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(FormatIcon).apply(this, arguments));
  }

  (0, _createClass2["default"])(FormatIcon, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(_Icon["default"], {
        format: this.props.format,
        fill: this.props.fill,
        width: this.props.width,
        height: this.props.height
      });
    }
  }]);
  return FormatIcon;
}(_react["default"].PureComponent);

FormatIcon.defaultProps = {
  format: "data",
  width: 50,
  height: 50
};
var _default = FormatIcon;
exports["default"] = _default;