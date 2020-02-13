"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

describe('<SearchResultMessage />', function () {
  var defaultWrapper = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
    searchTerm: "",
    selectedFacets: [],
    facetTypes: ['Themes', 'Keywords'],
    total: 10
  }));
  var customWrapper = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
    searchTerm: "foobar",
    selectedFacets: [['Themes', 'Foo'], ['Keywords', 'Bar'], ['Keywords', 'Run']],
    facetTypes: ['Themes', 'Keywords'],
    total: 10
  }));
  var condensedWrapper = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
    searchTerm: "foobar",
    selectedFacets: [['Themes', 'Foo'], ['Keywords', 'Bar'], ['Keywords', 'Run'], ['Keywords', 'Fun']],
    facetTypes: ['Themes', 'Keywords'],
    total: 10
  }));
  var noShowWrapper = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
    searchTerm: "foobar",
    selectedFacets: [['Themes', 'Foo'], ['Keywords', 'Bar'], ['Keywords', 'Run']],
    facetTypes: ['Themes', 'Keywords'],
    total: 10,
    showQuery: false,
    showFacets: false
  }));
  var singleItemWrapper = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
    searchTerm: "",
    selectedFacets: [],
    facetTypes: ['Themes', 'Keywords'],
    total: 1
  }));
  var delimiterWrapper = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
    searchTerm: "foobar",
    selectedFacets: [['Themes', 'Foo'], ['Keywords', 'Bar'], ['Keywords', 'Run']],
    facetTypes: ['Themes', 'Keywords'],
    total: 10,
    facetDelimiter: ", ",
    facetSeparator: " & "
  }));
  var completeMessage = '10 datasets found for "foobar" in Themes: Foo | Keywords: Bar or Run';
  var customDelimiterMessage = '10 datasets found for "foobar" in Themes: Foo & Keywords: Bar, Run';
  var condensedMessage = '10 datasets found for "foobar" in Themes: Foo | Keywords: 3 selected Keywords';
  it('renders with default message', function () {
    expect(defaultWrapper.find('div p').text()).toBe('10 datasets found');
  });
  it('renders with default single message', function () {
    expect(singleItemWrapper.find('div p').text()).toBe('1 dataset found');
  });
  it('renders complete message', function () {
    expect(customWrapper.find('div p').text()).toBe(completeMessage);
  });
  it('renders a condensed facets message', function () {
    expect(condensedWrapper.find('div p').text()).toBe(condensedMessage);
  });
  it('renders a message with no query or facets', function () {
    expect(noShowWrapper.find('div p').text()).toBe('10 datasets found');
  });
  it('renders facets with correct delimiter', function () {
    expect(delimiterWrapper.find('div p').text()).toBe(customDelimiterMessage);
  });
});