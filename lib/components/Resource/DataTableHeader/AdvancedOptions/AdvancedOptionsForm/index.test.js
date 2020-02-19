"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

var excludedColumns = {
  bar: true,
  getDKAN: false
};
var items = [{
  Header: 'foo',
  accessor: 'bar'
}, {
  Header: 'dkan',
  accessor: 'getDKAN'
}];
describe('<AdvancedOptionsForm />', function () {
  var identity = function identity(el) {
    return el;
  };

  var form = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
    columnOrder: [],
    columns: items,
    excludedColumns: {},
    reorderColumns: identity,
    toggleColumns: identity,
    itemClasses: {
      label: 'dkan',
      input: 'foobar'
    }
  }));
  var customForm = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
    columnOrder: [],
    columns: items,
    excludedColumns: excludedColumns,
    reorderColumns: identity,
    toggleColumns: identity,
    itemClasses: {
      label: 'dkan',
      input: 'foobar'
    }
  }));
  it('renders correct initial results', function () {
    expect(form.exists('div')).toBe(true);
    expect(form.exists('form')).toBe(true);
    expect(form.find('fieldset div')).toHaveLength(2);
    expect(form.find('fieldset div label').first().text()).toBe('foo');
    expect(form.state('excludedColumns')).toStrictEqual({
      bar: true,
      getDKAN: true
    });
    expect(form.state('columnOrder')).toBe(items);
  });
  it('intial excluded column state is set as each {column: true}', function () {
    expect(customForm.state('excludedColumns')).toStrictEqual({
      bar: true,
      getDKAN: false
    });
  });
  it('updates excluded column state when handleColumnChnage is called', function () {
    form.find('fieldset div input').first().simulate('change', {
      target: {
        value: 'bar'
      }
    });
    expect(form.state('excludedColumns')).toStrictEqual({
      bar: false,
      getDKAN: true
    });
  });
  it('updates column order when a column card is moved', function () {
    form.instance().moveCard(1, 0);
    expect(form.state('columnOrder')).toStrictEqual([{
      Header: 'dkan',
      accessor: 'getDKAN'
    }, {
      Header: 'foo',
      accessor: 'bar'
    }]);
  });
  it('without columns, no form is rendered', function () {
    form.setProps({
      columns: []
    });
    expect(form.exists('div')).toBe(true);
    expect(form.exists('form')).toBe(false);
  });
});