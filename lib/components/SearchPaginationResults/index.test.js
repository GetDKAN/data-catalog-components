"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<SearchPaginationResults />', function () {
  test('renders with default class and correct message', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      currentPage: 1,
      pageSize: 20,
      total: 100
    }));
    expect(_react2.screen.getByText(/datasets/).closest('div')).toHaveClass('dataset-results-count');
    expect(_react2.screen.getByText(/datasets/).closest('div')).toHaveTextContent('1-20 of 100 datasets');
  });
  test('renders with custom class and correct message', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      className: "custom",
      currentPage: 2,
      pageSize: 10,
      total: 500
    }));
    expect(_react2.screen.getByText(/datasets/).closest('div')).toHaveClass('custom');
    expect(_react2.screen.getByText(/datasets/).closest('div')).toHaveTextContent('11-20 of 500 datasets');
  });
});