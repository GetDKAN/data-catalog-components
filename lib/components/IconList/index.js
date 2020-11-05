"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function IconList(_ref) {
  var items = _ref.items,
      component = _ref.component,
      containerClass = _ref.containerClass,
      listClass = _ref.listClass,
      paneTitle = _ref.paneTitle,
      titleAlign = _ref.titleAlign;
  var ComponentToRender = component;

  var content = /*#__PURE__*/_react["default"].createElement("div", null);

  var styles = {
    textAlign: titleAlign
  }; // If we have items, render them

  if (items) {
    content = items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(ComponentToRender, {
        key: item.id,
        title: item.title,
        image: item.image,
        link: item.ref,
        color: item.color,
        size: item.size,
        index: item.id
      });
    });
  } else {
    // Otherwise render a single component
    content = /*#__PURE__*/_react["default"].createElement(ComponentToRender, null);
  }

  if (paneTitle) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "dc-icon-list  ".concat(containerClass)
    }, /*#__PURE__*/_react["default"].createElement("h2", {
      className: "pane-title",
      style: styles
    }, paneTitle), /*#__PURE__*/_react["default"].createElement("ul", {
      className: listClass
    }, content));
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'dc-icon-list  {containerClass}'
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: listClass
  }, content));
}

IconList.defaultProps = {
  listClass: 'dc-list',
  containerClass: 'container',
  paneTitle: '',
  titleAlign: ''
};
IconList.propTypes = {
  component: _propTypes["default"].func.isRequired,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    title: _propTypes["default"].string,
    link: _propTypes["default"].string,
    image: _propTypes["default"].string,
    size: _propTypes["default"].string,
    color: _propTypes["default"].string,
    identifier: _propTypes["default"].string
  })).isRequired,
  listClass: _propTypes["default"].string,
  containerClass: _propTypes["default"].string,
  paneTitle: _propTypes["default"].string,
  titleAlign: _propTypes["default"].string
};
var _default = IconList;
exports["default"] = _default;