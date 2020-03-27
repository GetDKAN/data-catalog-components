"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Circle = _interopRequireDefault(require("./Circle"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

/* eslint-disable */
var LoadingIndicator = function LoadingIndicator() {
  return _react["default"].createElement(_Wrapper["default"], null, _react["default"].createElement(_Circle["default"], null), _react["default"].createElement(_Circle["default"], {
    rotate: 30,
    delay: -1.1
  }), _react["default"].createElement(_Circle["default"], {
    rotate: 60,
    delay: -1
  }), _react["default"].createElement(_Circle["default"], {
    rotate: 90,
    delay: -0.9
  }), _react["default"].createElement(_Circle["default"], {
    rotate: 120,
    delay: -0.8
  }), _react["default"].createElement(_Circle["default"], {
    rotate: 150,
    delay: -0.7
  }), _react["default"].createElement(_Circle["default"], {
    rotate: 180,
    delay: -0.6
  }), _react["default"].createElement(_Circle["default"], {
    rotate: 210,
    delay: -0.5
  }), _react["default"].createElement(_Circle["default"], {
    rotate: 240,
    delay: -0.4
  }), _react["default"].createElement(_Circle["default"], {
    rotate: 270,
    delay: -0.3
  }), _react["default"].createElement(_Circle["default"], {
    rotate: 300,
    delay: -0.2
  }), _react["default"].createElement(_Circle["default"], {
    rotate: 330,
    delay: -0.1
  }));
};

var _default = LoadingIndicator;
exports["default"] = _default;