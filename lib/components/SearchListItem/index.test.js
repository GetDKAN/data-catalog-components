"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<SearchListItem />', function () {
  test('renders an item', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      item: {
        title: 'dkan',
        ref: '/dkan-item'
      }
    }));
    expect(_react2.screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});