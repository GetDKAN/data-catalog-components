"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LI = _interopRequireDefault(require("./LI"));

var _H = _interopRequireDefault(require("./H3"));

var _FacetBlockDiv = _interopRequireDefault(require("./FacetBlockDiv"));

/* eslint-disable */
function prepareLink(query, selectedFacets, facetKey, name) {
  var active = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var lData = {};

  if (query) {
    lData.q = query;
  }

  lData[facetKey] = name; // If the link is active remove so the link will "reset" the search.

  if (active) {
    selectedFacets = selectedFacets.filter(function (f) {
      if (f.includes(name)) {
        delete lData[facetKey];
        return false;
      }

      return true;
    });
  }

  var facetData = selectedFacets.reduce(function (o, val) {
    return (0, _defineProperty2["default"])({}, val[0], val[1]);
  }, {});
  lData = Object.assign(lData, facetData);
  var link = Object.keys(lData).map(function (key) {
    return key + '=' + lData[key];
  }).join('&');
  return '?' + link;
}

function FacetBlocks(_ref2) {
  var title = _ref2.title,
      items = _ref2.items,
      facetKey = _ref2.facetKey,
      selectedFacets = _ref2.selectedFacets,
      query = _ref2.query,
      url = _ref2.url,
      facetCallback = _ref2.facetCallback,
      Link = _ref2.Link;

  var content = _react["default"].createElement("ul", null); // Removes other items in the active category. TODO: move to HOC.


  var filtered = items[facetKey].filter(function (item, facetCategory) {
    var flagged = false;
    var facetName = item[0];
    selectedFacets.forEach(function (facet) {
      var selectedFacetCategory = facet[0];
      var selectedFacetName = facet[1];

      if (facetName !== selectedFacetName && selectedFacetCategory === facetKey) {
        flagged = true;
      }
    });
    return !flagged;
  });
  content = filtered.map(function callback(facet, i) {
    var name = facet[0];
    var value = "(" + facet[1] + ")";
    var active = "";
    selectedFacets.forEach(function (facet) {
      if (facetKey === facet[0] && name === facet[1]) {
        active = "active";
        value = "";
      }
    });
    var link = url + prepareLink(query, selectedFacets, facetKey, name, active);
    return _react["default"].createElement(_LI["default"], {
      key: "facet-".concat(i)
    }, _react["default"].createElement(Link, {
      onClick: facetCallback,
      "data-facet-type": facetKey,
      className: active,
      to: link
    }, name, " ", value));
  });
  return _react["default"].createElement(_FacetBlockDiv["default"], null, _react["default"].createElement(_H["default"], null, title), _react["default"].createElement("ul", {
    className: "list-group",
    key: "items"
  }, content));
}

function FacetList(_ref3) {
  var facets = _ref3.facets,
      selectedFacets = _ref3.selectedFacets,
      facetsResults = _ref3.facetsResults,
      query = _ref3.query,
      facetCallback = _ref3.facetCallback,
      url = _ref3.url,
      Link = _ref3.Link;

  var content = _react["default"].createElement("div", null);

  if (facets !== false) {
    var items = [];

    for (var facet in facets) {
      items.push(facet);
    }

    content = items.map(function (item) {
      var facetListProps = {
        title: facets[item].label,
        items: facetsResults,
        selectedFacets: selectedFacets,
        facetKey: item,
        url: url,
        facetCallback: facetCallback,
        Link: Link,
        query: query
      };
      return _react["default"].createElement(FacetBlocks, (0, _extends2["default"])({
        key: item
      }, facetListProps));
    });
    return _react["default"].createElement("div", {
      key: "facets"
    }, content);
  }

  return null;
}

FacetList.propTypes = {
  facets: _propTypes["default"].object,
  selectedFacets: _propTypes["default"].any,
  facetResults: _propTypes["default"].any,
  query: _propTypes["default"].string
};
var _default = FacetList;
exports["default"] = _default;