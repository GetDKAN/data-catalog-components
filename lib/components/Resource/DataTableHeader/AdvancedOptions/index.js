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

var _AdvancedOptionsForm = _interopRequireDefault(require("./AdvancedOptionsForm"));

var _ModalWrapper = _interopRequireDefault(require("./ModalWrapper"));

var AdvancedOptions = function AdvancedOptions(_ref) {
  var underlayClass = _ref.underlayClass,
      excludedColumns = _ref.excludedColumns,
      columnOrder = _ref.columnOrder,
      columns = _ref.columns,
      reorderColumns = _ref.reorderColumns,
      toggleColumns = _ref.toggleColumns,
      modalOpenBtnText = _ref.modalOpenBtnText,
      className = _ref.className,
      modalClass = _ref.modalClass,
      closeModalBtnText = _ref.closeModalBtnText,
      closeModalClasses = _ref.closeModalClasses,
      titleText = _ref.titleText,
      itemClasses = _ref.itemClasses,
      appNode = _ref.appNode,
      headerClass = _ref.headerClass,
      includeDefaultStyles = _ref.includeDefaultStyles,
      showAction = _ref.showAction,
      actionText = _ref.actionText,
      actionsClassNames = _ref.actionsClassNames,
      actionButtonClassNames = _ref.actionButtonClassNames;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      modalOpen = _useState2[0],
      toggleModal = _useState2[1];

  return _react["default"].createElement("div", {
    className: "data-table-adv-options"
  }, !modalOpen && _react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return toggleModal(!modalOpen);
    }
  }, modalOpenBtnText), modalOpen && _react["default"].createElement(_reactAriaModal["default"], {
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
  }, closeModalBtnText)), _react["default"].createElement("div", {
    className: "data-table-adv-options-content",
    style: {
      outline: 0
    }
  }, _react["default"].createElement("div", {
    className: "column-labels"
  }, _react["default"].createElement("span", null, "Display column"), _react["default"].createElement("span", null, "Reorder")), _react["default"].createElement(_AdvancedOptionsForm["default"], {
    columns: columns,
    excludedColumns: excludedColumns,
    columnOrder: columnOrder,
    toggleColumns: toggleColumns,
    reorderColumns: reorderColumns,
    itemClasses: itemClasses
  })), showAction && _react["default"].createElement("aside", {
    className: actionsClassNames
  }, _react["default"].createElement("button", {
    type: "button",
    className: actionButtonClassNames,
    key: "primary",
    onClick: function onClick() {
      return toggleModal(!modalOpen);
    }
  }, actionText)))));
};

AdvancedOptions.defaultProps = {
  modalOpenBtnText: 'Manage Columns',
  className: 'aria-modal',
  modalClass: 'data-table-adv-modal',
  closeModalBtnText: 'Close',
  closeModalClasses: 'advanced-options-modal-close',
  titleText: 'Manage Columns',
  appNode: '___gatsby',
  itemClasses: {
    input: 'draggable-item-label',
    label: 'draggable-item-input'
  },
  includeDefaultStyles: true,
  actionText: 'Update Columns',
  actionsClassNames: 'data-table-adv-actions',
  showAction: true,
  actionButtonClassNames: 'action-button',
  underlayClass: 'modal-underlay',
  headerClass: 'modal-header'
};
AdvancedOptions.propTypes = {
  underlayClass: _propTypes["default"].string,
  modalOpenBtnText: _propTypes["default"].string,
  className: _propTypes["default"].string,
  closeModalBtnText: _propTypes["default"].string,
  closeModalClasses: _propTypes["default"].string,
  titleText: _propTypes["default"].string,
  appNode: _propTypes["default"].string,
  excludedColumns: _propTypes["default"].objectOf(_propTypes["default"].bool).isRequired,
  columnOrder: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  columns: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  reorderColumns: _propTypes["default"].func.isRequired,
  toggleColumns: _propTypes["default"].func.isRequired,
  modalClass: _propTypes["default"].string,
  itemClasses: _propTypes["default"].shape({
    input: _propTypes["default"].string,
    label: _propTypes["default"].string
  }),
  actionButtonClassNames: _propTypes["default"].string,
  showAction: _propTypes["default"].bool,
  actionText: _propTypes["default"].node,
  actionsClassNames: _propTypes["default"].string,
  includeDefaultStyles: _propTypes["default"].bool,
  headerClass: _propTypes["default"].string
};
var _default = AdvancedOptions;
exports["default"] = _default;