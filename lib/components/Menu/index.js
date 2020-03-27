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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _router = require("@reach/router");

var _validator = _interopRequireDefault(require("validator"));

/* eslint-disable */
var Menu =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Menu, _Component);

  function Menu() {
    (0, _classCallCheck2["default"])(this, Menu);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Menu).apply(this, arguments));
  }

  (0, _createClass2["default"])(Menu, [{
    key: "render",
    value: function render() {
      var heading = this.props.title ? this.props.title : "";
      var direction = this.props.horizontal ? "nav-horizontal" : "";
      var classes = "dc-menu ".concat(this.props.className, " ").concat(direction);
      return _react["default"].createElement("div", {
        className: classes,
        "aria-label": this.props.menuId,
        id: this.props.menuId
      }, heading ? _react["default"].createElement("h3", null, heading) : '', _react["default"].createElement("ul", null, this.props.items.map(function (item, i) {
        return _validator["default"].isURL(item.url) ? _react["default"].createElement("li", {
          key: i
        }, _react["default"].createElement("a", {
          href: item.url,
          target: item.target,
          className: "dc-menu-item"
        }, item.label)) : _react["default"].createElement("li", {
          key: i
        }, _react["default"].createElement(_router.Link, {
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