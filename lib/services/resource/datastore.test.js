"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _datastore = require("./datastore");

test('Datastore', /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var datastore, results;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          datastore = new _datastore.dkan('blah', [], '');
          _context.next = 3;
          return datastore.query();

        case 3:
          results = _context.sent;
          expect(results).toEqual(null);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));