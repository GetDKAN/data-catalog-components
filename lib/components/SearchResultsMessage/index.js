"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SearchResultsMessage = _interopRequireDefault(require("./revisions/SearchResultsMessage2"));

var SearchResultsMessage = function SearchResultsMessage(_ref) {
  var searchTerm = _ref.searchTerm,
      selectedFacets = _ref.selectedFacets,
      facetTypes = _ref.facetTypes,
      total = _ref.total,
      showQuery = _ref.showQuery,
      showFacets = _ref.showFacets,
      facetLimit = _ref.facetLimit,
      className = _ref.className,
      facetTitleClass = _ref.facetTitleClass,
      facetListClass = _ref.facetListClass,
      searchQueryClass = _ref.searchQueryClass,
      facetDelimiter = _ref.facetDelimiter,
      facetSeparator = _ref.facetSeparator,
      defaultFacets = _ref.defaultFacets;
  var term = '';
  var facets = [];

  if (showFacets) {
    facets = (0, _toConsumableArray2["default"])(selectedFacets);
  }

  if (facets.length > 0 && showFacets) {
    facets = selectedFacets.map(function (item) {
      var newItem = (0, _toConsumableArray2["default"])(item);
      var facetType = item[0];

      if (facetType in defaultFacets) {
        newItem[0] = defaultFacets[facetType].label;
      }

      return newItem;
    });
  }

  if (searchTerm && showQuery) {
    term = searchTerm;
  }

  return /*#__PURE__*/_react["default"].createElement(_SearchResultsMessage["default"], {
    total: total,
    searchTerm: term,
    facets: facets,
    className: className,
    facetTitleClass: facetTitleClass,
    facetListClass: facetListClass,
    searchClass: searchQueryClass,
    facetDelimiter: facetDelimiter,
    facetTypeDelimiter: facetSeparator
  });
};

SearchResultsMessage.defaultProps = {
  showQuery: true,
  showFacets: true,
  facetLimit: 3,
  className: 'dc-search-results-message',
  facetTitleClass: 'dc-search-results-facet-title',
  facetListClass: 'dc-search-results-facet-list',
  searchQueryClass: 'dc-search-results-query',
  facetDelimiter: ' or ',
  facetSeparator: ' | '
};
SearchResultsMessage.propTypes = {
  className: _propTypes["default"].string,
  showQuery: _propTypes["default"].bool,
  showFacets: _propTypes["default"].bool,
  facetLimit: _propTypes["default"].number,
  facetTitleClass: _propTypes["default"].string,
  facetListClass: _propTypes["default"].string,
  searchQueryClass: _propTypes["default"].string,
  selectedFacets: _propTypes["default"].arrayOf(_propTypes["default"].array).isRequired,
  facetTypes: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  total: _propTypes["default"].number.isRequired,
  searchTerm: _propTypes["default"].string.isRequired,
  facetDelimiter: _propTypes["default"].string,
  facetSeparator: _propTypes["default"].string,
  defaultFacets: _propTypes["default"].objectOf(_propTypes["default"].object).isRequired
};
var _default = SearchResultsMessage;
exports["default"] = _default;