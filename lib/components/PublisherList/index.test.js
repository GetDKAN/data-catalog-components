"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<PublisherList />', function () {
  test('renders list of orgs with custom class', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      items: [{
        name: 'dkan',
        identifier: 1,
        imageUrl: '',
        description: 'react'
      }, {
        name: 'open',
        identifier: 2,
        imageUrl: '',
        description: 'jest'
      }, {
        name: 'data',
        identifier: 3,
        imageUrl: '',
        description: 'testing'
      }, {
        name: 'foss',
        identifier: 4,
        imageUrl: '',
        description: 'css'
      }],
      className: "custom"
    }));
    expect(_react2.screen.getByRole('list')).toHaveClass('custom'); // TODO: Fix so divs aren't returned in a list
    // expect(screen.getByRole('listitem')).toHaveLength(4);
  });
});