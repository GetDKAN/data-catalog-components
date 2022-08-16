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

var _router = require("@reach/router");

var _Text = _interopRequireDefault(require("../../components/Text"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var BasicBlock = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(BasicBlock, _React$PureComponent);

  var _super = _createSuper(BasicBlock);

  function BasicBlock() {
    (0, _classCallCheck2["default"])(this, BasicBlock);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(BasicBlock, [{
    key: "render",
    value: function render() {
      var content = this.props.content;
      var img = content.image ? /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("img", {
        alt: "",
        src: content.image
      })) : null;
      var block = '';

      if (content.ref) {
        block = /*#__PURE__*/_react["default"].createElement("div", {
          key: content.ref,
          className: "basic-block"
        }, /*#__PURE__*/_react["default"].createElement("h2", null, /*#__PURE__*/_react["default"].createElement(_router.Link, {
          to: content.ref
        }, img, content.title)), /*#__PURE__*/_react["default"].createElement(_Text["default"], {
          value: content.teaser
        }));
      } else {
        block = /*#__PURE__*/_react["default"].createElement("div", {
          key: content.title,
          className: "basic-block"
        }, /*#__PURE__*/_react["default"].createElement("h2", null, img, content.title), /*#__PURE__*/_react["default"].createElement(_Text["default"], {
          value: content.teaser
        }));
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, block);
    }
  }]);
  return BasicBlock;
}(_react["default"].PureComponent);

BasicBlock.defaultProps = {
  content: [{
    title: '',
    content: '',
    image: '',
    teaser: '',
    ref: ''
  }]
};
BasicBlock.propTypes = {
  content: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string,
    teaser: _propTypes["default"].string,
    image: _propTypes["default"].string,
    ref: _propTypes["default"].string
  }))
};
var _default = BasicBlock;
exports["default"] = _default;