"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _router = require("@reach/router");

var _reactstrap = require("reactstrap");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Hero = function Hero(_ref) {
  var alignment = _ref.alignment,
      title = _ref.title,
      intro = _ref.intro,
      image = _ref.image,
      resetContent = _ref.resetContent,
      includeReset = _ref.includeReset,
      submitContent = _ref.submitContent,
      gradient = _ref.gradient;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var background = image ? "url(".concat(image, ")") : "linear-gradient(".concat(gradient, ")");

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(event) {
      var searchParams;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              searchParams = '/search/';

              if (query) {
                searchParams = "/search/?fulltext=".concat(query);
              }

              _context.next = 5;
              return (0, _router.navigate)(searchParams);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-hero",
    style: {
      backgroundImage: background
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-hero-block ".concat(alignment)
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "dc-hero-title"
  }, title), /*#__PURE__*/_react["default"].createElement("p", null, intro), /*#__PURE__*/_react["default"].createElement("form", {
    onSubmit: function onSubmit(event) {
      return handleSubmit(event);
    },
    className: "dc-hero-search"
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    className: "sr-only",
    htmlFor: "hero_search"
  }, "Search"), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    value: query,
    onChange: function onChange(event) {
      return setQuery(event.target.value);
    },
    id: "hero_search"
  }), /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
    type: "submit"
  }, submitContent), includeReset && query && /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
    className: "dc-hero-reset",
    type: "reset",
    onClick: function onClick() {
      return setQuery('');
    }
  }, resetContent))));
};

Hero.defaultProps = {
  alignment: 'center',
  title: 'Welcome to DKAN',
  intro: 'DKAN is an open-source data management platform. It treats data as content so that you can easily publish, manage, and maintain your open data no matter the size of your team or the level of technical expertise.',
  image: '',
  includeReset: true,
  resetContent: 'Clear',
  submitContent: 'Go',
  gradient: '#cccccc,#eeeeee'
};
Hero.propTypes = {
  title: _propTypes["default"].string,
  intro: _propTypes["default"].string,
  alignment: _propTypes["default"].string,
  image: _propTypes["default"].string,
  resetContent: _propTypes["default"].node,
  includeReset: _propTypes["default"].bool,
  submitContent: _propTypes["default"].node,
  gradient: _propTypes["default"].string
};
var _default = Hero;
exports["default"] = _default;