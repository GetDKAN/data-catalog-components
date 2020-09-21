"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var ItemTypes = {
  CARD: 'card'
};

var Card = function Card(_ref) {
  var id = _ref.id,
      index = _ref.index,
      moveCard = _ref.moveCard,
      children = _ref.children;

  var ref = _react["default"].useRef(null);

  var _useDrop = (0, _reactDnd.useDrop)({
    accept: ItemTypes.CARD,
    hover: function hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      var dragIndex = item.index;
      var hoverIndex = index; // Don't replace items with themselves

      if (dragIndex === hoverIndex) {
        return;
      } // Determine rectangle on screen


      var hoverBoundingRect = ref.current.getBoundingClientRect(); // Get vertical middle

      var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2; // Determine mouse position

      var clientOffset = monitor.getClientOffset(); // Get pixels to the top

      var hoverClientY = clientOffset.y - hoverBoundingRect.top; // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      } // Dragging upwards


      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      } // Time to actually perform the action


      moveCard(dragIndex, hoverIndex); // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.

      item.index = hoverIndex;
    }
  }),
      _useDrop2 = (0, _slicedToArray2["default"])(_useDrop, 2),
      drop = _useDrop2[1];

  var _useDrag = (0, _reactDnd.useDrag)({
    item: {
      type: ItemTypes.CARD,
      id: id,
      index: index
    },
    collect: function collect(monitor) {
      return {
        isDragging: monitor.isDragging()
      };
    }
  }),
      _useDrag2 = (0, _slicedToArray2["default"])(_useDrag, 2),
      isDragging = _useDrag2[0].isDragging,
      drag = _useDrag2[1];

  var opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return /*#__PURE__*/_react["default"].createElement("div", {
    key: id,
    ref: ref,
    style: {
      opacity: opacity
    }
  }, children);
};

Card.propTypes = {
  id: _propTypes["default"].string.isRequired,
  index: _propTypes["default"].number.isRequired,
  children: _propTypes["default"].node.isRequired,
  moveCard: _propTypes["default"].func.isRequired
};
var _default = Card;
exports["default"] = _default;