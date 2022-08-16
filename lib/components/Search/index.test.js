"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

describe('<Search />', function () {
  var base = {
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": /*#__PURE__*/_react["default"].createElement("span", null)
    }
  };
  test('no facets', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      location: {},
      searchEndpoint: "",
      defaultFacets: {
        "theme": _objectSpread({
          "label": "Topics",
          "field": "theme.0.title"
        }, base),
        "keyword": _objectSpread({
          "label": "Tags",
          "field": "keyword.*.title"
        }, base),
        "publisher__name": _objectSpread({
          "label": "Publishers",
          "field": "publisher__name"
        }, base)
      },
      sortOptions: [{
        field: 'modified',
        order: 'desc',
        label: 'Date'
      }, {
        field: 'title',
        order: 'asc',
        label: 'Alphabetical'
      }],
      path: "/components/search"
    }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", null, "search"))));
    expect(_react2.screen.queryByRole('listitem')).toBeNull();
    expect('hello').toBeTruthy();
  });
});