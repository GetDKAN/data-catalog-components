"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var SearchPaginationResults = function SearchPaginationResults(_ref) {
  var className = _ref.className,
      currentPage = _ref.currentPage,
      pageSize = _ref.pageSize,
      total = _ref.total;
  var startingNumber = total > 0 ? 1 : 0;
  var currentLowestResult = startingNumber + (pageSize * currentPage - pageSize);
  var currentHighestResult = pageSize * currentPage;

  if (currentHighestResult > total) {
    currentHighestResult = total;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, currentLowestResult, "-", currentHighestResult, ' ', "out of", ' ', total, ' ', "datasets");
};

SearchPaginationResults.defaultProps = {
  className: 'dataset-results-count'
};
SearchPaginationResults.propTypes = {
  className: _propTypes["default"].string,
  currentPage: _propTypes["default"].number.isRequired,
  pageSize: _propTypes["default"].number.isRequired,
  total: _propTypes["default"].number.isRequired
};
var _default = SearchPaginationResults;
exports["default"] = _default;