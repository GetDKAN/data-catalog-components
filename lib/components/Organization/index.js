"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function Organization(props) {
  var name = props.name,
      description = props.description,
      identifier = props.identifier,
      imageUrl = props.imageUrl;

  var image = _react["default"].createElement("img", {
    alt: name || "Organization Image",
    src: imageUrl
  });

  var alignment = props.alignment ? props.alignment : 'center';
  var link = "search?publisher=".concat(identifier);
  return _react["default"].createElement("div", {
    className: "dc-org-block",
    style: {
      textAlign: alignment
    }
  }, _react["default"].createElement("div", {
    className: "dc-org-image",
    alt: "Organization Logo"
  }, image), _react["default"].createElement("h3", {
    className: "dc-org-name"
  }, name), description && _react["default"].createElement("div", {
    className: "org-description"
  }, description));
}

Organization.defaultProps = {
  name: "",
  description: "",
  identifier: "",
  imageUrl: "https://s3.amazonaws.com/dkan-default-content-files/files/group.png"
};
Organization.propTypes = {
  name: _propTypes["default"].string,
  description: _propTypes["default"].string,
  identifier: _propTypes["default"].string,
  imageUrl: _propTypes["default"].string
};
var _default = Organization;
exports["default"] = _default;