"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getData;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _axios = _interopRequireDefault(require("axios"));

var _queryString = _interopRequireDefault(require("query-string"));

function getSortParams(searchState, sortOptions) {
  var returnedSort = sortOptions.filter(function (option) {
    return option.field === searchState.sort || option.label.toLowerCase() === searchState.sort;
  });

  if (!returnedSort.length) {
    returnedSort.push(sortOptions[0]);
  }

  return returnedSort;
}

function getApiSearchParams(searchState, defaultFacets, sortOptions) {
  var state = {};
  state = Object.assign(state, searchState);
  var facetKeys = Object.keys(defaultFacets);
  var urlOptions = ['fulltext', 'sort', 'sort-order', 'page-size', 'page'].concat((0, _toConsumableArray2["default"])(facetKeys)); // Figure out sort options

  var currentSort = getSortParams(state, sortOptions);
  state.sort = currentSort[0].field; // set search params using sort and searchState

  var apiSearchParams = {};
  urlOptions.forEach(function (param) {
    apiSearchParams[param] = state[param];
  }); // Set selected facets for search

  if (state.selectedFacets.length) {
    facetKeys.map(function (key) {
      var searchFacets = state.selectedFacets.filter(function (facet) {
        return facet[0].toLowerCase() === key.toLowerCase();
      });
      var facetText = searchFacets.map(function (facet) {
        return facet[1];
      });

      if (facetText.length) {
        apiSearchParams[key.toLowerCase()] = facetText;
      }

      return false;
    });
  }

  return _queryString["default"].stringify(apiSearchParams, {
    arrayFormat: 'comma'
  });
}

function getData(_x, _x2, _x3, _x4, _x5, _x6) {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(searchEndpoint, normalize, searchState, defaultFacets, sortOptions, dispatch) {
    var facets,
        apiParams,
        type,
        data,
        results,
        _results,
        _args = arguments;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            facets = _args.length > 6 && _args[6] !== undefined ? _args[6] : false;
            // Transition to loading state.
            dispatch({
              type: 'FETCH_DATA'
            });
            apiParams = getApiSearchParams(searchState, defaultFacets, sortOptions);
            type = '';
            data = {}; // make the search api request

            if (!facets) {
              _context.next = 13;
              break;
            }

            _context.next = 8;
            return _axios["default"].get("".concat(searchEndpoint, "/facets?").concat(apiParams));

          case 8:
            results = _context.sent;
            type = 'SET_FACETS_DATA';
            data = {
              facetsResults: results.data.facets
            };
            _context.next = 18;
            break;

          case 13:
            _context.next = 15;
            return _axios["default"].get("".concat(searchEndpoint, "?").concat(apiParams, "&facets=0"));

          case 15:
            _results = _context.sent;
            type = 'SET_SEARCH_DATA';
            data = {
              totalItems: _results.data.total,
              items: normalize ? normalize(_results.data.results) : _results.data.results
            };

          case 18:
            // dispatch results to reducer
            dispatch({
              type: type,
              data: data
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getData.apply(this, arguments);
}