"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactstrap = require("reactstrap");

var _SearchFacets = _interopRequireDefault(require("../../components/SearchFacets"));

var _search_defaults = require("../../services/search/search_defaults");

var SearchSidebar = function SearchSidebar(_ref) {
  var sortOptions = _ref.sortOptions;
  console.log("SearchSidebar");

  var _useContext = (0, _react.useContext)(_search_defaults.SearchDispatch),
      searchState = _useContext.searchState,
      dispatch = _useContext.dispatch,
      defaultFacets = _useContext.defaultFacets;

  var facetsResults = searchState.facetsResults;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-search-sidebar col-md-4 col-sm-12"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-search-sidebar-options"
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    "for": "dc-search-list-sort"
  }, "Sort by:"), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    type: "select",
    name: "dc-search-list-sort",
    id: "dc-search-list-sort",
    onChange: function onChange(e) {
      dispatch({
        type: 'UPDATE_SORT',
        data: {
          sort: e.target.value
        }
      });
    }
  }, sortOptions.map(function (sortOpt) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: sortOpt.field,
      value: sortOpt.field
    }, sortOpt.label);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-search-sidebar-options"
  }, facetsResults && facetsResults.length && /*#__PURE__*/_react["default"].createElement(_SearchFacets["default"], {
    facetsConfig: defaultFacets,
    facetsResults: facetsResults,
    selectedFacets: searchState.selectedFacets,
    dispatch: dispatch
  })));
};

SearchSidebar.defaultProps = {
  sortOptions: [{
    field: 'modified',
    order: 'desc',
    label: 'Date'
  }, {
    field: 'title',
    order: 'asc',
    label: 'Alphabetical'
  }]
};
SearchSidebar.propTypes = {
  sortOptions: _propTypes["default"].arrayOf(_propTypes["default"].object)
};
var _default = SearchSidebar;
exports["default"] = _default;