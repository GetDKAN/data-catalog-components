"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

var _BasicBlock = _interopRequireDefault(require("./BasicBlock"));

var _StatBlock = _interopRequireDefault(require("./StatBlock"));

var _StepsBlock = _interopRequireDefault(require("./StepsBlock"));

describe('<Blocks />', function () {
  test('renders a heading by default', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      paneTitle: "Welcome to DKAN",
      items: [{
        title: 'Welcome to DKAN',
        ref: '/dkan'
      }]
    }));
    expect(_react2.screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});
describe('<BasicBlock />', function () {
  test('renders a heading by default', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_BasicBlock["default"], {
      content: {
        title: 'Welcome to DKAN',
        ref: '/dkan'
      }
    }));
    expect(_react2.screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});
describe('<StatBlock />', function () {
  test('renders a heading by default', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_StatBlock["default"], {
      content: {
        title: 'Welcome to DKAN',
        ref: '/dkan'
      }
    }));
    expect(_react2.screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});
describe('<StepsBlock />', function () {
  test('renders a heading by default', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_StepsBlock["default"], {
      content: {
        title: 'Welcome to DKAN',
        ref: '/dkan'
      }
    }));
    expect(_react2.screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});