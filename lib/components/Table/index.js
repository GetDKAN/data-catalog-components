"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

var _Text = _interopRequireDefault(require("../Text"));

/* eslint-disable */
var Table =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(Table, _Component);

  function Table() {
    (0, _classCallCheck2["default"])(this, Table);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Table).apply(this, arguments));
  }

  (0, _createClass2["default"])(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          configuration = _this$props.configuration,
          title = _this$props.title,
          th1 = _this$props.th1,
          th2 = _this$props.th2,
          tableclass = _this$props.tableclass;
      var fields = Object.keys(configuration);

      if (fields.length == 0) {
        return _react["default"].createElement("div", null);
      }

      var mapped = fields.map(function (field, index) {
        var Component = String;
        var label = 'label' in configuration[field] ? configuration[field].label : '';
        var value = data[field];
        return {
          label: label,
          value: value
        };
      });
      var rows = mapped.map(function (row, index) {
        return _react["default"].createElement("tr", {
          key: row.label
        }, _react["default"].createElement("td", null, row.label), _react["default"].createElement("td", null, _react["default"].createElement(_Text["default"], {
          value: row.value
        })));
      });

      if (rows.length) {
        return _react["default"].createElement(_Wrapper["default"], {
          className: tableclass
        }, _react["default"].createElement("h3", null, title), _react["default"].createElement("table", {
          className: "table table-bordered table-hover table-striped"
        }, _react["default"].createElement("thead", null, _react["default"].createElement("tr", null, _react["default"].createElement("th", null, th1), _react["default"].createElement("th", null, th2))), _react["default"].createElement("tbody", null, rows)));
      } else {
        return _react["default"].createElement("span", null);
      }
    }
  }]);
  return Table;
}(_react.Component);

Table.defaultProps = {
  title: "Additional Information",
  th1: "Field",
  th2: "Value"
};
var _default = Table;
exports["default"] = _default;