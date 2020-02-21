"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormatIcon = _interopRequireDefault(require("../FormatIcon"));

function FileDownload(props) {
  var format = props.format,
      downloadURL = props.downloadURL,
      title = props.title;
  var label = title ? title : format;

  var item = _react["default"].createElement("div", {
    className: "dc-resource"
  }, _react["default"].createElement(_FormatIcon["default"], {
    format: format
  }), _react["default"].createElement("a", {
    href: downloadURL,
    title: label
  }, label));

  return _react["default"].createElement("div", {
    className: "dc-file-download"
  }, item);
}

FileDownload.propTypes = {
  title: _propTypes["default"].string,
  format: _propTypes["default"].string,
  downloadURL: _propTypes["default"].string
};
var _default = FileDownload;
exports["default"] = _default;