"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _swaggerUiReact = _interopRequireDefault(require("swagger-ui-react"));

require("swagger-ui-react/swagger-ui.css");

var ApiDocs = function ApiDocs(_ref) {
  var endpoint = _ref.endpoint,
      uuid = _ref.uuid;
  var url = uuid ? "".concat(endpoint, "/").concat(uuid) : endpoint;
  return typeof window === 'undefined' ? null : /*#__PURE__*/_react["default"].createElement(_swaggerUiReact["default"], {
    url: url,
    docExpansion: "list"
  });
};

ApiDocs.defaultProps = {
  uuid: ''
};
ApiDocs.propTypes = {
  endpoint: _propTypes["default"].string.isRequired,
  uuid: _propTypes["default"].string
};
var _default = ApiDocs;
exports["default"] = _default;