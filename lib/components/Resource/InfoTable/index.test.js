"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

describe('<DataTable />', function () {
  var defaultWrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
    statistics: {
      columns: 10,
      rows: 99
    },
    title: "dkan2"
  }));
  it('renders correctly', function () {
    expect(defaultWrapper.exists('div.table-one')).toBe(true);
    expect(defaultWrapper.exists('div table')).toBe(true);
  });
  it('has a custom title', function () {
    expect(defaultWrapper.find('div h3').text()).toBe('dkan2');
  });
  it('has correct rows and column information', function () {
    expect(defaultWrapper.find('table thead tr th:first-child').text()).toBe('Rows');
    expect(defaultWrapper.find('table thead tr th:last-child').text()).toBe('Columns');
    expect(defaultWrapper.find('table tbody tr td:first-child').text()).toBe('99');
    expect(defaultWrapper.find('table tbody tr td:last-child').text()).toBe('10');
  });
});