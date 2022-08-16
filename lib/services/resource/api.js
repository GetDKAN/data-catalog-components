"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runSqlQuery = exports.getDatastoreInfo = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

var getDatastoreInfo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(rootUrl, id) {
    var _yield$axios, data;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _axios["default"])({
              method: 'GET',
              operationId: 'getDatastoreInfo',
              baseURL: rootUrl,
              url: "/datastore/imports/".concat(id)
            });

          case 2:
            _yield$axios = _context.sent;
            data = _yield$axios.data;
            return _context.abrupt("return", data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getDatastoreInfo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getDatastoreInfo = getDatastoreInfo;

var runSqlQuery = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(rootUrl, query) {
    var _yield$axios2, data;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _axios["default"])({
              method: 'GET',
              operationId: 'runSqlQuery',
              baseURL: rootUrl,
              url: "/datastore/sql/?query=".concat(query)
            });

          case 2:
            _yield$axios2 = _context2.sent;
            data = _yield$axios2.data;
            return _context2.abrupt("return", data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function runSqlQuery(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.runSqlQuery = runSqlQuery;