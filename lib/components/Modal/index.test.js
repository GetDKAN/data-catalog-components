"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<Modal />', function () {
  test('renders a button by default', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      title: "DKAN",
      nodeId: "id"
    }, /*#__PURE__*/_react["default"].createElement("h1", null, "My Modal")));
    expect(_react2.screen.getByRole('button', 'Open Modal')).toBeInTheDocument();
  });
});