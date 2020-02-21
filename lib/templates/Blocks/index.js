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

var _BasicBlock = _interopRequireDefault(require("./BasicBlock"));

/* eslint-disable */
var Blocks =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Blocks, _React$PureComponent);

  function Blocks() {
    (0, _classCallCheck2["default"])(this, Blocks);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Blocks).apply(this, arguments));
  }

  (0, _createClass2["default"])(Blocks, [{
    key: "render",
    value: function render() {
      var items = this.props.items;
      var Block = this.props.component;
      var paneTitle = this.props.paneTitle;

      if (paneTitle) {
        return _react["default"].createElement(_Wrapper["default"], {
          className: 'container-fluid ' + this.props.className
        }, _react["default"].createElement("h2", null, paneTitle), _react["default"].createElement("div", {
          className: "pane-content"
        }, this.props.items.map(function (item, index) {
          return _react["default"].createElement(Block, {
            content: item,
            key: index
          });
        })));
      } else {
        return _react["default"].createElement(_Wrapper["default"], {
          className: 'container-fluid ' + this.props.className
        }, _react["default"].createElement("div", {
          className: "pane-content"
        }, this.props.items.map(function (item, index) {
          return _react["default"].createElement(Block, {
            content: item,
            key: index
          });
        })));
      }
    }
  }]);
  return Blocks;
}(_react["default"].PureComponent);

Blocks.defaultProps = {
  items: [],
  component: _BasicBlock["default"],
  className: 'BasicBlock'
};
Blocks.propTypes = {
  items: _propTypes["default"].array,
  component: _propTypes["default"].func.isRequired,
  className: _propTypes["default"].string
};
var _default = Blocks;
exports["default"] = _default;