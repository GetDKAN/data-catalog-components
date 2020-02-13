"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gatsby = require("gatsby");

var _default2 = _interopRequireDefault(require("../../theme/default"));

var _SearchInput = _interopRequireDefault(require("../../components/SearchInput"));

var Hero = function Hero(_ref) {
  var alignment = _ref.alignment,
      title = _ref.title,
      intro = _ref.intro,
      image = _ref.image;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var background = image ? "url(".concat(image, ")") : "linear-gradient(".concat(_default2["default"].primaryDark, ", ").concat(_default2["default"].primary, ")");

  function handleSubmit(event) {
    event.preventDefault();
    (0, _gatsby.navigate)("/search?q=".concat(query));
  }

  return _react["default"].createElement("div", {
    className: "dc-hero",
    style: {
      backgroundImage: background
    }
  }, _react["default"].createElement("div", {
    className: "block ".concat(alignment)
  }, _react["default"].createElement("h1", {
    className: "hero-title"
  }, title), _react["default"].createElement("p", null, intro), _react["default"].createElement("form", {
    onSubmit: function onSubmit(event) {
      return handleSubmit(event);
    }
  }, _react["default"].createElement(_SearchInput["default"], {
    onChangeFunction: function onChangeFunction(event) {
      return setQuery(event.target.value);
    },
    onResetFunction: function onResetFunction() {
      return setQuery('');
    },
    showSubmit: true,
    value: query,
    resetContent: "Clear"
  }))));
};

Hero.defaultProps = {
  alignment: 'center',
  title: 'Welcome to DKAN',
  intro: 'DKAN is an open-source data management platform. It treats data as content so that you can easily publish, manage, and maintain your open data no matter the size of your team or the level of technical expertise.',
  image: ''
};
Hero.propTypes = {
  title: _propTypes["default"].string,
  intro: _propTypes["default"].string,
  alignment: _propTypes["default"].string,
  image: _propTypes["default"].string
};
var _default = Hero;
exports["default"] = _default;