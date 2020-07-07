"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

var TestComponent = function TestComponent(_ref) {
  var title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: title
  }, "Test Component");
};

TestComponent.propTypes = {
  title: _propTypes["default"].string.isRequired
};
describe('<ApiDocs />', function () {
  test('renders error message when no api available', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], null));
    expect(_react2.screen.getByRole('heading', 'No API definition provided.')).toBeInTheDocument();
  });
});