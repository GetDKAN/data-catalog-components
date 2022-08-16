"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var DataTablePageResults = function DataTablePageResults(_ref) {
  var total = _ref.total,
      pageSize = _ref.pageSize,
      currentPage = _ref.currentPage,
      className = _ref.className,
      _ref$viewing = _ref.viewing,
      viewing = _ref$viewing === void 0 ? false : _ref$viewing;
  // Add one to offset the 0 array index.
  var page = currentPage + 1;
  var displayTotal = total;
  var currentLowestResult = total <= 0 ? 0 : 1 + (pageSize * page - pageSize);
  var currentHighestResult = pageSize * page;

  if (total < 0) {
    displayTotal = 0;
  }

  if (currentHighestResult > total) {
    currentHighestResult = displayTotal;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement("p", null, viewing && 'Viewing ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "low-result"
  }, currentLowestResult), ' ', "-", ' ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "high-result"
  }, currentHighestResult), ' ', "of", ' ', /*#__PURE__*/_react["default"].createElement("span", {
    className: "total"
  }, displayTotal), ' ', "rows"));
};

DataTablePageResults.defaultProps = {
  className: 'data-table-results'
};
DataTablePageResults.propTypes = {
  className: _propTypes["default"].string,
  total: _propTypes["default"].number.isRequired,
  pageSize: _propTypes["default"].number.isRequired,
  currentPage: _propTypes["default"].number.isRequired
};
var _default = DataTablePageResults;
exports["default"] = _default;