"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<IconListItem />', function () {
  test('renders a title', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      link: "http://demo.getdkan.com",
      title: "dkan"
    }));
    expect(_react2.screen.getByText('dkan')).toBeInTheDocument();
  });
});