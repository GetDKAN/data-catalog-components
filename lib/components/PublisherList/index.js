"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Organization = _interopRequireDefault(require("../Organization"));

function PublisherList(props) {
  var content = /*#__PURE__*/_react["default"].createElement("div", null);

  var custom = 'className' in props ? props.className : "";

  if (props.items) {
    content = props.items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_Organization["default"], {
        name: item.name,
        key: item.identifier,
        imageUrl: item.imageUrl,
        description: item.description
      });
    });
  }

  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "dc-publisher-list ".concat(custom)
  }, content);
}

PublisherList.propTypes = {
  items: _propTypes["default"].array,
  className: _propTypes["default"].string
};
var _default = PublisherList;
exports["default"] = _default;