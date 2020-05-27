"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _Text = _interopRequireDefault(require("../Text"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Table = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Table, _Component);

  var _super = _createSuper(Table);

  function Table() {
    (0, _classCallCheck2["default"])(this, Table);
    return _super.apply(this, arguments);
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
        return /*#__PURE__*/_react["default"].createElement("div", null);
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
        return /*#__PURE__*/_react["default"].createElement("tr", {
          key: row.label
        }, /*#__PURE__*/_react["default"].createElement("td", null, row.label), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_Text["default"], {
          value: row.value
        })));
      });

      if (rows.length) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: tableclass
        }, /*#__PURE__*/_react["default"].createElement("h3", null, title), /*#__PURE__*/_react["default"].createElement("table", {
          className: "dc-table table table-bordered table-hover table-striped"
        }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, th1), /*#__PURE__*/_react["default"].createElement("th", null, th2))), /*#__PURE__*/_react["default"].createElement("tbody", null, rows)));
      } else {
        return /*#__PURE__*/_react["default"].createElement("span", null);
      }
    }
  }]);
  return Table;
}(_react.Component);

Table.defaultProps = {
  title: "Additional Information",
  th1: "Field",
  th2: "Value",
  tableclass: "dc-table-wrapper"
};
var _default = Table;
exports["default"] = _default;