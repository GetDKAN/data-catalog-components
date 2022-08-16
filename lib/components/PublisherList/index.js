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
  var items = props.items,
      className = props.className,
      organizationEndpoint = props.organizationEndpoint;

  var content = /*#__PURE__*/_react["default"].createElement("div", null);

  if (items) {
    content = props.items.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_Organization["default"], {
        name: item.name,
        key: item.identifier,
        imageUrl: item.imageUrl,
        description: item.description,
        organizationEndpoint: organizationEndpoint,
        searchUrl: item.searchUrl,
        alignment: item.alignment
      });
    });
  }

  return /*#__PURE__*/_react["default"].createElement("ul", {
    className: "dc-publisher-list ".concat(className)
  }, content);
}

PublisherList.defaultProps = {
  className: ''
};
PublisherList.propTypes = {
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    alignment: _propTypes["default"].string,
    name: _propTypes["default"].string,
    description: _propTypes["default"].string,
    identifier: _propTypes["default"].string,
    imageUrl: _propTypes["default"].string,
    searchUrl: _propTypes["default"].string,
    organizationEndpoint: _propTypes["default"].string
  })).isRequired,
  className: _propTypes["default"].string
};
var _default = PublisherList;
exports["default"] = _default;