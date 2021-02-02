"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<Text />', function () {
  test('renders with children ignoring of value', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      label: "DKAN",
      wrapper: {
        tag: 'h1',
        classes: 'my-class'
      },
      value: "my value"
    }, "my text"));
    expect(_react2.screen.getByRole('heading', 'DKAN: my text')).toHaveClass('my-class');
  });
  test('renders with children ignoring wrapper', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      label: "DKAN",
      wrapper: {
        classes: 'my-class'
      }
    }, /*#__PURE__*/_react["default"].createElement("h1", {
      className: "custom"
    }, "my custom html")));
    expect(_react2.screen.getByText('my custom html')).toHaveClass('custom');
  });
  test('renders with children', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      label: "DKAN",
      wrapper: {
        tag: 'h1',
        classes: 'my-class'
      }
    }, "my text"));
    expect(_react2.screen.getByRole('heading', 'DKAN: my text')).toHaveClass('my-class');
  });
  test('renders with value', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      label: "DKAN",
      wrapper: {
        classes: 'my-class'
      },
      value: "<h1>my value without tag</h1>"
    }));
    expect(_react2.screen.getByRole('heading', 'DKAN: my value without tag')).not.toHaveClass('my-class');
  });
  test('renders with value', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      label: "DKAN",
      wrapper: {
        tag: 'h1',
        classes: 'my-class'
      },
      value: "my value"
    }));
    expect(_react2.screen.getByRole('heading', 'DKAN: my value')).toHaveClass('my-class');
  });
});