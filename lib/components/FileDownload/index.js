"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormatIcon = _interopRequireDefault(require("../FormatIcon"));

var _Text = _interopRequireDefault(require("../Text"));

var FileDownload = function FileDownload(_ref) {
  var title = _ref.title,
      format = _ref.format,
      downloadURL = _ref.downloadURL,
      description = _ref.description;
  var label = title || format;

  var item = /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-resource"
  }, /*#__PURE__*/_react["default"].createElement(_FormatIcon["default"], {
    format: format
  }), /*#__PURE__*/_react["default"].createElement("a", {
    href: downloadURL,
    title: label
  }, label), description && /*#__PURE__*/_react["default"].createElement(_Text["default"], {
    value: description,
    wrapper: {
      tag: 'div',
      classes: 'dc-file-description'
    }
  }));

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-file-download"
  }, item);
};

FileDownload.defaultProps = {
  description: '',
  title: ''
};
FileDownload.propTypes = {
  title: _propTypes["default"].string,
  format: _propTypes["default"].string.isRequired,
  downloadURL: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].string
};
var _default = FileDownload;
exports["default"] = _default;