"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<SearchFacet />', function () {
  test('renders a button', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      facetType: "topic",
      facets: [{
        name: 'react',
        total: 2
      }],
      dispatch: function dispatch() {
        return {};
      }
    }));
    expect(_react2.screen.getByRole('button', 'topic')).toBeInTheDocument();
  });
});