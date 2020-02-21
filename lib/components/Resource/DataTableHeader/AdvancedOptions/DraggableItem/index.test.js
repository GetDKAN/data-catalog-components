"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

describe('<DraggableItem />', function () {
  var DefaultWrapper = _["default"].DecoratedComponent;

  var identity = function identity(el) {
    return el;
  };

  var item = (0, _enzyme.shallow)(_react["default"].createElement(DefaultWrapper, {
    onchange: function onchange() {
      return function () {
        return true;
      };
    },
    item: {
      Header: 'Foo',
      accessor: 'bar'
    },
    isVisible: true,
    isOver: false,
    isDragging: false,
    connectDragPreview: function connectDragPreview() {
      return function () {
        return true;
      };
    },
    connectDragSource: identity,
    connectDropTarget: identity,
    labelClass: "label",
    inputClass: "input"
  }));
  it('renders correct initial results', function () {
    expect(item.exists('div')).toBe(true);
    expect(item.find('label').text()).toBe('Foo');
    expect(item.find('input').props().value).toBe('bar');
    expect(item.find('div').props().style.boxShadow).toBe('none');
    expect(item.find('div').props().style.background).toBe('transparent');
    expect(item.find('div').props().style.cursor).toBe('grab');
  });
  it('renders with new background shadow and color when hovered over', function () {
    item.setProps({
      isOver: true
    });
    expect(item.find('div').props().style.background).toBe('rgba(0,0,0,0.3)');
  });
  it('renders with new background shadow and color when hovered over', function () {
    item.setProps({
      isDragging: true
    });
    expect(item.find('div').props().style.boxShadow).toBe('2px 2px 2px rgba(0,0,0,.5)');
    expect(item.find('div').props().style.cursor).toBe('grabbing');
  });
});