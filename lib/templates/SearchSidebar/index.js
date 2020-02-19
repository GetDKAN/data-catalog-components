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

  var _useContext = (0, _react.useContext)(_search_defaults.SearchDispatch),
      searchState = _useContext.searchState,
      dispatch = _useContext.dispatch,
      defaultFacets = _useContext.defaultFacets;

  var facetsResults = searchState.facetsResults,
      selectedFacets = searchState.selectedFacets,
      totalItems = searchState.totalItems,
      fulltext = searchState.fulltext;
  return _react["default"].createElement("div", {
    className: "search-sidebar col-md-4 col-sm-12"
  }, _react["default"].createElement("div", {
    className: "search-sidebar-options ds-u-radius"
  }, _react["default"].createElement(_reactstrap.Label, {
    "for": "search-list-sort"
  }, "Sort by:"), _react["default"].createElement(_reactstrap.Input, {
    type: "select",
    name: "search-list-sort",
    id: "search-list-sort",
    onChange: function onChange(e) {
      dispatch({
        type: 'UPDATE_SORT',
        data: {
          sort: e.target.value
        }
      });
    }
  }, sortOptions.map(function (sortOpt) {
    return _react["default"].createElement("option", {
      key: sortOpt.field,
      value: sortOpt.field
    }, sortOpt.label);
  }))), _react["default"].createElement("div", {
    className: "search-sidebar-options ds-u-radius"
  }, facetsResults && facetsResults.length && _react["default"].createElement(_SearchFacets["default"], {
    defaultFacets: defaultFacets,
    toggleClasses: "ds-c-label",
    facetsResults: facetsResults,
    selectedFacets: selectedFacets,
    dispatch: dispatch,
    totalItems: totalItems,
    fulltext: fulltext
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