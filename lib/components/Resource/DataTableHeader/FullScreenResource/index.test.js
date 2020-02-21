"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

describe('<FullScreenResource />', function () {
  var defaultWrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], null, _react["default"].createElement("h1", {
    id: "header-item"
  }, "dkan2")));
  it('renders correctly without modal open', function () {
    expect(defaultWrapper.exists('.data-table-fullscreen')).toBe(true);
    expect(defaultWrapper.exists('.data-table-fullscreen-modal')).toBe(false);
  });
  it('opens and closes the modal window', function () {
    defaultWrapper.find('.data-table-fullscreen button').simulate('click');
    expect(defaultWrapper.exists('.data-table-fullscreen-modal')).toBe(true);
    defaultWrapper.find('.fullscreen-modal-close').simulate('click');
    expect(defaultWrapper.exists('.data-table-fullscreen-modal')).toBe(false);
  });
});