"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _router = require("@reach/router");

var TopicWrapper = function TopicWrapper(_ref) {
  var component = _ref.component,
      topic = _ref.topic;
  var ComponentToRender = component;
  return /*#__PURE__*/_react["default"].createElement(_router.Link, {
    className: "dc-topic-wrapper",
    key: "dist-".concat(topic, "-").concat(Math.random() * 10),
    to: "/search?theme=".concat(topic)
  }, /*#__PURE__*/_react["default"].createElement(ComponentToRender, {
    title: topic,
    height: "16",
    width: "16"
  }), topic);
};

TopicWrapper.propTypes = {
  component: _propTypes["default"].func.isRequired,
  topic: _propTypes["default"].string.isRequired
};
var _default = TopicWrapper;
exports["default"] = _default;