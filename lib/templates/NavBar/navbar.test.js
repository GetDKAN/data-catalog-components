"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _index = _interopRequireDefault(require("./index"));

var baseItems = [{
  "label": "Google",
  "url": "https://google.com"
}, {
  "label": "CivicActions",
  "url": "https://civicactions.com/"
}, {
  "label": "Github",
  "url": "https://github.com/"
}];
var items = baseItems.map(function (item) {
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: item.url
  }, item.label);
});
describe('NavBar', function () {
  it('renders correctly', function () {
    var tree = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      navItems: items
    })).toJSON(); // expect(tree).toMatchSnapshot();

  });
});