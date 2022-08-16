"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<SearchFacet />', function () {
  test('no facets', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      facetType: "topic",
      facets: [],
      dispatch: function dispatch() {
        return {};
      }
    }));
    expect(_react2.screen.getByRole('button', {
      name: 'topic'
    })).toBeInTheDocument();
  });
  test('no facets', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      label: "TOPICSS",
      facetType: "topic",
      facets: [],
      dispatch: function dispatch() {
        return {};
      }
    }));
    expect(_react2.screen.getByRole('button', {
      name: 'TOPICSS'
    })).toBeInTheDocument();
  });
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
    expect(_react2.screen.getByRole('button', {
      name: 'topic'
    })).toBeInTheDocument();
  });
  test('renders a selected button', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      facetType: "topic",
      facets: [{
        name: 'react',
        total: 2
      }, {
        name: 'vue',
        total: 1
      }],
      dispatch: function dispatch() {
        return {};
      },
      selected: ['react']
    })),
        debug = _render.debug;

    expect(_react2.screen.getByRole('button', {
      name: 'topic'
    })).toBeInTheDocument();
    expect(_react2.screen.getByLabelText('react (2)')).toBeChecked();
    expect(_react2.screen.getByLabelText('vue (1)')).not.toBeChecked();

    _userEvent["default"].click(_react2.screen.getByLabelText('react (2)'));

    _userEvent["default"].click(_react2.screen.getByLabelText('vue (1)'));

    expect(_react2.screen.getByLabelText('react (2)').checked).toBeTruthy();
    expect(_react2.screen.getByLabelText('vue (1)').checked).toBeFalsy();
  });
});