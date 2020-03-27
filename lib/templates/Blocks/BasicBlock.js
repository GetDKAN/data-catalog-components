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

var _Text = _interopRequireDefault(require("../../components/Text"));

/* eslint-disable */
var BasicBlock =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(BasicBlock, _React$PureComponent);

  function BasicBlock() {
    (0, _classCallCheck2["default"])(this, BasicBlock);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(BasicBlock).apply(this, arguments));
  }

  (0, _createClass2["default"])(BasicBlock, [{
    key: "render",
    value: function render() {
      var content = this.props.content;
      return _react["default"].createElement("div", {
        key: content.ref,
        className: "basic-block"
      }, _react["default"].createElement("h2", null, content.title), _react["default"].createElement(_Text["default"], {
        value: content.content
      }));
    }
  }]);
  return BasicBlock;
}(_react["default"].PureComponent);

BasicBlock.propTypes = {
  title: _propTypes["default"].string,
  content: _propTypes["default"].any
};
var _default = BasicBlock;
exports["default"] = _default;