"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

describe('<DataTablePageSizer />', function () {
  var defaultWrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_["default"], {
    pageSizeChange: function pageSizeChange() {
      return function () {
        return true;
      };
    },
    id: "1234"
  }));
  var customWrapper = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_["default"], {
    pageSizeChange: function pageSizeChange() {
      return function () {
        return true;
      };
    },
    id: "1234",
    label: "Foobar",
    currentOption: "150",
    options: [{
      label: '20',
      value: '20'
    }, {
      label: '50',
      value: '50'
    }, {
      label: '100',
      value: '100'
    }, {
      defaultChecked: true,
      label: '150',
      value: '150'
    }, {
      label: '200',
      value: '200'
    }, {
      label: '250',
      value: '250'
    }]
  }));
  it('renders correct initial results', function () {
    expect(defaultWrapper.find('.dc-page-size-options label').text()).toBe('Rows per page');
    expect(defaultWrapper.find('.dc-page-size-options .page-size-select').props().value).toBe(20);
    expect(defaultWrapper.find('option')).toHaveLength(3);
  });
  it('renders correct custom results', function () {
    expect(customWrapper.find('.dc-page-size-options label').text()).toBe('Foobar');
    expect(customWrapper.find('.page-size-select').props().value).toBe('150');
    expect(customWrapper.find('option')).toHaveLength(6);
  });
});