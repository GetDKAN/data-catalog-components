"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('<SearchListItem />', function () {
  test('renders an item', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      item: {
        title: 'dkan',
        ref: '/dkan-item'
      }
    }));
    expect(_react2.screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
  test('Return uniquely formatted items', function () {
    var formats = [[0, {
      "identifier": 1,
      "format": "csv"
    }], [1, {
      "identifier": 2,
      "format": "csv"
    }], [2, {
      "identifier": 3,
      "format": "csv"
    }], [3, {
      "identifier": 4,
      "format": "rdf"
    }], [4, {
      "identifier": 5,
      "format": "xml"
    }]];
    expect((0, _index.getUniqueFormats)(formats)).toEqual([{
      "format": "csv",
      "identifier": 1
    }, {
      "format": "rdf",
      "identifier": 4
    }, {
      "format": "xml",
      "identifier": 5
    }]);
  });
  test('Return formats with count.', function () {
    var _ref;

    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      item: (_ref = {
        title: 'dkan',
        ref: '/dkan-item',
        format: [{
          "format": "csv",
          "identifier": 1
        }, {
          "format": "csv",
          "identifier": 2
        }, {
          "format": "csv",
          "identifier": 3
        }, {
          "format": "rdf",
          "identifier": 4
        }, {
          "format": "xml",
          "identifier": 5
        }],
        theme: ['category'],
        identifier: '123'
      }, (0, _defineProperty2["default"])(_ref, "ref", '/'), (0, _defineProperty2["default"])(_ref, "description", 'This is the description.'), (0, _defineProperty2["default"])(_ref, "publisher", 'Data Provider Name'), _ref)
    }));
    expect(_react2.screen.getByText('1x rdf')).toBeInTheDocument();
    expect(_react2.screen.getByText('1x xml')).toBeInTheDocument();
    expect(_react2.screen.getByText('3x csv')).toBeInTheDocument();
  });
});