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

var _TopicIcon = _interopRequireDefault(require("../../templates/TopicIcon"));

var _router = require("@reach/router");

var IconListItem =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(IconListItem, _React$PureComponent);

  function IconListItem() {
    (0, _classCallCheck2["default"])(this, IconListItem);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(IconListItem).apply(this, arguments));
  }

  (0, _createClass2["default"])(IconListItem, [{
    key: "render",
    value: function render() {
      var content = '';

      if (this.props.image) {
        // Image provided as a url.
        content = _react["default"].createElement(_router.Link, {
          to: this.props.link,
          className: "dc-icon-link"
        }, _react["default"].createElement("img", {
          src: this.props.image,
          alt: this.props.title
        }), _react["default"].createElement("div", null, this.props.title));
      } else {
        // Image provided by custom component.
        content = _react["default"].createElement(_router.Link, {
          to: this.props.link,
          className: "dc-icon-link"
        }, _react["default"].createElement(_TopicIcon["default"], {
          title: this.props.title,
          size: this.props.size,
          fill: this.props.color
        }), _react["default"].createElement("div", null, this.props.title));
      }

      ;
      return _react["default"].createElement("li", {
        key: this.props.identifier
      }, content);
    }
  }]);
  return IconListItem;
}(_react["default"].PureComponent);

IconListItem.propTypes = {
  title: _propTypes["default"].string,
  link: _propTypes["default"].string,
  image: _propTypes["default"].string,
  size: _propTypes["default"].string,
  color: _propTypes["default"].string,
  identifier: _propTypes["default"].string
};
var _default = IconListItem;
exports["default"] = _default;