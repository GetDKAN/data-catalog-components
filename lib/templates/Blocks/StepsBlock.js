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

/* eslint-disable */
var StepsBlock =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(StepsBlock, _React$PureComponent);

  function StepsBlock() {
    (0, _classCallCheck2["default"])(this, StepsBlock);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(StepsBlock).apply(this, arguments));
  }

  (0, _createClass2["default"])(StepsBlock, [{
    key: "render",
    value: function render() {
      var content = this.props.content;
      return _react["default"].createElement("div", {
        key: content.ref,
        className: "steps-block"
      }, _react["default"].createElement("div", {
        className: "steps-step"
      }, content.step), _react["default"].createElement("h3", null, content.title), _react["default"].createElement("p", null, content.content));
    }
  }]);
  return StepsBlock;
}(_react["default"].PureComponent);

StepsBlock.propTypes = {
  step: _propTypes["default"].string,
  title: _propTypes["default"].string,
  content: _propTypes["default"].any
};
var _default = StepsBlock;
exports["default"] = _default;