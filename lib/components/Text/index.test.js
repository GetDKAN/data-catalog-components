"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("./index"));

describe("<Title />", function () {
  it("renders as plain text", function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      value: "<u>My Value</u>"
    }));
    expect(wrapper.html()).toBe("<u>My Value</u>");
  });
  it("renders as children instead of value", function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      value: "<u>My Value</u>"
    }, /*#__PURE__*/_react["default"].createElement("p", null, "My Children")));
    expect(wrapper.html()).toBe("<u>My Value</u>");
  });
  it("renders as children instead of value", function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_index["default"], null, /*#__PURE__*/_react["default"].createElement("p", null, "My Children")));
    expect(wrapper.html()).toBe("<p>My Children</p>");
  });
  it("renders as children inside a tag with a classname", function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      wrapper: {
        tag: "div",
        classes: "class1 class2"
      }
    }, /*#__PURE__*/_react["default"].createElement("p", null, "My Children")));
    expect(wrapper.html()).toBe('<div class="class1 class2"><p>My Children</p></div>');
  });
});