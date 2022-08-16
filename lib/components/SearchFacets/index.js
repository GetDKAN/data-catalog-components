"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SearchFacet = _interopRequireDefault(require("./SearchFacet"));

var SearchFacets = function SearchFacets(_ref) {
  var facetsConfig = _ref.facetsConfig,
      facetsResults = _ref.facetsResults,
      selectedFacets = _ref.selectedFacets,
      dispatch = _ref.dispatch,
      className = _ref.className,
      toggleClasses = _ref.toggleClasses,
      InputComponent = _ref.InputComponent,
      onMore = _ref.onMore,
      onLess = _ref.onLess;
  var facetList = Object.entries(facetsConfig);
  var facetComponents = facetList.map(function (facetInfo) {
    var facetType = facetInfo[0];
    var facets = facetsResults.filter(function (facetItem) {
      return facetItem.type === facetType;
    });
    var selected = selectedFacets.filter(function (item) {
      return item[0] === facetType;
    }).map(function (item) {
      return item[1];
    });
    return /*#__PURE__*/_react["default"].createElement(_SearchFacet["default"], {
      key: facetType,
      facetType: facetType,
      label: facetInfo[1].label,
      facets: facets,
      dispatch: dispatch,
      selected: selected,
      toggleClasses: toggleClasses,
      InputComponent: InputComponent,
      reset: facetInfo[1].reset,
      selectedFacets: selectedFacets,
      inputType: facetInfo[1].inputType,
      onMore: onMore,
      onLess: onLess
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: className
  }, facetComponents);
};

SearchFacets.defaultProps = {
  className: 'dc-search-facets',
  selectedFacets: [],
  toggleClasses: null,
  InputComponent: null
};
SearchFacets.propTypes = {
  facetsConfig: _propTypes["default"].objectOf(_propTypes["default"].object).isRequired,
  facetsResults: _propTypes["default"].arrayOf(_propTypes["default"].object).isRequired,
  dispatch: _propTypes["default"].func.isRequired,
  selectedFacets: _propTypes["default"].arrayOf(_propTypes["default"].array),
  className: _propTypes["default"].string,
  toggleClasses: _propTypes["default"].string,
  InputComponent: _propTypes["default"].func,
  onMore: _propTypes["default"].func,
  onLess: _propTypes["default"].func
};
var _default = SearchFacets;
exports["default"] = _default;