"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DataIcon = _interopRequireDefault(require("../../DataIcon"));

var DataTableDensity = function DataTableDensity(_ref) {
  var items = _ref.items,
      densityChange = _ref.densityChange,
      className = _ref.className,
      screenReaderClass = _ref.screenReaderClass,
      title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "density-buttons-title"
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "density-buttons"
  }, items.map(function (item) {
    var srClass = screenReaderClass;

    if (!item.icon) {
      srClass = '';
    }

    return /*#__PURE__*/_react["default"].createElement("button", {
      type: "button",
      key: item.text,
      onClick: function onClick() {
        return densityChange(item.value);
      },
      title: item.text
    }, item.icon && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, item.icon), /*#__PURE__*/_react["default"].createElement("span", {
      className: srClass
    }, item.text));
  })));
};

DataTableDensity.defaultProps = {
  items: [{
    icon: /*#__PURE__*/_react["default"].createElement(_DataIcon["default"], {
      name: "density-1",
      height: 20,
      width: 20,
      icon: 'density-1',
      fill: "#666666"
    }),
    text: 'expanded'
  }, {
    icon: /*#__PURE__*/_react["default"].createElement(_DataIcon["default"], {
      name: "density-2",
      height: 20,
      width: 20,
      icon: 'density-2',
      fill: "#666666"
    }),
    text: 'normal'
  }, {
    icon: /*#__PURE__*/_react["default"].createElement(_DataIcon["default"], {
      name: "density-3",
      height: 20,
      width: 20,
      icon: 'density-3',
      fill: "#666666"
    }),
    text: 'tight'
  }],
  className: 'data-table-density',
  screenReaderClass: 'sr-only sr-only-focusable',
  title: 'Display Density'
};
DataTableDensity.propTypes = {
  densityChange: _propTypes["default"].func.isRequired,
  screenReaderClass: _propTypes["default"].string,
  className: _propTypes["default"].string,
  items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    icon: _propTypes["default"].node,
    text: _propTypes["default"].string
  })),
  title: _propTypes["default"].string
};
var _default = DataTableDensity;
exports["default"] = _default;