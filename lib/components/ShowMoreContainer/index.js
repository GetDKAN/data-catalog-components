"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ShowMoreContainer;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ShowMoreContainer(_ref) {
  var container = _ref.container,
      items = _ref.items,
      limit = _ref.limit,
      btnOpenText = _ref.btnOpenText,
      btnClosedText = _ref.btnClosedText,
      containerClasses = _ref.containerClasses,
      wrapperClasses = _ref.wrapperClasses,
      onMore = _ref.onMore,
      onLess = _ref.onLess;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showMore = _useState2[0],
      toggleShowMore = _useState2[1];

  var showMoreButton = /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "showmore-button",
    onClick: function onClick() {
      if (onLess) {
        onLess();
      }

      toggleShowMore(!showMore);
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
    showMoreButton = /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      className: "showmore-button",
      onClick: function onClick() {
        if (onMore) {
          onMore();
        }

        toggleShowMore(!showMore);
      }
    }, btnText);
  }

  if (totalItems - limit <= 0) {
    showMoreButton = null;
  }

  switch (container) {
    case 'ol':
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: wrapperClasses
      }, /*#__PURE__*/_react["default"].createElement("ol", {
        className: containerClasses
      }, visibleItems), showMoreButton);

    case 'ul':
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: wrapperClasses
      }, /*#__PURE__*/_react["default"].createElement("ul", {
        className: containerClasses
      }, visibleItems), showMoreButton);

    case 'div':
    default:
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: wrapperClasses
      }, /*#__PURE__*/_react["default"].createElement("div", {
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