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
  test('renders mulitple links', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      tags: [{
        data: 'dkan1',
        identifier: 1
      }, {
        data: 'dkan2',
        identifier: 2
      }, {
        data: 'open data',
        identifier: 3
      }],
      label: "dkan",
      path: "/my-path/"
    }));
    expect(_react2.screen.getByRole('heading', 'dkan')).toBeTruthy();
    expect(_react2.screen.getAllByRole('link')).toHaveLength(3);
    expect(_react2.screen.getByRole('link', {
      name: 'dkan1'
    })).toHaveAttribute('href', '/my-path/dkan1');
    expect(_react2.screen.getByRole('link', {
      name: 'dkan2'
    })).toHaveAttribute('href', '/my-path/dkan2');
    expect(_react2.screen.getByRole('link', {
      name: 'open data'
    })).toHaveAttribute('href', '/my-path/open%20data');
  });
});