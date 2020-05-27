"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BasicBlock = _interopRequireDefault(require("./BasicBlock"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Blocks = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Blocks, _React$PureComponent);

  var _super = _createSuper(Blocks);

  function Blocks() {
    (0, _classCallCheck2["default"])(this, Blocks);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Blocks, [{
    key: "render",
    value: function render() {
      var items = this.props.items;
      var Block = this.props.component;
      var paneTitle = this.props.paneTitle;

      if (paneTitle) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: 'container-fluid ' + this.props.className
        }, /*#__PURE__*/_react["default"].createElement("h2", null, paneTitle), /*#__PURE__*/_react["default"].createElement("div", {
          className: "dc-block-content"
        }, this.props.items.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement(Block, {
            content: item,
            key: index
          });
        })));
      } else {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: 'container-fluid ' + this.props.className
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "dc-block-content"
        }, this.props.items.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement(Block, {
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