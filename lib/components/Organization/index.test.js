"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireWildcard(require("./index"));

var _PublisherDatasetCountByName = _interopRequireDefault(require("../PublisherDatasetCountByName"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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