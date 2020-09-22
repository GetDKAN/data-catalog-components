"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ = _interopRequireDefault(require("."));

describe('<ShowMoreContainer />', function () {
  var renderedListItems = [/*#__PURE__*/_react["default"].createElement("li", {
    key: 1
  }, "1"), /*#__PURE__*/_react["default"].createElement("li", {
    key: 2
  }, "2"), /*#__PURE__*/_react["default"].createElement("li", {
    key: 3
  }, "3"), /*#__PURE__*/_react["default"].createElement("li", {
    key: 4
  }, "4"), /*#__PURE__*/_react["default"].createElement("li", {
    key: 5
  }, "5"), /*#__PURE__*/_react["default"].createElement("li", {
    key: 6
  }, "6"), /*#__PURE__*/_react["default"].createElement("li", {
    key: 7
  }, "7"), /*#__PURE__*/_react["default"].createElement("li", {
    key: 8
  }, "8"), /*#__PURE__*/_react["default"].createElement("li", {
    key: 9
  }, "9"), /*#__PURE__*/_react["default"].createElement("li", {
    key: 10
  }, "10"), /*#__PURE__*/_react["default"].createElement("li", {
    key: 11
  }, "11"), /*#__PURE__*/_react["default"].createElement("li", {
    key: 12
  }, "12")];
  var renderedDivItems = [/*#__PURE__*/_react["default"].createElement("div", {
    key: 1
  }, "1"), /*#__PURE__*/_react["default"].createElement("div", {
    key: 2
  }, "2"), /*#__PURE__*/_react["default"].createElement("div", {
    key: 3
  }, "3"), /*#__PURE__*/_react["default"].createElement("div", {
    key: 4
  }, "4")];
  it('renders 4 divs and no showmore button', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
      items: renderedDivItems
    }));
    expect(wrapper.find('.show-more-container div').length).toBe(4);
    expect(wrapper.find('.showmore-button').exists()).toBe(false);
  });
  it('renders 12 list items and a working showmore button', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
      items: renderedListItems,
      container: "ol"
    }));
    expect(wrapper.find('li').length).toBe(10);
    expect(wrapper.exists('.showmore-button')).toBe(true);
    wrapper.find('.showmore-button').simulate('click');
    expect(wrapper.find('li').length).toBe(12);
    wrapper.find('.showmore-button').simulate('click');
    expect(wrapper.find('li').length).toBe(10);
  });
  it('renders correct container types', function () {
    var defaultWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
      items: renderedDivItems
    }));
    var olWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
      items: renderedListItems,
      container: "ol"
    }));
    var ulWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
      items: renderedListItems,
      container: "ul"
    }));
    var divWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
      items: renderedDivItems,
      container: "div"
    }));
    expect(defaultWrapper.exists('div.show-more-container')).toBe(true);
    expect(divWrapper.exists('div.show-more-container')).toBe(true);
    expect(olWrapper.exists('ol.show-more-container')).toBe(true);
    expect(ulWrapper.exists('ul.show-more-container')).toBe(true);
  });
  it('renders correct amount when specific limit is set', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
      items: renderedListItems,
      limit: 5
    }));
    expect(wrapper.find('li').length).toBe(5);
    wrapper.find('.showmore-button').simulate('click');
    expect(wrapper.find('li').length).toBe(12);
    wrapper.find('.showmore-button').simulate('click');
    expect(wrapper.find('li').length).toBe(5);
  });
  it('renders correct button text', function () {
    var defaultWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
      items: renderedListItems,
      container: "ol"
    }));
    var customWrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
      items: renderedListItems,
      container: "ol",
      btnOpenText: "foo",
      btnClosedText: "bar"
    }));
    expect(defaultWrapper.find('.showmore-button').text()).toBe('Show 2 more');
    defaultWrapper.find('.showmore-button').simulate('click');
    expect(defaultWrapper.find('.showmore-button').text()).toBe('Show less');
    expect(customWrapper.find('.showmore-button').text()).toBe('bar');
    customWrapper.find('.showmore-button').simulate('click');
    expect(customWrapper.find('.showmore-button').text()).toBe('foo');
  });
  it('renders with correct custom classes', function () {
    var wrapper = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_["default"], {
      items: renderedListItems,
      container: "ol",
      containerClasses: "container",
      wrapperClasses: "wrapper"
    }));
    expect(wrapper.exists('ol.container')).toBe(true);
    expect(wrapper.exists('div.wrapper')).toBe(true);
  });
});