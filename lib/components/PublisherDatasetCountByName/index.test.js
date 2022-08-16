"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<PublisherDatasetCountByName />', function () {
  test('If no dataset renders, just a link to the page.', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      name: "Non matching organization."
    }));
    expect(_react2.screen.getByText('datasets')).toBeInTheDocument();
  });
  test('If there is a publisher with datasets render the dataset count.', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      name: "State Economic Council",
      datasetCount: "3"
    }));
    expect(_react2.screen.getByText('3 datasets')).toBeInTheDocument();
  });
  test('Dataset count with just one item.', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      name: "State Economic Council",
      datasetCount: "1"
    }));
  });
});