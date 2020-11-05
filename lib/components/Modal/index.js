"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAriaModal = _interopRequireDefault(require("react-aria-modal"));

var _DataIcon = _interopRequireDefault(require("../DataIcon"));

var Modal = function Modal(_ref) {
  var nodeId = _ref.nodeId,
      children = _ref.children,
      closeText = _ref.closeText,
      closeIcon = _ref.closeIcon,
      openText = _ref.openText,
      title = _ref.title;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      modalOpen = _React$useState2[0],
      setModalOpen = _React$useState2[1];

  var getNode = function getNode() {
    return document.getElementById(nodeId);
  };

  var titleId = title.replace(/\s/g, '_').toLowerCase();
  var popup = modalOpen ? /*#__PURE__*/_react["default"].createElement(_reactAriaModal["default"], {
    titleText: title,
    onExit: function onExit() {
      return setModalOpen(false);
    },
    getApplicationNode: getNode,
    initialFocus: "#dc-modal-".concat(titleId, "-close")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-modal",
    id: "dc-modal-".concat(titleId)
  }, /*#__PURE__*/_react["default"].createElement("header", {
    className: "dc-modal-header"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    id: "dc-modal-".concat(titleId, "-header-title"),
    className: "dc-modal-header-title"
  }, title), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    id: "dc-modal-".concat(titleId, "-header-close"),
    onClick: function onClick() {
      return setModalOpen(false);
    },
    className: "dc-modal-close-button"
  }, closeIcon, closeText)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-modal-body"
  }, children), /*#__PURE__*/_react["default"].createElement("footer", {
    className: "dc-modal-footer"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    id: "dc-modal-".concat(titleId, "-close"),
    onClick: function onClick() {
      return setModalOpen(false);
    },
    className: "dc-modal-close-button btn"
  }, closeText)))) : false;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-modal-container"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    className: "dc-modal-open-button btn",
    id: "dc-modal-".concat(titleId, "-open"),
    type: "button",
    onClick: function onClick() {
      return setModalOpen(!modalOpen);
    }
  }, openText), popup);
};

Modal.defaultProps = {
  closeIcon: /*#__PURE__*/_react["default"].createElement(_DataIcon["default"], {
    icon: "times"
  }),
  closeText: 'Close Modal',
  openText: 'Open Modal'
};
Modal.propTypes = {
  closeIcon: _propTypes["default"].node,
  title: _propTypes["default"].string.isRequired,
  closeText: _propTypes["default"].string,
  openText: _propTypes["default"].string,
  nodeId: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node.isRequired
};
var _default = Modal;
exports["default"] = _default;