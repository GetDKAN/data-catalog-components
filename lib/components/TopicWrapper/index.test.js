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
describe('<TopicWrapper />', function () {
  test('renders with component in link', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      topic: "dkan",
      component: TestComponent
    }));
    expect(_react2.screen.getByRole('link')).toHaveClass('dc-topic-wrapper');
    expect(_react2.screen.getByRole('link')).toContainHTML('<div class="dkan">Test Component</div>dkan');
    expect(_react2.screen.getByText('dkan'));
    expect(_react2.screen.getByRole('link')).toHaveAttribute('href', '/search?theme=dkan');
  });
});