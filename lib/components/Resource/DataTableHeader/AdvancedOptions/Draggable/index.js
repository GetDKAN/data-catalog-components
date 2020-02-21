"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _reactDndMultiBackend = _interopRequireDefault(require("react-dnd-multi-backend"));

var _HTML5toTouch = _interopRequireDefault(require("react-dnd-multi-backend/lib/HTML5toTouch"));

var _DraggableArea = _interopRequireDefault(require("../DraggableArea"));

var Draggable = function Draggable(_ref) {
  var onchange = _ref.onchange,
      excludedColumns = _ref.excludedColumns,
      columns = _ref.columns,
      moveCard = _ref.moveCard,
      itemClasses = _ref.itemClasses;
  return _react["default"].createElement(_reactDnd.DndProvider, {
    backend: _reactDndMultiBackend["default"],
    options: _HTML5toTouch["default"]
  }, _react["default"].createElement(_DraggableArea["default"], {
    onchange: onchange,
    excludedColumns: excludedColumns,
    items: columns,
    moveCard: moveCard,
    itemClasses: itemClasses
  }));
};

Draggable.propTypes = {
  onchange: _propTypes["default"].func.isRequired,
  moveCard: _propTypes["default"].func.isRequired,
  excludedColumns: _propTypes["default"].objectOf(_propTypes["default"].bool).isRequired,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  itemClasses: _propTypes["default"].objectOf(_propTypes["default"].string).isRequired
};
var _default = Draggable;
exports["default"] = _default;