"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _DraggableItem = _interopRequireDefault(require("../DraggableItem"));

var DraggableArea = function DraggableArea(_ref) {
  var onchange = _ref.onchange,
      items = _ref.items,
      excludedColumns = _ref.excludedColumns,
      connectDropTarget = _ref.connectDropTarget,
      moveCard = _ref.moveCard,
      itemClasses = _ref.itemClasses;
  return connectDropTarget(_react["default"].createElement("fieldset", {
    className: "target"
  }, items.map(function (item, index) {
    return _react["default"].createElement(_DraggableItem["default"], {
      moveCard: moveCard,
      key: item.accessor,
      index: index,
      item: item,
      onchange: onchange,
      isVisible: !!excludedColumns[item.accessor],
      labelClass: itemClasses.label,
      inputClass: itemClasses.input
    });
  })));
};

var spec = {
  drop: function drop(props, monitor) {
    var item = monitor.getItem();
    props.onDrop(item);
    return item;
  }
};

var collect = function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
};

DraggableArea.propTypes = {
  onchange: _propTypes["default"].func.isRequired,
  moveCard: _propTypes["default"].func.isRequired,
  excludedColumns: _propTypes["default"].objectOf(_propTypes["default"].bool).isRequired,
  items: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  connectDropTarget: _propTypes["default"].func.isRequired,
  itemClasses: _propTypes["default"].shape({
    input: _propTypes["default"].string,
    label: _propTypes["default"].string
  }).isRequired
};

var _default = (0, _reactDnd.DropTarget)('form-elements', spec, collect)(DraggableArea);

exports["default"] = _default;