"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ToggleBlock = _interopRequireDefault(require("../ToggleBlock"));

var _ShowMoreContainer = _interopRequireDefault(require("../ShowMoreContainer"));

// import { useFilteredFacets } from '../../services/hooks/searchHooks';
var SearchFacetList = function SearchFacetList(_ref) {
  var facetKey = _ref.facetKey,
      selectedFacets = _ref.selectedFacets,
      facetResults = _ref.facetResults,
      limit = _ref.limit,
      facetChangeFunc = _ref.facetChangeFunc;
  var filteredFacets = []; // filteredFacets = useFilteredFacets(facetKey, selectedFacets, facetResults);

  var choices = filteredFacets.map(function (result) {
    var type = 'checkbox';
    var label = result[0];
    var selected = selectedFacets.filter(function (selFacet) {
      return selFacet[1] === result[0];
    }).length > 0;
    var key = "".concat(facetKey, "-").concat(label.replace(/\s/g, ''), "-").concat(Math.random() * 10);
    return _react["default"].createElement("li", {
      key: key
    }, _react["default"].createElement("input", {
      type: type,
      name: facetKey,
      value: label,
      checked: selected,
      onChange: facetChangeFunc
    }), label);
  });
  return _react["default"].createElement(_ToggleBlock["default"], {
    key: facetKey,
    title: facetKey
  }, _react["default"].createElement(_ShowMoreContainer["default"], {
    container: "ol",
    items: choices,
    limit: limit
  }));
};

SearchFacetList.defaultProps = {
  limit: 10
};
SearchFacetList.propTypes = {
  facetKey: _propTypes["default"].string.isRequired,
  selectedFacets: _propTypes["default"].arrayOf(_propTypes["default"].array).isRequired,
  facetResults: _propTypes["default"].objectOf(_propTypes["default"].array).isRequired,
  limit: _propTypes["default"].number,
  facetChangeFunc: _propTypes["default"].func.isRequired
};
var _default = SearchFacetList;
exports["default"] = _default;