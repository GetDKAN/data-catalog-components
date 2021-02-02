"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<NavBar />', function () {
  test('renders with a button and nav item', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      navItems: ['text']
    }));
    expect(_react2.screen.getByRole('button', 'Menu')).toBeInTheDocument();
    expect(_react2.screen.getByRole('listitem', 'text')).toBeInTheDocument();
  });
});