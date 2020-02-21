"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function IconList(props) {
  var ComponentToRender = props.component;

  var content = _react["default"].createElement("div", null);

  var styles = {
    textAlign: props.titleAlign
  }; // If we have items, render them

  if (props.items) {
    content = props.items.map(function (item, i) {
      return _react["default"].createElement(ComponentToRender, {
        key: i,
        title: item.title,
        image: item.image,
        link: item.ref,
        color: item.color,
        size: item.size,
        index: i
      });
    });
  } else {
    // Otherwise render a single component
    content = _react["default"].createElement(ComponentToRender, null);
  }

  if (props.paneTitle) {
    return _react["default"].createElement("div", {
      className: "dc-icon-list  {$props.containerClass}"
    }, _react["default"].createElement("h2", {
      className: "pane-title",
      style: styles
    }, props.paneTitle), _react["default"].createElement("ul", {
      className: props.listClass
    }, content));
  } else {
    return _react["default"].createElement("div", {
      className: "dc-icon-list  {$props.containerClass}"
    }, _react["default"].createElement("ul", {
      className: props.listClass
    }, content));
  }
}

IconList.defaultProps = {
  items: [],
  className: "icon-list",
  paneTitle: "Icon List"
};
IconList.propTypes = {
  component: _propTypes["default"].func.isRequired,
  items: _propTypes["default"].array,
  listClass: _propTypes["default"].string,
  containerClass: _propTypes["default"].string,
  paneTitle: _propTypes["default"].string,
  titleAlign: _propTypes["default"].string
};
var _default = IconList;
exports["default"] = _default;