"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Table = _interopRequireDefault(require("../../Table"));

var ResourceInfoTable = function ResourceInfoTable(_ref) {
  var statistics = _ref.statistics,
      title = _ref.title,
      th1 = _ref.th1,
      th2 = _ref.th2,
      tableclass = _ref.tableclass;
  var numRows = 'rows' in statistics ? statistics.rows : '';
  var numColumns = 'columns' in statistics ? statistics.columns : '';
  var labelsT1 = {
    rows: {
      label: numRows.toString()
    }
  };
  var valuesT1 = {
    rows: numColumns.toString()
  };
  return _react["default"].createElement(_Table["default"], {
    configuration: labelsT1,
    data: valuesT1,
    title: title,
    th1: th1,
    th2: th2,
    tableclass: tableclass
  });
};

ResourceInfoTable.defaultProps = {
  th1: 'Rows',
  th2: 'Columns',
  tableclass: 'table-one'
};
ResourceInfoTable.propTypes = {
  statistics: _propTypes["default"].shape({
    columns: _propTypes["default"].number,
    rows: _propTypes["default"].number
  }).isRequired,
  title: _propTypes["default"].string.isRequired,
  th1: _propTypes["default"].string,
  th2: _propTypes["default"].string,
  tableclass: _propTypes["default"].string
};
var _default = ResourceInfoTable;
exports["default"] = _default;