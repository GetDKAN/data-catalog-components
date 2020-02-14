"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
var noValuesDataPreview = {
  columnOrder: [],
  columns: [],
  currentPage: 0,
  density: 'density-3',
  excludedColumns: {},
  filters: [],
  pageSize: 20,
  rowsTotal: '100',
  sort: [],
  values: []
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
  },
  activeColumns: function activeColumns(elem) {
    return elem;
  },
  filterChange: function filterChange(elem) {
    return elem;
  },
  pageChange: function pageChange(elem) {
    return elem;
  },
  sortChange: function sortChange(elem) {
    return elem;
  }
};
jest.mock('./withResource', function () {
  return function (component) {
    var myComponent = component;
    myComponent.defaultProps = _objectSpread({}, myComponent.defaultProps, {
      dataInfo: {
        columns: ['foo', 'bar'],
        data: {
          title: 'foo',
          downloadURL: 'http://test.com',
          format: 'csv'
        },
        datastore_statistics: {
          columns: 1,
          rows: 10
        },
        indentifier: 'dkan2'
      }
    });
    return myComponent;
  };
});
describe('<Resource />', function () {
  var defaultWrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
    dataFunctions: dataFunctions,
    dataPreview: dataPreview,
    datasetId: "dkan-id"
  }));
  it('renders correctly', function () {
    expect(defaultWrapper.exists('.dc-file-download')).toBe(true);
    expect(defaultWrapper.exists('.data-table-header')).toBe(true);
    expect(defaultWrapper.exists('div.ReactTable.-striped.-highlight')).toBe(true);
    expect(defaultWrapper.exists('div.table-one')).toBe(true);
  });
  it('renders without the info table', function () {
    defaultWrapper.setProps({
      infoTableOptions: {
        hideTable: true
      }
    });
    expect(defaultWrapper.exists('div.table-one')).toBe(false);
  });
  it('renders without the datatable header but default row statement', function () {
    defaultWrapper.setProps({
      headerOptions: {
        hideHeader: true
      }
    });
    expect(defaultWrapper.exists('.data-table-header')).toBe(false);
    expect(defaultWrapper.find('.row-results').text()).toBe('Rows: 100');
  });
  it('renders without file download if no data is given', function () {
    defaultWrapper.setProps({
      dataInfo: {}
    });
    expect(defaultWrapper.exists('.file-download')).toBe(false);
  });
});