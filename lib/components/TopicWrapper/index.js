"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _router = require("@reach/router");

var TopicWrapper = function TopicWrapper(_ref) {
  var component = _ref.component,
      topic = _ref.topic;
  var ComponentToRender = component;
  return _react["default"].createElement(_router.Link, {
    className: "dc-topic-wrapper",
    key: "dist-".concat(topic, "-").concat(Math.random() * 10),
    to: "search?theme=" + topic
  }, _react["default"].createElement(ComponentToRender, {
    title: topic,
    height: "16",
    width: "16"
  }), topic);
};

var _default = TopicWrapper;
exports["default"] = _default;