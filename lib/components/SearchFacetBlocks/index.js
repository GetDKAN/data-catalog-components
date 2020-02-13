"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SearchFacetList = _interopRequireDefault(require("../SearchFacetList"));

var _searchHooks = require("../../services/hooks/searchHooks");

var SearchFacetBlocks = function SearchFacetBlocks(_ref) {
  var className = _ref.className,
      facets = _ref.facets,
      limit = _ref.limit,
      facetChangeFunc = _ref.facetChangeFunc;
  var facetTypes = (0, _searchHooks.useFacetTypes)(facets.defaultFacets);
  return _react["default"].createElement("div", {
    className: className
  }, facetTypes.map(function (facetKey) {
    return _react["default"].createElement(_SearchFacetList["default"], {
      key: facetKey,
      facetKey: facetKey,
      selectedFacets: facets.selectedFacets,
      facetResults: facets.facetResults,
      limit: limit,
      facetChangeFunc: facetChangeFunc
    });
  }));
};

SearchFacetBlocks.defaultProps = {
  className: 'search-facet-blocks',
  limit: 10
};
SearchFacetBlocks.propTypes = {
  className: _propTypes["default"].string,
  facets: _propTypes["default"].objectOf(_propTypes["default"].any).isRequired,
  limit: _propTypes["default"].number,
  facetChangeFunc: _propTypes["default"].func.isRequired
};
var _default = SearchFacetBlocks;
exports["default"] = _default;