"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("@testing-library/jest-dom/extend-expect");

var _search_reducer = _interopRequireDefault(require("./search_reducer"));

describe('search_reducer', function () {
  test('SET_FACETS_DATA - Empty action', function () {
    var state = {};
    var action = {
      type: 'SET_FACETS_DATA'
    };
    var newState = (0, _search_reducer["default"])(state, action);
    expect(newState).toStrictEqual({});
  });
  test('SET_FACETS_DATA - action.data.facetResults must be an array', function () {
    var state = {};
    var action = {
      type: 'SET_FACETS_DATA',
      data: {}
    };
    expect((0, _search_reducer["default"])(state, action)).toStrictEqual({});
    var action2 = {
      type: 'SET_FACETS_DATA',
      data: {
        facetsResults: {}
      }
    };
    expect((0, _search_reducer["default"])(state, action2)).toStrictEqual({});
    var action3 = {
      type: 'SET_FACETS_DATA',
      data: {
        facetsResults: []
      }
    };
    expect((0, _search_reducer["default"])(state, action3)).toStrictEqual({
      facetsResults: []
    });
  });
  test('SET_FACETS_DATA - Update existing facets and add new facets', function () {
    var state = {
      facetsResults: [{
        type: 'keyword',
        name: 'goodbye',
        total: 0
      }, {
        type: 'keyword',
        name: 'hello',
        total: 0
      }]
    };
    var action = {
      type: 'SET_FACETS_DATA',
      data: {
        facetsResults: [{
          type: 'keyword',
          name: 'hello',
          total: 1
        }, {
          type: 'keyword',
          name: 'hola',
          total: 2
        }]
      }
    };
    expect((0, _search_reducer["default"])(state, action)).toStrictEqual({
      facetsResults: [{
        type: 'keyword',
        name: 'goodbye',
        total: 0
      }, {
        type: 'keyword',
        name: 'hello',
        total: 1
      }, {
        type: 'keyword',
        name: 'hola',
        total: 2
      }]
    });
  });
});