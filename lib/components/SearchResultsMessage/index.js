"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
  var queryText = null;
  var facetsText = [];

  if (showQuery && searchTerm) {
    queryText = _react["default"].createElement(_react["default"].Fragment, null, ' ', "for \"", _react["default"].createElement("span", {
      className: searchQueryClass
    }, searchTerm), "\"");
  }

  if (showFacets && selectedFacets.length > 0) {
    var facetObj = {};

    var _loop = function _loop(i) {
      facetObj[facetTypes[i]] = selectedFacets.filter(function (facet) {
        return facet[0].toLowerCase() === facetTypes[i].toLowerCase();
      });
    };

    for (var i = 0; i < facetTypes.length; i += 1) {
      _loop(i);
    }

    if (Object.keys(facetObj).length) {
      var keys = Object.keys(facetObj);
      facetsText.push(' in ');

      for (var i = 0; i < keys.length; i += 1) {
        var facetTitle = _react["default"].createElement("span", {
          className: facetTitleClass
        }, defaultFacets[keys[i]].label);

        if (facetObj[keys[i]].length) {
          if (facetsText.length >= 2) {
            facetsText.push(facetSeparator);
          }

          var facetArray = facetObj[keys[i]].map(function (item) {
            return item[1];
          });

          var facetsList = _react["default"].createElement("span", {
            className: facetListClass
          }, facetArray.join(facetDelimiter));

          if (facetArray.length >= facetLimit) {
            facetsList = _react["default"].createElement("span", {
              className: "".concat(facetListClass, " combined-facets")
            }, facetArray.length, ' ', "selected", ' ', keys[i]);
          }

          facetsText.push(_react["default"].createElement(_react.Fragment, {
            key: "".concat(facetTitle, "-").concat(facetArray.length)
          }, facetTitle, ":", ' ', facetsList));
        }
      }
    }
  }

  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement("p", null, total.toLocaleString('en'), ' ', total !== 1 ? 'datasets' : 'dataset', ' ', "found", queryText, facetsText));
};

SearchResultsMessage.defaultProps = {
  showQuery: true,
  showFacets: true,
  facetLimit: 3,
  className: 'search-results-message',
  facetTitleClass: 'search-results-facet-title',
  facetListClass: 'search-results-facet-list',
  searchQueryClass: 'search-results-query',
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