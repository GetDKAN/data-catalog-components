"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<Header />', function () {
  test('renders a logo by default', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], null));
    expect(_react2.screen.getByAltText('Open Data Catalog')).toBeInTheDocument();
  });
});