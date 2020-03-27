"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

var dataPreview = {
  columnOrder: [],
  columns: [],
  currentPage: 0,
  density: 'density-3',
  excludedColumns: {},
  filters: [],
  pageSize: 20,
  rowsTotal: '100',
  sort: [],
  values: [{
    foo: 'bar'
  }]
};
var dataFunctions = {
  pageSizeChange: function pageSizeChange(elem) {
    return elem;
  },
  densityChange: function densityChange(elem) {
    return elem;
  },
  toggleColumns: function toggleColumns(elem) {
    return elem;
  },
  reorderColumns: function reorderColumns(elem) {
    return elem;
  }
};
describe('<DataTableHeader />', function () {
  var defaultWrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
    id: "foo",
    dataPreview: dataPreview,
    dataFunctions: dataFunctions,
    options: {
      pageSizer: {},
      pageResults: {},
      advancedOptions: {},
      tableDensity: {},
      fullScreen: {}
    }
  }));
  var customWrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
    options: {
      pageSizer: {
        hidePageSizer: true
      },
      pageResults: {
        hidePageResults: true
      },
      advancedOptions: {
        hideAdvancedOptions: true
      },
      tableDensity: {
        hideDisplayDensity: true
      },
      fullScreen: {
        hideFullScreen: true
      }
    },
    id: "foo",
    dataPreview: dataPreview,
    dataFunctions: dataFunctions
  }));
  it('renders correctly with default settings', function () {
    expect(defaultWrapper.exists('div.data-table-header')).toBe(true);
    expect(defaultWrapper.find('div.data-table-results').text()).toBe('1 - 20 of 100 rows');
    expect(defaultWrapper.exists('div.data-table-density')).toBe(true);
    expect(defaultWrapper.exists('div.page-size-options')).toBe(true);
    expect(defaultWrapper.exists('div.data-table-adv-options')).toBe(true);
  });
  it('renders no options', function () {
    expect(customWrapper.exists('div.data-table-header')).toBe(true);
    expect(customWrapper.exists('div.data-table-results')).toBe(false);
    expect(customWrapper.exists('div.data-table-density')).toBe(false);
    expect(customWrapper.exists('div.page-size-options')).toBe(false);
    expect(customWrapper.exists('div.data-table-adv-options')).toBe(false);
  });
});