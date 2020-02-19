"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

describe('<DataTable />', function () {
  var data = [{
    column1: 'alpha',
    column2: 'beta',
    column3: 'gamma'
  }, {
    column1: 'alpha',
    column2: 'beta',
    column3: 'gamma'
  }];
  var columns = [{
    Header: 'column1',
    accessor: 'column1'
  }, {
    Header: 'column2',
    accessor: 'column2'
  }, {
    Header: 'column3',
    accessor: 'column3'
  }];
  var defaultWrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
    data: data,
    loading: false,
    columns: columns,
    pageSize: 1,
    pages: 1,
    sortedChange: function sortedChange() {
      return true;
    },
    pageChange: function pageChange() {
      return true;
    },
    filterChange: function filterChange() {
      return true;
    },
    index: 1
  }));
  it('renders correctly', function () {
    expect(defaultWrapper.exists('div')).toBe(true);
  });
  it('renders with stripe and highlight classes', function () {
    expect(defaultWrapper.exists('div.ReactTable.-striped.-highlight')).toBe(true);
  });
  it('renders with density classes', function () {
    defaultWrapper.setProps({
      density: 'density-3'
    });
    expect(defaultWrapper.exists('div.ReactTable.density-3')).toBe(true);
  });
});