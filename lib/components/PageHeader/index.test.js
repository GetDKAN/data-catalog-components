"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<SearchPaginationResults />', function () {
  test('renders with default class and correct message', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      title: "DKAN"
    }));
    expect(_react2.screen.getByRole('heading', 'DKAN')).toBeInTheDocument();
  });
});