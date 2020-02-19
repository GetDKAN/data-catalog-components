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
describe('<AdvancedOptions />', function () {
  var identity = function identity(el) {
    return el;
  };

  var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_["default"], {
    columns: items,
    excludedColumns: excludedColumns,
    columnOrder: items,
    toggleColumns: identity,
    reorderColumns: identity
  }));
  it('renders correctly without modal open', function () {
    expect(wrapper.exists('.data-table-adv-options')).toBe(true);
    expect(wrapper.exists('.data-table-adv-modal')).toBe(false);
  });
  it('opens and closes the modal window', function () {
    wrapper.find('.data-table-adv-options button').simulate('click');
    expect(wrapper.exists('.data-table-adv-modal')).toBe(true);
    wrapper.find('.advanced-options-modal-close').simulate('click');
    expect(wrapper.exists('.data-table-adv-modal')).toBe(false);
  });
});