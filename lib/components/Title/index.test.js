"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("./index"));

describe("<Title />", function () {
  it("renders as default h1 with text", function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      title: "My Title"
    }));
    expect(wrapper.html()).toBe("<h1>My Title</h1>");
  });
  it("renders as h5 with text", function () {
    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_index["default"], {
      headerLevel: "h5",
      title: "My Title"
    }));
    expect(wrapper.html()).toBe("<h5>My Title</h5>");
  });
});