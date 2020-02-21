"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactDndTestUtils = require("react-dnd-test-utils");

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

var excludedColumns = {
  foo: true,
  dkan: true
};
var items = [{
  Header: 'foo',
  accessor: 'bar'
}, {
  Header: 'dkan',
  accessor: 'getDKAN'
}];
describe('<Draggable />', function () {
  var DraggableContent = (0, _reactDndTestUtils.wrapInTestContext)(_["default"]);

  var identity = function identity(el) {
    return el;
  };

  var drag = (0, _enzyme.mount)(_react["default"].createElement(DraggableContent, {
    onchange: identity,
    excludedColumns: excludedColumns,
    moveCard: identity,
    onDrop: identity,
    columns: items,
    itemClasses: {
      label: 'dkan',
      input: 'foobar'
    }
  }));
  it('renders correct initial results', function () {
    expect(drag.exists('fieldset')).toBe(true);
    expect(drag.find('fieldset div')).toHaveLength(2);
    expect(drag.find('fieldset div label').first().text()).toBe('foo');
  });
});