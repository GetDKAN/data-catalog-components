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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

/* eslint-disable */
var StatBlock =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(StatBlock, _React$PureComponent);

  function StatBlock() {
    (0, _classCallCheck2["default"])(this, StatBlock);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(StatBlock).apply(this, arguments));
  }

  (0, _createClass2["default"])(StatBlock, [{
    key: "render",
    value: function render() {
      var content = this.props.content;
      return _react["default"].createElement(_Wrapper["default"], {
        key: content.ref,
        className: "stat-block"
      }, _react["default"].createElement("i", {
        className: content.icon
      }), _react["default"].createElement("h2", null, content.title), _react["default"].createElement("p", null, content.content));
    }
  }]);
  return StatBlock;
}(_react["default"].PureComponent);

StatBlock.propTypes = {
  icon: _propTypes["default"].string,
  title: _propTypes["default"].string,
  content: _propTypes["default"].any
};
var _default = StatBlock;
exports["default"] = _default;