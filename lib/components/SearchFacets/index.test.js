"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<SearchFacets />', function () {
  test('renders a heading by default', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      facetsConfig: {
        topic: {}
      },
      facetsResults: [{
        name: 'react',
        total: 2,
        type: 'topic'
      }],
      dispatch: function dispatch() {
        return {};
      }
    }));
    expect(_react2.screen.getByRole('button', 'topic')).toBeInTheDocument();
  });
});