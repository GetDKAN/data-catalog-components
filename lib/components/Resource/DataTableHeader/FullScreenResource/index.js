"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAriaModal = _interopRequireDefault(require("react-aria-modal"));

var _ModalWrapper = _interopRequireDefault(require("./ModalWrapper"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var FullScreenResource = function FullScreenResource(_ref) {
  var modalOpenBtnText = _ref.modalOpenBtnText,
      className = _ref.className,
      headerClass = _ref.headerClass,
      modalClass = _ref.modalClass,
      closeModalBtnText = _ref.closeModalBtnText,
      closeModalClasses = _ref.closeModalClasses,
      titleText = _ref.titleText,
      appNode = _ref.appNode,
      children = _ref.children,
      includeDefaultStyles = _ref.includeDefaultStyles,
      underlayClass = _ref.underlayClass;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      modalOpen = _useState2[0],
      toggleModal = _useState2[1];

  return _react["default"].createElement("div", {
    className: "data-table-fullscreen"
  }, !modalOpen && _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return toggleModal(!modalOpen);
    }
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "expand-alt",
    "aria-hidden": "true",
    title: "Full Screen"
  }), _react["default"].createElement("span", {
    className: "sr-only"
  }, modalOpenBtnText)), modalOpen && _react["default"].createElement(_reactAriaModal["default"], {
    onExit: function onExit() {
      return toggleModal(!modalOpen);
    },
    getApplicationNode: function getApplicationNode() {
      return document.getElementById(appNode);
    },
    alert: true,
    focusDialog: true,
    titleText: titleText,
    underlayClickExits: false,
    dialogId: "react-aria-fullscreen-modal",
    verticallyCenter: true,
    dialogClass: className,
    includeDefaultStyles: includeDefaultStyles,
    underlayClass: underlayClass
  }, _react["default"].createElement(_ModalWrapper["default"], {
    className: modalClass,
    role: "document"
  }, _react["default"].createElement("header", {
    className: headerClass
  }, _react["default"].createElement("h1", null, titleText), _react["default"].createElement("button", {
    type: "button",
    className: closeModalClasses,
    onClick: function onClick() {
      return toggleModal(!modalOpen);
    }
  }, _react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: "times",
    "aria-hidden": "true",
    title: "Close"
  }), _react["default"].createElement("span", {
    className: "sr-only"
  }, closeModalBtnText))), _react["default"].createElement("div", {
    className: "data-table-fullscreen-content",
    style: {
      outline: 0
    }
  }, children))));
};

FullScreenResource.defaultProps = {
  modalOpenBtnText: 'Full Screen',
  className: 'data-table-fullscreen',
  modalClass: 'data-table-fullscreen-modal',
  closeModalBtnText: 'Close',
  closeModalClasses: 'fullscreen-modal-close',
  titleText: 'Dataset explorer',
  appNode: '___gatsby',
  includeDefaultStyles: true,
  underlayClass: 'modal-underlay',
  headerClass: 'modal-header'
};
FullScreenResource.propTypes = {
  modalOpenBtnText: _propTypes["default"].string,
  className: _propTypes["default"].string,
  closeModalBtnText: _propTypes["default"].node,
  closeModalClasses: _propTypes["default"].string,
  titleText: _propTypes["default"].string,
  appNode: _propTypes["default"].string,
  modalClass: _propTypes["default"].string,
  underlayClass: _propTypes["default"].string,
  includeDefaultStyles: _propTypes["default"].bool,
  headerClass: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired
};
var _default = FullScreenResource;
exports["default"] = _default;