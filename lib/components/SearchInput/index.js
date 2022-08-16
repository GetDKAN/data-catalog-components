"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactstrap = require("reactstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var SearchInput = function SearchInput(_ref) {
  var className = _ref.className,
      labelContent = _ref.labelContent,
      onChangeFunction = _ref.onChangeFunction,
      placeholder = _ref.placeholder,
      value = _ref.value,
      bsSize = _ref.bsSize,
      labelClassName = _ref.labelClassName,
      srOnly = _ref.srOnly,
      resetContent = _ref.resetContent,
      submitContent = _ref.submitContent,
      showSubmit = _ref.showSubmit,
      showReset = _ref.showReset;

  var _useState = (0, _react.useState)(value),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      searchQuery = _useState2[0],
      setSearchQuery = _useState2[1];

  (0, _react.useEffect)(function () {
    if (value === '') {
      setSearchQuery(value);
    }
  }, [value]);
  (0, _react.useEffect)(function () {
    var timer = setTimeout(function () {
      if (searchQuery !== value) {
        onChangeFunction({
          type: 'UPDATE_FULLTEXT',
          data: {
            fulltext: searchQuery,
            page: 1
          }
        });
      }
    }, 500);
    return function () {
      return clearTimeout(timer);
    };
  }, [searchQuery, onChangeFunction]);

  var reset = /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
    type: "reset",
    id: "inputReset",
    onClick: function onClick() {
      setSearchQuery('');
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: ['fas', 'times'],
    size: "1x",
    "aria-hidden": "true",
    role: "presentation"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "reset-text"
  }, resetContent));

  var labelClass = srOnly ? 'sr-only' : '';
  return /*#__PURE__*/_react["default"].createElement(_reactstrap.FormGroup, {
    className: "dc-search-input ".concat(className)
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
    "for": "inputSearch",
    className: "".concat(labelClass, " ").concat(labelClassName)
  }, labelContent), /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
    type: "text",
    name: "inputSearch",
    id: "inputSearch",
    placeholder: placeholder,
    value: searchQuery,
    onChange: function onChange(e) {
      setSearchQuery(e.target.value);
    },
    bsSize: bsSize
  }), searchQuery.length ? reset : null, showSubmit && /*#__PURE__*/_react["default"].createElement(_reactstrap.Button, {
    type: "submit",
    id: "inputSubmit"
  }, submitContent));
};

SearchInput.defaultProps = {
  placeholder: 'Search the Data',
  labelContent: 'Search',
  value: '',
  bsSize: 'lg',
  labelClassName: '',
  srOnly: true,
  className: '',
  resetContent: 'Reset',
  submitContent: 'Submit',
  showSubmit: true,
  showReset: true
};
SearchInput.propTypes = {
  placeholder: _propTypes["default"].string,
  value: _propTypes["default"].string,
  bsSize: _propTypes["default"].string,
  labelClassName: _propTypes["default"].string,
  srOnly: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  resetContent: _propTypes["default"].node,
  submitContent: _propTypes["default"].node,
  onChangeFunction: _propTypes["default"].func.isRequired,
  showSubmit: _propTypes["default"].bool,
  showReset: _propTypes["default"].bool,
  labelContent: _propTypes["default"].string
};
var _default = SearchInput;
exports["default"] = _default;