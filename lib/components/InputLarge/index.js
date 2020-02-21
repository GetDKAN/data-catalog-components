"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _FormGroup = _interopRequireDefault(require("./FormGroup"));

/* eslint-disable */
var InputLarge =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(InputLarge, _React$Component);

  function InputLarge() {
    (0, _classCallCheck2["default"])(this, InputLarge);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(InputLarge).apply(this, arguments));
  }

  (0, _createClass2["default"])(InputLarge, [{
    key: "onFieldChange",
    value: function onFieldChange(event) {
      // for a regular input field, read field name and value from the event
      var fieldName = event.target.name;
      var fieldValue = event.target.value;
      this.props.onChange(fieldName, fieldValue);
    }
  }, {
    key: "onReset",
    value: function onReset(event) {
      window.location = '/search';
    }
  }, {
    key: "onGo",
    value: function onGo(event) {
      if (this.props.facets || this.props.value) {
        var location = "/search?";

        for (var i in this.props.facets) {
          location = location + this.props.facets[i][0] + "=" + this.props.facets[i][1] + '&';

          if (i === this.props.facets.length - 1) {
            console.log(i);
          }
        }

        if (this.props.value) {
          location = location + "q=" + this.props.value;
        } else {
          // Remove last &.
          location = location.slice(0, -1);
        }

        window.location = location;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react["default"].createElement(_FormGroup["default"], null, _react["default"].createElement(_reactstrap.Label, {
        "for": "search",
        className: "sr-only"
      }, "Search"), _react["default"].createElement("input", {
        type: "text",
        name: "search",
        id: "search",
        className: "form-control form-text",
        placeholder: "Search for...",
        onChange: this.onFieldChange.bind(this),
        value: this.props.value
      }), _react["default"].createElement("span", {
        className: "input-group-btn"
      }, _react["default"].createElement("button", (0, _defineProperty2["default"])({
        type: "submit",
        id: "submit",
        name: "op",
        className: "dc-button btn btn-primary",
        onClick: this.onGo.bind(this)
      }, "type", "button"), "Go!"), _react["default"].createElement("button", {
        className: "dc-button btn btn-primary",
        onClick: this.onReset.bind(this),
        type: "button"
      }, "Reset")));
    }
  }]);
  return InputLarge;
}(_react["default"].Component);

InputLarge.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  items: _propTypes["default"].array,
  className: _propTypes["default"].string
};
var _default = InputLarge;
exports["default"] = _default;