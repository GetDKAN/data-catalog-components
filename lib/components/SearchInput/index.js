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

var _reactstrap = require("reactstrap");

var SearchInput = function SearchInput(_ref) {
  var className = _ref.className,
      labelContent = _ref.labelContent,
      onChangeFunction = _ref.onChangeFunction,
      onResetFunction = _ref.onResetFunction,
      placeholder = _ref.placeholder,
      value = _ref.value,
      bsSize = _ref.bsSize,
      labelClassName = _ref.labelClassName,
      srOnly = _ref.srOnly,
      resetContent = _ref.resetContent,
      submitContent = _ref.submitContent,
      showSubmit = _ref.showSubmit;

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
      onChangeFunction({
        type: 'UPDATE_FULLTEXT',
        data: {
          fulltext: searchQuery
        }
      });
    }, 500);
    return function () {
      return clearTimeout(timer);
    };
  }, [searchQuery, onChangeFunction]);

  var reset = _react["default"].createElement(_reactstrap.Button, {
    type: "reset",
    id: "inputReset",
    onClick: onResetFunction
  }, "Reset");

  if (resetContent) {
    reset = _react["default"].createElement(_reactstrap.Button, {
      type: "reset",
      id: "inputReset",
      onClick: onResetFunction
    }, resetContent);
  }

  var labelClass = srOnly ? 'sr-only' : '';
  return _react["default"].createElement(_reactstrap.FormGroup, {
    className: className
  }, _react["default"].createElement(_reactstrap.Label, {
    "for": "inputSearch",
    className: "".concat(labelClass, " ").concat(labelClassName)
  }, labelContent), _react["default"].createElement(_reactstrap.Input, {
    type: "text",
    name: "inputSearch",
    id: "inputSearch",
    placeholder: placeholder,
    value: searchQuery,
    onChange: function onChange(e) {
      setSearchQuery(e.target.value);
    },
    bsSize: bsSize
  }), value.length ? reset : null, showSubmit && _react["default"].createElement(_reactstrap.Button, {
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
  resetContent: null,
  onResetFunction: null,
  submitContent: 'Submit',
  showSubmit: true
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
  onResetFunction: _propTypes["default"].func,
  onChangeFunction: _propTypes["default"].func.isRequired,
  showSubmit: _propTypes["default"].bool,
  labelContent: _propTypes["default"].string
};
var _default = SearchInput;
exports["default"] = _default;