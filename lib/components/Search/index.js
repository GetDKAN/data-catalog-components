"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _queryString = _interopRequireDefault(require("query-string"));

var _search_reducer = _interopRequireDefault(require("../../services/search/search_reducer"));

var _search_defaults = require("../../services/search/search_defaults");

var _search_functions = require("../../services/search/search_functions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Search = function Search(_ref) {
  var initialSearchState = _ref.initialSearchState,
      searchEndpoint = _ref.searchEndpoint,
      children = _ref.children,
      defaultFacets = _ref.defaultFacets,
      sortOptions = _ref.sortOptions,
      setSearchUrl = _ref.setSearchUrl,
      path = _ref.path,
      location = _ref.location,
      normalize = _ref.normalize;

  var parsedQuery = _queryString["default"].parse(location.search);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      hasWindow = _useState2[0],
      setHasWindow = _useState2[1];

  var _useReducer = (0, _react.useReducer)(_search_reducer["default"], _objectSpread({}, _search_defaults.defaultSearchState, {}, initialSearchState, {}, parsedQuery)),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      searchState = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    if (window !== undefined) {
      setHasWindow(true);
    }

    var initialFacets = (0, _search_functions.buildInitialFacets)(_queryString["default"].parse(location.search), defaultFacets);
    searchState.selectedFacets = initialSearchState && initialSearchState.selectedFacets ? initialSearchState.selectedFacets : initialFacets;
    searchState.fulltext = parsedQuery.fulltext ? parsedQuery.fulltext : '';
    searchState.page = parsedQuery.page ? parsedQuery.page : _search_defaults.defaultSearchState.page;
    searchState.sort = parsedQuery.sort ? parsedQuery.page : _search_defaults.defaultSearchState.sort;
    searchState.sort_order = parsedQuery.sort_order ? parsedQuery.sort_order : _search_defaults.defaultSearchState.sort_order;
    searchState['page-size'] = parsedQuery['page-size'] ? parsedQuery['page-size'] : _search_defaults.defaultSearchState['page-size'];
  }, [location]);
  (0, _react.useEffect)(function () {
    function findSortParams() {
      var returnedSort = sortOptions.filter(function (option) {
        return option.field === searchState.sort || option.label.toLowerCase() === searchState.sort;
      });

      if (!returnedSort.length) {
        returnedSort.push(sortOptions[0]);
      }

      return returnedSort;
    }

    function getSearchData() {
      return _getSearchData.apply(this, arguments);
    } // Do all the above


    function _getSearchData() {
      _getSearchData = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var facetKeys, urlOptions, currentSort, searchParams, apiSearchParams, params, apiParams, searchUrl, results;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                facetKeys = Object.keys(defaultFacets);
                urlOptions = ['fulltext', 'sort', 'sort_order', 'page-size', 'page'].concat((0, _toConsumableArray2["default"])(facetKeys)); // Get data

                dispatch({
                  type: 'FETCH_DATA'
                }); // Figure out sort options

                currentSort = findSortParams();
                searchState.sort = currentSort[0].field; // set search params using sort and searchState

                searchParams = {};
                apiSearchParams = {};
                urlOptions.forEach(function (param) {
                  if (searchState[param] !== _search_defaults.defaultSearchState[param]) {
                    searchParams[param] = searchState[param];
                  }

                  apiSearchParams[param] = searchState[param];
                }); // Set selected facets for search

                if (searchState.selectedFacets.length) {
                  facetKeys.map(function (key) {
                    var searchFacets = searchState.selectedFacets.filter(function (facet) {
                      return facet[0].toLowerCase() === key.toLowerCase();
                    });
                    var facetText = searchFacets.map(function (facet) {
                      return facet[1];
                    });

                    if (facetText.length) {
                      searchParams[key.toLowerCase()] = facetText;
                      apiSearchParams[key.toLowerCase()] = facetText;
                    }

                    return false;
                  });
                }

                params = _queryString["default"].stringify(searchParams, {
                  arrayFormat: 'comma'
                });
                apiParams = _queryString["default"].stringify(apiSearchParams, {
                  arrayFormat: 'comma'
                }); // set search url

                if (setSearchUrl) {
                  searchUrl = Object.keys(params).length ? "".concat(path, "/?").concat(params) : "".concat(path, "/");

                  if (window !== undefined && searchUrl !== "".concat(location.pathname).concat(location.search)) {
                    window.history.pushState({}, 'Search', "".concat(searchUrl));
                  }
                } // make the search api request


                _context.next = 14;
                return _axios["default"].get("".concat(searchEndpoint, "?").concat(apiParams));

              case 14:
                results = _context.sent;
                // dispatch results to reducer
                dispatch({
                  type: 'GET_SEARCH_DATA',
                  data: {
                    totalItems: results.data.total,
                    items: normalize ? normalize(results.data.results) : results.data.results,
                    facetsResults: results.data.facets
                  }
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getSearchData.apply(this, arguments);
    }

    getSearchData();
  }, [sortOptions, defaultFacets, path, setSearchUrl, searchEndpoint, searchState.sort, searchState.fulltext, searchState['page-size'], searchState.page, searchState.selectedFacets, normalize, location]);
  return _react["default"].createElement(_search_defaults.SearchDispatch.Provider, {
    value: {
      searchState: searchState,
      dispatch: dispatch,
      defaultFacets: defaultFacets
    }
  }, hasWindow && children);
};

Search.defaultProps = {
  setSearchUrl: true,
  normalize: null
};
Search.propTypes = {
  searchEndpoint: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node.isRequired,
  defaultFacets: _propTypes["default"].objectOf(_propTypes["default"].object).isRequired,
  sortOptions: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  setSearchUrl: _propTypes["default"].bool,
  path: _propTypes["default"].string.isRequired,
  location: _propTypes["default"].objectOf(_propTypes["default"].any).isRequired,
  normalize: _propTypes["default"].func
};
var _default = Search;
exports["default"] = _default;