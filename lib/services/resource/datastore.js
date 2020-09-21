"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var datastore = {
  create: function create(id, rootUrl) {
    var entity = Object.create(this);

    if (rootUrl.slice(-1) === '/') {
      entity.rootUrl = rootUrl.slice(0, -1);
    } else {
      entity.rootUrl = rootUrl;
    }

    entity.id = id;
    entity.columns = null;
    return entity;
  },
  getDatastoreInfo: function () {
    var _getDatastoreInfo = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios["default"].get("".concat(this.rootUrl, "/datastore/imports/").concat(this.id)).then(function (data) {
                if (data) {
                  return data.data;
                }

                return null;
              })["catch"](function (error) {
                return console.error(error);
              });

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getDatastoreInfo() {
      return _getDatastoreInfo.apply(this, arguments);
    }

    return getDatastoreInfo;
  }(),
  query: function () {
    var _query = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var q,
          fields,
          facets,
          range,
          page,
          sort,
          count,
          showDBColumnNames,
          new_q,
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
              this.showDBColumnNames = showDBColumnNames;

              if (sort === null) {
                sort = [];
              }

              ;
              new_q = [];

              if (q !== null) {
                new_q = JSON.parse(JSON.stringify(q));
              }

              ;
              new_q.map(function (v) {
                v.value = "%25".concat(v.value, "%25");
                return v;
              });
              return _context2.abrupt("return", this.fetch(range, page * range, new_q, sort[0], count, showDBColumnNames));

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function query() {
      return _query.apply(this, arguments);
    }

    return query;
  }(),
  fetch: function () {
    var _fetch = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(limit, offset, where, sort, count, showDBColumnNames) {
      var _this = this;

      var query, where_string, where_clauses, sort_string, fields, limit_string, dbColumns;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              query = '';
              where_string = '';

              if (where.length !== 0) {
                where_clauses = [];
                where.forEach(function (v, i) {
                  where_clauses[i] = "".concat(v.id, " = \"").concat(v.value.replace('"', ''), "\"");
                });
                where_string = "[WHERE ".concat(where_clauses.join(' AND '), "]");
              }

              sort_string = '';

              if ((0, _typeof2["default"])(sort) === 'object') {
                sort_string = "[ORDER BY ".concat(sort.id, "]");

                if (sort.desc) {
                  sort_string += 'DESC]';
                } else {
                  sort_string += 'ASC]';
                }
              }

              fields = '';
              limit_string = '';

              if (count) {
                fields = 'COUNT(*)';
              } else {
                fields = '*';
                limit_string = "[LIMIT ".concat(limit, " OFFSET ").concat(offset, "]");
              }

              dbColumns = showDBColumnNames ? '&show-db-columns' : '';
              query = "/datastore/sql/?query=[SELECT ".concat(fields, " FROM ").concat(this.id, "]").concat(where_string).concat(sort_string).concat(limit_string, ";").concat(dbColumns);
              console.log('q', query);
              _context3.next = 13;
              return _axios["default"].get(this.rootUrl + query).then(function (res) {
                _this.data = res.data;
                return {
                  data: _this.data,
                  count: _this.data.length
                };
              })["catch"](function (error) {
                _this.data = [];
                console.error(error);
                return _this.data;
              });

            case 13:
              return _context3.abrupt("return", _context3.sent);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function fetch(_x, _x2, _x3, _x4, _x5, _x6) {
      return _fetch.apply(this, arguments);
    }

    return fetch;
  }()
};
var _default = datastore;
exports["default"] = _default;