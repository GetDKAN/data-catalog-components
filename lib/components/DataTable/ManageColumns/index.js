"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _reactDndHtml5Backend = _interopRequireDefault(require("react-dnd-html5-backend"));

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

var _Card = _interopRequireDefault(require("./Card"));

var _resource_defaults = require("../../../services/resource/resource_defaults");

var _Modal = _interopRequireDefault(require("../../Modal"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultCard = function defaultCard(card, index, moveCard) {
  return /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    key: card.id,
    index: index,
    id: card.id,
    column: card,
    moveCard: moveCard
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: card.id
  }, /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    id: card.id,
    type: "checkbox"
  }, card.getToggleHiddenProps())), ' ', card.Header));
};

var ManageColumns = function ManageColumns(_ref) {
  var renderCard = _ref.renderCard;

  var _useContext = (0, _react.useContext)(_resource_defaults.ResourceDispatch),
      reactTable = _useContext.reactTable;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      cards = _useState2[0],
      setCards = _useState2[1];

  _react["default"].useEffect(function () {
    if (reactTable.allColumns.length && cards === null) {
      setCards(reactTable.allColumns);
    }
  }, [reactTable.allColumns]);

  var moveCard = _react["default"].useCallback(function (dragIndex, hoverIndex) {
    var dragCard = reactTable.allColumns[dragIndex];
    setCards((0, _immutabilityHelper["default"])(cards, {
      $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
    }));
  }, [cards, reactTable.allColumns]);

  (0, _react.useEffect)(function () {
    if (cards) {
      reactTable.setColumnOrder(cards.map(function (d) {
        return d.id;
      }));
    }
  }, [cards]);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    title: "Manage Columns",
    nodeId: "___gatsby",
    openText: "Manage Columns"
  }, /*#__PURE__*/_react["default"].createElement(_reactDnd.DndProvider, {
    backend: _reactDndHtml5Backend["default"]
  }, reactTable.allColumns && reactTable.allColumns.map(function (column, i) {
    return renderCard(column, i, moveCard);
  }))));
};

ManageColumns.defaultProps = {
  renderCard: defaultCard
};
ManageColumns.propTypes = {
  renderCard: _propTypes["default"].func
};
var _default = ManageColumns; // Manage Columns - holds code
// -- Modal is launched from Manage Columns with cards
// -- -- Cards take children and Cards only adds the dnd feature

exports["default"] = _default;