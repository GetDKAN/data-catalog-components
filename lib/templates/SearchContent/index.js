"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactLoaderAdvanced = _interopRequireDefault(require("react-loader-advanced"));

var _reactLoadingSpin = _interopRequireDefault(require("react-loading-spin"));

var _reactJsPagination = _interopRequireDefault(require("react-js-pagination"));

var _SearchResultsMessage = _interopRequireDefault(require("../../components/SearchResultsMessage"));

var _SearchListItem = _interopRequireDefault(require("../../components/SearchListItem"));

var _SearchInput = _interopRequireDefault(require("../../components/SearchInput"));

var _SearchPaginationResults = _interopRequireDefault(require("../../components/SearchPaginationResults"));

var _SearchPageSizer = _interopRequireDefault(require("../../components/SearchPageSizer"));

var _search_defaults = require("../../services/search/search_defaults");

var SearchContent = function SearchContent() {
  var _useContext = (0, _react.useContext)(_search_defaults.SearchDispatch),
      searchState = _useContext.searchState,
      dispatch = _useContext.dispatch,
      defaultFacets = _useContext.defaultFacets;

  var items = searchState.items,
      fulltext = searchState.fulltext,
      totalItems = searchState.totalItems,
      selectedFacets = searchState.selectedFacets,
      loading = searchState.loading;
  var facetTypes = Object.keys(defaultFacets);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-results-list col-md-8 col-sm-12"
  }, items && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_SearchInput["default"], {
    placeholder: "Type your search term here",
    showSubmit: false,
    srOnly: true,
    value: fulltext,
    onChangeFunction: dispatch,
    onResetFunction: function onResetFunction() {
      return dispatch({
        type: 'RESET_FULLTEXT'
      });
    },
    resetContent: "Clear text"
  }), /*#__PURE__*/_react["default"].createElement(_SearchResultsMessage["default"], {
    searchTerm: fulltext,
    total: parseInt(totalItems, 10),
    selectedFacets: selectedFacets,
    facetTypes: facetTypes,
    defaultFacets: defaultFacets,
    facetLimit: 100,
    facetDelimiter: ", ",
    facetSeparator: " & "
  }), /*#__PURE__*/_react["default"].createElement(_reactLoaderAdvanced["default"], {
    hideContentOnLoad: true,
    backgroundStyle: {
      backgroundColor: '#f9fafb'
    },
    foregroundStyle: {
      backgroundColor: '#f9fafb'
    },
    show: loading,
    message: /*#__PURE__*/_react["default"].createElement(_reactLoadingSpin["default"], {
      width: "3px",
      primaryColor: "#007BBC"
    })
  }, /*#__PURE__*/_react["default"].createElement("ol", null, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_SearchListItem["default"], {
      key: item.identifier,
      item: item
    });
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-pagination-container"
  }, /*#__PURE__*/_react["default"].createElement(_SearchPaginationResults["default"], {
    total: Number(totalItems),
    pageSize: Number(searchState['page-size']),
    currentPage: Number(searchState.page)
  }), /*#__PURE__*/_react["default"].createElement(_SearchPageSizer["default"], {
    currentValue: Number(searchState['page-size']),
    resizeFunc: function resizeFunc(e) {
      return dispatch({
        type: 'UPDATE_PAGE_SIZE',
        data: {
          'page-size': e.target.value
        }
      });
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactJsPagination["default"], {
    hideDisabled: true,
    activePage: searchState.page,
    itemsCountPerPage: Number(searchState['page-size']),
    totalItemsCount: Number(totalItems),
    pageRangeDisplayed: 5,
    onChange: function onChange(e) {
      return dispatch({
        type: 'UPDATE_CURRENT_PAGE',
        data: {
          page: e
        }
      });
    }
  }))));
};

var _default = SearchContent;
exports["default"] = _default;