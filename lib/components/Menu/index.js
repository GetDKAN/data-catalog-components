"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _router = require("@reach/router");

var _validator = _interopRequireDefault(require("validator"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Menu = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu() {
    (0, _classCallCheck2["default"])(this, Menu);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(Menu, [{
    key: "render",
    value: function render() {
      var heading = this.props.title ? this.props.title : "";
      var direction = this.props.horizontal ? "nav-horizontal" : "";
      var classes = "dc-menu ".concat(this.props.className, " ").concat(direction);
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classes,
        "aria-label": this.props.menuId,
        id: this.props.menuId
      }, heading ? /*#__PURE__*/_react["default"].createElement("h3", null, heading) : '', /*#__PURE__*/_react["default"].createElement("ul", null, this.props.items.map(function (item, i) {
        return _validator["default"].isURL(item.url) ? /*#__PURE__*/_react["default"].createElement("li", {
          key: i
        }, /*#__PURE__*/_react["default"].createElement("a", {
          href: item.url,
          target: item.target,
          className: "dc-menu-item"
        }, item.label)) : /*#__PURE__*/_react["default"].createElement("li", {
          key: i
        }, /*#__PURE__*/_react["default"].createElement(_router.Link, {
          to: item.url,
          target: item.target,
          className: "dc-menu-item"
        }, item.label));
      })));
    }
  }]);
  return Menu;
}(_react.Component);

Menu.defaultProps = {
  items: [],
  className: "navigation-menu",
  target: "_top",
  menuId: "menu"
};
Menu.propTypes = {
  items: _propTypes["default"].any,
  className: _propTypes["default"].any,
  title: _propTypes["default"].string,
  horizontal: _propTypes["default"].bool,
  menuId: _propTypes["default"].string
};
var _default = Menu;
exports["default"] = _default;