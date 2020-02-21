"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

require("bootstrap/dist/css/bootstrap.min.css");

var _styledComponents = require("styled-components");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n\n  html {\n    /*Convert font size to base 10 for easier calculations (1rem = 10px)*/\n    font-size: 62.5%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

_fontawesomeSvgCore.library.add(_freeBrandsSvgIcons.fab, _freeSolidSvgIcons.fas);

var GlobalStyles = (0, _styledComponents.createGlobalStyle)(_templateObject());
var _default = GlobalStyles;
exports["default"] = _default;