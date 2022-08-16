"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _queryString = _interopRequireDefault(require("query-string"));

var _search_reducer = _interopRequireDefault(require("../../services/search/search_reducer"));

var _search_defaults = require("../../services/search/search_defaults");

var _functions = _interopRequireDefault(require("./functions"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Search = function Search(_ref) {
  var initialSearchState = _ref.initialSearchState,
      searchEndpoint = _ref.searchEndpoint,
      children = _ref.children,
      defaultFacets = _ref.defaultFacets,
      sortOptions = _ref.sortOptions,
      setSearchUrl = _ref.setSearchUrl,
      path = _ref.path,
      location = _ref.location,
      normalize = _ref.normalize,
      trailingSlashInUrl = _ref.trailingSlashInUrl;

  var defaultState = _objectSpread(_objectSpread({}, _search_defaults.defaultSearchState), initialSearchState);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      hasWindow = _useState2[0],
      setHasWindow = _useState2[1];

  var _useReducer = (0, _react.useReducer)(_search_reducer["default"], defaultState),
      _useReducer2 = (0, _slicedToArray2["default"])(_useReducer, 2),
      searchState = _useReducer2[0],
      dispatch = _useReducer2[1];

  var firstUrl = (0, _react.useRef)(true);
  var firstFetchSearch = (0, _react.useRef)(true);
  var firstFetchFacet = (0, _react.useRef)(true); // On Mount: Synchronize url params with search state.

  (0, _react.useEffect)(function () {
    setHasWindow(true); // Set the state from query parameters.

    var params = _queryString["default"].parse(window.location.search);

    var dispatched = false;
    var actions = {};
    actions['page-size'] = 'UPDATE_PAGE_SIZE';
    actions.page = 'UPDATE_CURRENT_PAGE';
    actions.fulltext = 'UPDATE_FULLTEXT';
    actions.sort = 'UPDATE_SORT_ONLY';
    actions['sort-order'] = 'UPDATE_SORT_ORDER';
    var urlOptions = Object.keys(actions);
    urlOptions.forEach(function (param) {
      if (params[param]) {
        var data = params;
        dispatched = true;
        dispatch({
          type: actions[param],
          data: data
        });
      }
    });
    var facetKeys = Object.keys(defaultFacets);
    facetKeys.forEach(function (key) {
      if (params[key]) {
        params[key].split(',').forEach(function (facetName) {
          var newFacet = [key, facetName];
          dispatched = true;
          dispatch({
            type: 'UPDATE_FACETS',
            data: {
              newFacet: newFacet,
              page: params.page
            }
          });
        });
      }
    }); // We are relying on a state change to trigger a data fetch.
    // If we have no parameters to trigger the state change and dispatch,
    // lets force a data fetch.

    if (!dispatched) {
      (0, _functions["default"])(searchEndpoint, normalize, searchState, defaultFacets, sortOptions, dispatch);
      Object.keys(defaultFacets).forEach(function (facet) {
        (0, _functions["default"])(searchEndpoint, normalize, searchState, defaultFacets, sortOptions, dispatch, facet);
      });
    }
  }, []); // Fetch Search Data.

  (0, _react.useEffect)(function () {
    if (firstFetchSearch.current) {
      firstFetchSearch.current = false;
      return;
    }

    (0, _functions["default"])(searchEndpoint, normalize, searchState, defaultFacets, sortOptions, dispatch);
  }, [searchState.sort, searchState.fulltext, searchState['page-size'], searchState.page, searchState.selectedFacets]); // Fetch Facet Data.

  (0, _react.useEffect)(function () {
    if (firstFetchFacet.current) {
      firstFetchFacet.current = false;
      return;
    }

    Object.keys(defaultFacets).forEach(function (facet) {
      (0, _functions["default"])(searchEndpoint, normalize, searchState, defaultFacets, sortOptions, dispatch, facet);
    });
  }, [searchState.sort, searchState.fulltext, searchState['page-size'], searchState.page, searchState.selectedFacets]); // Update URL.

  (0, _react.useEffect)(function () {
    if (firstUrl.current) {
      firstUrl.current = false;
      return;
    }

    var searchParams = {};
    var facetKeys = Object.keys(defaultFacets);

    var state = _objectSpread({}, searchState); // Set other url parameters


    var urlOptions = ['fulltext', 'sort', 'sort-order', 'page-size', 'page'];
    urlOptions.forEach(function (option) {
      // We only want to store state in the url if they are not the default state.
      if (state[option] && state[option] !== defaultState[option]) {
        searchParams[option] = state[option];
      }
    }); // Set selected facets for search

    if (state.selectedFacets.length) {
      facetKeys.forEach(function (key) {
        var searchFacets = state.selectedFacets.filter(function (facet) {
          return facet[0].toLowerCase() === key.toLowerCase();
        });
        searchFacets.forEach(function (facet) {
          if (!(key in searchParams)) {
            searchParams[key] = [];
          }

          searchParams[key].push(facet[1]);
        });
      });
    }

    var params = _queryString["default"].stringify(searchParams, {
      arrayFormat: 'comma'
    });

    if (setSearchUrl) {
      var loc = window.location;
      var searchUrl = '';

      if (trailingSlashInUrl) {
        searchUrl = Object.keys(params).length ? "".concat(path, "/?").concat(params) : "".concat(path, "/");
      } else {
        searchUrl = Object.keys(params).length ? "".concat(path, "?").concat(params) : "".concat(path);
      }

      var currentUrl = "".concat(loc.pathname).concat(loc.search);

      if (window !== undefined && searchUrl !== currentUrl) {
        window.history.pushState({}, 'Search', "".concat(searchUrl));
      }
    }
  }, [searchState.items, searchState.facetsResults]);
  return /*#__PURE__*/_react["default"].createElement(_search_defaults.SearchDispatch.Provider, {
    value: {
      searchState: searchState,
      dispatch: dispatch,
      defaultFacets: defaultFacets
    }
  }, hasWindow && children);
};

Search.defaultProps = {
  setSearchUrl: true,
  normalize: null,
  initialSearchState: {},
  trailingSlashInUrl: true
};
Search.propTypes = {
  initialSearchState: _propTypes["default"].objectOf(_propTypes["default"].object),
  searchEndpoint: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node.isRequired,
  defaultFacets: _propTypes["default"].objectOf(_propTypes["default"].object).isRequired,
  sortOptions: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  setSearchUrl: _propTypes["default"].bool,
  path: _propTypes["default"].string.isRequired,
  location: _propTypes["default"].objectOf(_propTypes["default"].any).isRequired,
  normalize: _propTypes["default"].func,
  trailingSlashInUrl: _propTypes["default"].bool
};
var _default = Search;
exports["default"] = _default;