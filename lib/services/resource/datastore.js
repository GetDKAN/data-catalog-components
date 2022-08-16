"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.dkan = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _api = require("./api");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Datastore = /*#__PURE__*/function () {
  function Datastore() {
    (0, _classCallCheck2["default"])(this, Datastore);
  }

  (0, _createClass2["default"])(Datastore, [{
    key: "query",
    value: function () {
      var _query2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
        var _query,
            fields,
            facets,
            range,
            page,
            sort,
            _args = arguments;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _query = _args.length > 0 && _args[0] !== undefined ? _args[0] : null;
                fields = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                facets = _args.length > 2 && _args[2] !== undefined ? _args[2] : null;
                range = _args.length > 3 && _args[3] !== undefined ? _args[3] : null;
                page = _args.length > 4 && _args[4] !== undefined ? _args[4] : null;
                sort = _args.length > 5 && _args[5] !== undefined ? _args[5] : null;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function query() {
        return _query2.apply(this, arguments);
      }

      return query;
    }()
  }]);
  return Datastore;
}();

var dkan = /*#__PURE__*/function (_Datastore) {
  (0, _inherits2["default"])(dkan, _Datastore);

  var _super = _createSuper(dkan);

  function dkan(id, columns, rootUrl) {
    var _this;

    (0, _classCallCheck2["default"])(this, dkan);
    _this = _super.call(this);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "id", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "columns", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "rootUrl", null);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "labelToColumns", null);
    _this.id = id;
    _this.columns = columns;
    _this.rootUrl = rootUrl;
    _this.labelToColumns = [];
    return _this;
  }

  (0, _createClass2["default"])(dkan, [{
    key: "query",
    value: function () {
      var _query3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var _this2 = this;

        var q,
            fields,
            facets,
            range,
            page,
            sort,
            count,
            showDBColumnNames,
            _yield$getDatastoreIn,
            columns,
            sort_object,
            id,
            new_q,
            query,
            results,
            _args2 = arguments;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                q = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
                fields = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
                facets = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;
                range = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : null;
                page = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : null;
                sort = _args2.length > 5 && _args2[5] !== undefined ? _args2[5] : null;
                count = _args2.length > 6 && _args2[6] !== undefined ? _args2[6] : false;
                showDBColumnNames = _args2.length > 7 ? _args2[7] : undefined;
                _context2.next = 10;
                return (0, _api.getDatastoreInfo)(this.rootUrl, this.id);

              case 10:
                _yield$getDatastoreIn = _context2.sent;
                columns = _yield$getDatastoreIn.columns;
                this.labelToColumns = columns;

                if (sort === null) {
                  sort = [];
                }

                sort_object = sort[0];

                if ((0, _typeof2["default"])(sort_object) === 'object') {
                  sort_object = JSON.parse(JSON.stringify(sort_object));
                  id = this.getRealColumnName(sort_object.id);
                  sort_object.id = id;
                }

                new_q = [];

                if (q !== null) {
                  new_q = JSON.parse(JSON.stringify(q));
                }

                new_q.map(function (v) {
                  v.id = _this2.getRealColumnName(v.id);
                  v.value = "%25".concat(v.value, "%25");
                  return v;
                });
                query = this.generateQuery(range, page * range, new_q, sort_object, count, showDBColumnNames);
                _context2.next = 22;
                return (0, _api.runSqlQuery)(this.rootUrl, query);

              case 22:
                results = _context2.sent;
                return _context2.abrupt("return", {
                  data: results,
                  count: results.length
                });

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function query() {
        return _query3.apply(this, arguments);
      }

      return query;
    }()
  }, {
    key: "generateQuery",
    value: function generateQuery(limit, offset, where, sort, count, showDBColumnNames) {
      var where_string = '';

      if (where.length !== 0) {
        var where_clauses = [];
        where.forEach(function (v, i) {
          // Switch delimiter to, and strip any double-quote for Dkan2's sql query.
          where_clauses[i] = "".concat(v.id, " = \"").concat(v.value.replace('"', ''), "\"");
        });
        where_string = "[WHERE ".concat(where_clauses.join(' AND '), "]");
      }

      var sort_string = '';

      if ((0, _typeof2["default"])(sort) === 'object') {
        var id = this.getRealColumnName(sort.id);
        sort_string = "[ORDER BY ".concat(id);

        if (sort.desc === false) {
          sort_string += ' ASC]';
        } else {
          sort_string += ' DESC]';
        }
      }

      var fields = '';
      var limit_string = '';

      if (count) {
        fields = 'COUNT(*)';
      } else {
        fields = '*';
        limit_string = "[LIMIT ".concat(limit, " OFFSET ").concat(offset, "]");
      }

      var dbColumns = showDBColumnNames ? '&show-db-columns' : '';
      return "[SELECT ".concat(fields, " FROM ").concat(this.id, "]").concat(where_string).concat(sort_string).concat(limit_string, ";").concat(dbColumns);
    }
    /**
     * Translate a column to the 'real' column name.
     *
     * The frontend could be displaying the real column name or a label.
     * This function returns the correct value needed for querying.
     *
     * If we can't determine what the real column name is, we return an empty
     * string.
     */

  }, {
    key: "getRealColumnName",
    value: function getRealColumnName(column) {
      var _this3 = this;

      var machineNames = Object.keys(this.labelToColumns);

      if (machineNames.includes(column)) {
        return column;
      }

      var realColumn = machineNames.reduce(function (accumulator, currentValue) {
        var info = _this3.labelToColumns[currentValue];

        if (info.hasOwnProperty('description') && info.description === column) {
          accumulator += currentValue;
        }

        return accumulator;
      }, "");

      if (realColumn.length > 0) {
        return realColumn;
      }

      return "";
    }
  }]);
  return dkan;
}(Datastore);

exports.dkan = dkan;
var datastore = {
  dkan: dkan
};
var _default = datastore;
exports["default"] = _default;