"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

var defaultFacets = {
  Theme: {
    label: 'Topics',
    field: 'theme.0.title',
    showAll: false,
    limit: 10,
    reset: {
      active: false,
      icon: _react["default"].createElement("span", null)
    }
  },
  Keyword: {
    label: 'Tags',
    field: 'keyword.*.title',
    showAll: false,
    limit: 10,
    reset: {
      active: false,
      icon: _react["default"].createElement("span", null)
    }
  }
};
describe('<SearchResultMessage />', function () {
  var defaultWrapper = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
    searchTerm: "",
    selectedFacets: [],
    facetTypes: ['Theme', 'Keyword'],
    total: 10,
    defaultFacets: defaultFacets
  }));
  var customWrapper = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
    searchTerm: "foobar",
    selectedFacets: [['Theme', 'Foo'], ['Keyword', 'Bar'], ['Keyword', 'Run']],
    facetTypes: ['Theme', 'Keyword'],
    total: 10,
    defaultFacets: defaultFacets
  }));
  var condensedWrapper = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
    searchTerm: "foobar",
    selectedFacets: [['Theme', 'Foo'], ['Keyword', 'Bar'], ['Keyword', 'Run'], ['Keyword', 'Fun']],
    facetTypes: ['Theme', 'Keyword'],
    total: 10,
    defaultFacets: defaultFacets
  }));
  var noShowWrapper = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
    searchTerm: "foobar",
    selectedFacets: [['Theme', 'Foo'], ['Keyword', 'Bar'], ['Keyword', 'Run']],
    facetTypes: ['Theme', 'Keyword'],
    total: 10,
    showQuery: false,
    showFacets: false,
    defaultFacets: defaultFacets
  }));
  var singleItemWrapper = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
    searchTerm: "",
    selectedFacets: [],
    facetTypes: ['Theme', 'Keyword'],
    total: 1,
    defaultFacets: defaultFacets
  }));
  var delimiterWrapper = (0, _enzyme.shallow)(_react["default"].createElement(_["default"], {
    searchTerm: "foobar",
    selectedFacets: [['Theme', 'Foo'], ['Keyword', 'Bar'], ['Keyword', 'Run']],
    facetTypes: ['Theme', 'Keyword'],
    total: 10,
    facetDelimiter: ", ",
    facetSeparator: " & ",
    defaultFacets: defaultFacets
  }));
  var completeMessage = '10 datasets found for "foobar" in Topics: Foo | Tags: Bar or Run';
  var customDelimiterMessage = '10 datasets found for "foobar" in Topics: Foo & Tags: Bar, Run';
  var condensedMessage = '10 datasets found for "foobar" in Topics: Foo | Tags: 3 selected Keyword';
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