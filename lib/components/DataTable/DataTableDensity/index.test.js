"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

describe('<DataTableDensity />', function () {
  var defaultWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
    densityChange: function densityChange() {
      return function () {
        return true;
      };
    }
  }));
  var customWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
    densityChange: function densityChange() {
      return function () {
        return true;
      };
    },
    title: "Foobar",
    items: [{
      icon: /*#__PURE__*/_react["default"].createElement("span", null, "Icon "),
      text: 'first'
    }, {
      icon: /*#__PURE__*/_react["default"].createElement("span", null, "Icon "),
      text: 'second'
    }, {
      icon: /*#__PURE__*/_react["default"].createElement("span", null, "Icon "),
      text: 'third'
    }]
  }));
  it('renders correct initial results', function () {
    expect(defaultWrapper.find('.density-buttons-title').text()).toBe('Display Density');
    expect(defaultWrapper.find('.density-buttons button:first-child span').text()).toBe('expanded');
    expect(defaultWrapper.find('.density-buttons button:last-child span').text()).toBe('tight');
  });
  it('renders correct custom results', function () {
    expect(customWrapper.find('.density-buttons-title').text()).toBe('Foobar');
    expect(customWrapper.find('.density-buttons button:first-child').text()).toBe('Icon first');
    expect(customWrapper.find('.density-buttons button:last-child').text()).toBe('Icon third');
  });
});