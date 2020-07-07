"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<Announcement />', function () {
  test('renders an error announcement', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      heading: "Errors",
      variation: "error"
    }, /*#__PURE__*/_react["default"].createElement("p", null, "500 Error")));
    expect(_react2.screen.getByText('500 Error')).toBeInTheDocument();
    expect(_react2.screen.getByRole('heading', /Errors/)).toBeInTheDocument();
    expect(_react2.screen.getByRole('heading', /Errors/).closest('div')).toHaveClass('dc-alert--error');
  });
});