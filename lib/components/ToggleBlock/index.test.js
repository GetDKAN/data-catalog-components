"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("./index"));

describe('<ToggleBlock />', function () {
  var defaultWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
    title: "My Title"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Child Element")));
  var defaultClosedWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
    title: "My Title",
    defaultClosed: true
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Child Element")));
  var customWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
    title: "My Custom Title",
    headingClasses: "custom-heading-class",
    innerClasses: "custom-inner-class",
    allowToggle: false
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Child Element")));
  it('renders as default h2 with button title', function () {
    expect(defaultWrapper.find('h2 button').text()).toBe('<FontAwesomeIcon />My Title');
  });
  it('renders with default classes', function () {
    expect(defaultWrapper.exists('h2.toggle-block-title')).toBe(true);
    expect(defaultWrapper.exists('div.toggle-block-inner')).toBe(true);
  });
  it('renders without button title', function () {
    expect(customWrapper.find('h2').text()).toBe('My Custom Title');
    expect(customWrapper.find('h2 button').exists()).toBe(false);
  });
  it('renders with custom headingClasses', function () {
    expect(customWrapper.exists('h2.custom-heading-class')).toBe(true);
    expect(customWrapper.find('h2.toggle-block-title').exists()).toBe(false);
  });
  it('renders with custom innerClasses', function () {
    expect(customWrapper.exists('div.custom-inner-class')).toBe(true);
    expect(customWrapper.find('div.toggle-block-inner').exists()).toBe(false);
  });
  it('renders in the closed state', function () {
    expect(defaultClosedWrapper.find('div.toggle-block-inner').exists()).toBe(false);
    expect(defaultClosedWrapper.exists('div.closed')).toBe(true);
  });
  it('toggles render of children', function () {
    expect(defaultWrapper.exists('div.open')).toBe(true);
    expect(defaultWrapper.exists('div.closed')).toBe(false);
    defaultWrapper.find('h2 button').simulate('click');
    expect(defaultWrapper.find('div.toggle-block-inner').exists()).toBe(false);
    expect(defaultWrapper.exists('div.closed')).toBe(true);
    expect(defaultWrapper.exists('div.open')).toBe(false);
    defaultWrapper.find('h2 button').simulate('click');
    expect(defaultWrapper.exists('div.toggle-block-inner'));
    expect(defaultWrapper.exists('div.open')).toBe(true);
    expect(defaultWrapper.exists('div.closed')).toBe(false);
  });
});