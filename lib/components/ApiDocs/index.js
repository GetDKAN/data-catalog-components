"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _swaggerUiReact = _interopRequireDefault(require("swagger-ui-react"));

require("swagger-ui-react/swagger-ui.css");

/* eslint-disable */
var ApiDocs = function ApiDocs(_ref) {
  var endpoint = _ref.endpoint,
      uuid = _ref.uuid;
  var url = uuid ? endpoint + "/" + uuid : endpoint;
  return _react["default"].createElement(_swaggerUiReact["default"], {
    url: url,
    docExpansion: "list"
  });
};

var _default = ApiDocs;
exports["default"] = _default;