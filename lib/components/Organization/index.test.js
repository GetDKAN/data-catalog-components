"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireWildcard(require("./index"));

var _PublisherDatasetCountByName = _interopRequireDefault(require("../PublisherDatasetCountByName"));

var data = [{
  "publisher": {
    "@type": "org:Organization",
    "name": "State Economic Council"
  }
}, {
  "publisher": {
    "@type": "org:Organization",
    "name": "State Economic Council"
  }
}];
describe('<Organization />', function () {
  test('renders a heading', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      name: "DKAN"
    }));
    expect(_react2.screen.getByRole('heading', 'DKAN')).toBeInTheDocument();
  });
  test('Has a publisher name.', function () {
    expect(data[0]['publisher']['name']).toEqual("State Economic Council");
  });
  test('renders with a dataset link with no count', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      name: "DKAN"
    }));
    expect(_react2.screen.getByText('datasets')).toBeInTheDocument();
  });
  test('Calculates a count from data', function () {
    expect((0, _index.countDatasetsByName)("State Economic Council", data)).toEqual(2);
  });
});