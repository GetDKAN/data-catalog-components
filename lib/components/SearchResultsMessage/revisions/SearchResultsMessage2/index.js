"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var SearchResultsMessage2 = function SearchResultsMessage2(_ref) {
  var className = _ref.className,
      total = _ref.total,
      searchTerm = _ref.searchTerm,
      searchClass = _ref.searchClass,
      facets = _ref.facets,
      facetTitleClass = _ref.facetTitleClass,
      facetListClass = _ref.facetListClass,
      facetDelimiter = _ref.facetDelimiter,
      facetTypeDelimiter = _ref.facetTypeDelimiter,
      facetLimit = _ref.facetLimit;
  var totalInfo = getTotalInfo(total);
  var searchInfo = getSearchInfo(searchTerm, searchClass);
  var facetsInfo = getFacetsInfo(facets, facetTitleClass, facetListClass, facetDelimiter, facetTypeDelimiter, facetLimit);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, /*#__PURE__*/_react["default"].createElement("p", null, totalInfo, searchInfo, facetsInfo));

  function getTotalInfo(total) {
    var text = [];
    text.push(total.toLocaleString('en'));
    text.push(total !== 1 ? 'datasets' : 'dataset');
    text.push('found');
    return text.join(" ");
  }

  function getSearchInfo(searchTerm, searchQueryClass) {
    if (!searchTerm) {
      return "";
    }

    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, ' ', "for \"", /*#__PURE__*/_react["default"].createElement("span", {
      className: searchQueryClass
    }, searchTerm), "\"");
  }

  function getFacetsInfo(facets, facetTitleClass, facetListClass, facetDelimiter, facetTypeDelimiter, facetLimit) {
    if (facets.length == 0) {
      return "";
    }

    var facetTypes = getFacetTypes(facets);
    var facetsText = [];
    var counter = 0;
    facetsText.push(' in ');
    facetTypes.forEach(function (facetType) {
      // Add '&' between facet types.
      if (counter > 0) {
        facetsText.push(facetTypeDelimiter);
      }

      facetsText.push(getFragmentForFacetType(facetType, facets, facetTitleClass, facetDelimiter, facetLimit));
      counter++;
    });
    return /*#__PURE__*/_react["default"].createElement("span", {
      className: facetListClass
    }, facetsText);
  }
};

function getFacetTypes(selectedFacets) {
  return selectedFacets.map(function (facet) {
    return facet[0];
  }).filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

function getFacetsOfType(facetType, selectedFacets) {
  var facets = [];
  selectedFacets.forEach(function (facet) {
    if (facet[0] === facetType) {
      facets.push(facet[1]);
    }
  });
  return facets;
}

function getFragmentForFacetType(facetType, selectedFacets, facetTitleClass, facetDelimiter, facetLimit) {
  var facetTitle = /*#__PURE__*/_react["default"].createElement("span", {
    className: facetTitleClass
  }, facetType);

  var facets = getFacetsOfType(facetType, selectedFacets);
  var facetsText = getFacetsText(facets, facetType, facetDelimiter, facetLimit);
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
    key: "".concat(facetType, "-").concat(facets.length)
  }, facetTitle, ":", ' ', facetsText);
}

function getFacetsText(facets, facetType, facetDelimiter, facetLimit) {
  if (facets.length === facetLimit) {
    return facets.length + ' selected ' + facetType;
  }

  return facets.join(facetDelimiter);
}

SearchResultsMessage2.defaultProps = {
  className: 'dc-search-results-message',
  facetTitleClass: 'dc-search-results-facet-title',
  facetListClass: 'dc-search-results-facet-list',
  searchQueryClass: 'dc-search-results-query',
  facetDelimiter: ' or ',
  facetTypeDelimiter: ' | ',
  facetLimit: 3
};
SearchResultsMessage2.propTypes = {
  className: _propTypes["default"].string,
  total: _propTypes["default"].number.isRequired,
  searchTerm: _propTypes["default"].string.isRequired,
  searchClass: _propTypes["default"].string,
  facets: _propTypes["default"].arrayOf(_propTypes["default"].array).isRequired,
  facetTitleClass: _propTypes["default"].string,
  facetListClass: _propTypes["default"].string,
  facetDelimiter: _propTypes["default"].string,
  facetTypeDelimiter: _propTypes["default"].string,
  facetLimit: _propTypes["default"].number
};
var _default = SearchResultsMessage2;
exports["default"] = _default;