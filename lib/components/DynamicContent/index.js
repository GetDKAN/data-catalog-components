"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _axios = _interopRequireDefault(require("axios"));

var _router = require("@reach/router");

var _dynamic_content = _interopRequireDefault(require("../../services/dynamic_content/dynamic_content"));

var DynamicContent = function DynamicContent(_ref) {
  var children = _ref.children,
      item = _ref.item,
      apiPrefix = _ref.apiPrefix,
      apiSuffix = _ref.apiSuffix,
      id = _ref.id,
      dynamicCallback = _ref.dynamicCallback;

  var _useState = (0, _react.useState)(item),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      content = _useState2[0],
      setContent = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      notFound = _useState4[0],
      setNotFound = _useState4[1];

  var _useState5 = (0, _react.useState)(true),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var apiUrl = "".concat(apiPrefix, "/").concat(id, "/").concat(apiSuffix);
  (0, _react.useEffect)(function () {
    function getDynamicContent() {
      return _getDynamicContent.apply(this, arguments);
    }

    function _getDynamicContent() {
      _getDynamicContent = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _axios["default"].get(apiUrl).then(function (response) {
                  // handle success
                  setContent(response.data);
                  setLoading(false);
                  dynamicCallback(response.data);
                })["catch"](function () {
                  // handle error
                  setNotFound(true);
                  setLoading(false);
                  (0, _router.navigate)('/404');
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getDynamicContent.apply(this, arguments);
    }

    if (!item) {
      getDynamicContent();
    } else {
      setLoading(false);
    }
  }, [item, dynamicCallback, apiUrl]);
  return _react["default"].createElement(_react["default"].Fragment, null, !notFound && content && !loading && _react["default"].createElement(_dynamic_content["default"].Provider, {
    value: {
      item: content
    }
  }, children));
};

DynamicContent.defaultProps = {
  item: null,
  apiSuffix: '',
  dynamicCallback: null
};
DynamicContent.propTypes = {
  children: _propTypes["default"].node.isRequired,
  item: _propTypes["default"].objectOf(_propTypes["default"].any),
  apiPrefix: _propTypes["default"].string.isRequired,
  apiSuffix: _propTypes["default"].string,
  id: _propTypes["default"].string.isRequired,
  dynamicCallback: _propTypes["default"].func
};
var _default = DynamicContent;
exports["default"] = _default;