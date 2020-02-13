"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ShowMoreContainer;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ShowMoreContainer(_ref) {
  var container = _ref.container,
      items = _ref.items,
      limit = _ref.limit,
      btnOpenText = _ref.btnOpenText,
      btnClosedText = _ref.btnClosedText,
      containerClasses = _ref.containerClasses,
      wrapperClasses = _ref.wrapperClasses;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showMore = _useState2[0],
      toggleShowMore = _useState2[1];

  var showMoreButton = _react["default"].createElement("button", {
    type: "button",
    className: "showmore-button",
    onClick: function onClick() {
      return toggleShowMore(!showMore);
    }
  }, btnOpenText || 'Show less');

  var totalItems = items.length;
  var visibleItems = items.filter(function (item, index) {
    if (!showMore && index >= limit) {
      return false;
    }

    return item;
  });
  var btnText = btnClosedText || "Show ".concat(totalItems - visibleItems.length, " more");

  if (!showMore) {
    showMoreButton = _react["default"].createElement("button", {
      type: "button",
      className: "showmore-button",
      onClick: function onClick() {
        return toggleShowMore(!showMore);
      }
    }, btnText);
  }

  if (totalItems - limit <= 0) {
    showMoreButton = null;
  }

  switch (container) {
    case 'ol':
      return _react["default"].createElement("div", {
        className: wrapperClasses
      }, _react["default"].createElement("ol", {
        className: containerClasses
      }, visibleItems), showMoreButton);

    case 'ul':
      return _react["default"].createElement("div", {
        className: wrapperClasses
      }, _react["default"].createElement("ul", {
        className: containerClasses
      }, visibleItems), showMoreButton);

    case 'div':
    default:
      return _react["default"].createElement("div", {
        className: wrapperClasses
      }, _react["default"].createElement("div", {
        className: containerClasses
      }, visibleItems), showMoreButton);
  }
}

ShowMoreContainer.defaultProps = {
  btnOpenText: '',
  btnClosedText: '',
  limit: 10,
  container: 'div',
  containerClasses: 'show-more-container',
  wrapperClasses: 'show-more-wrapper'
};
ShowMoreContainer.propTypes = {
  container: _propTypes["default"].oneOf(['div', 'ol', 'ul']),
  items: _propTypes["default"].arrayOf(_propTypes["default"].node).isRequired,
  limit: _propTypes["default"].number,
  btnOpenText: _propTypes["default"].string,
  btnClosedText: _propTypes["default"].string,
  containerClasses: _propTypes["default"].string,
  wrapperClasses: _propTypes["default"].string
};