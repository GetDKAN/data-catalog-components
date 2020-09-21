"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("./index"));

jest.useFakeTimers();
describe('<SearchInput />', function () {
  var defaultWrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
    onChangeFunction: function onChangeFunction() {}
  }));
  var customWrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
    onChangeFunction: function onChangeFunction() {},
    onResetFunction: function onResetFunction() {},
    showSubmit: false,
    value: "test",
    resetContent: "Custom Reset"
  }));
  it('renders with default label of "Search"', function () {
    expect(defaultWrapper.find('label').text()).toBe('Search');
  });
  it('renders with no Reset button', function () {
    expect(defaultWrapper.exists('button#inputReset')).toBe(false);
  });
  it('renders with default button of "Submit"', function () {
    expect(defaultWrapper.find('button#inputSubmit').text()).toBe('Submit');
  });
  it('renders re-renders with input text and default Reset button', function () {
    defaultWrapper.find('input').simulate('change', {
      target: {
        value: 'abcdefg'
      }
    });
    jest.advanceTimersByTime(500);
    expect(defaultWrapper.find('input').props().value).toBe('abcdefg');
    expect(defaultWrapper.exists('button#inputReset')).toBe(true);
    expect(defaultWrapper.find('button#inputReset').text()).toBe('Reset');
  });
  it('renders without Submit button', function () {
    expect(customWrapper.exists('button#inputSubmit')).toBe(false);
  });
  it('resets input value when Reset button is clicked', function () {
    expect(customWrapper.exists('button#inputReset')).toBe(true);
    expect(customWrapper.find('input').props().value).toBe('test');
    expect(customWrapper.find('button#inputReset').text()).toBe('Custom Reset');
    customWrapper.find('button#inputReset').simulate('click');
    expect(customWrapper.find('input').props().value).toBe('');
  });
});