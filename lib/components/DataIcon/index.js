"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var DataIcon = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(DataIcon, _React$PureComponent);

  var _super = _createSuper(DataIcon);

  function DataIcon() {
    (0, _classCallCheck2["default"])(this, DataIcon);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(DataIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          icon = _this$props.icon,
          height = _this$props.height,
          width = _this$props.width,
          color = _this$props.color;

      switch (icon) {
        case 'density-1':
          return /*#__PURE__*/_react["default"].createElement("svg", {
            width: width,
            height: height,
            viewBox: "0 0 160 160"
          }, /*#__PURE__*/_react["default"].createElement("path", {
            fill: color,
            d: "M141.441 46.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014V27.252c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496zM141.441 128.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014v-19.496c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496zM141.441 87.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014V68.252c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496z"
          }));

        case 'density-2':
          return /*#__PURE__*/_react["default"].createElement("svg", {
            width: width,
            height: height,
            viewBox: "0 0 160 160"
          }, /*#__PURE__*/_react["default"].createElement("path", {
            fill: color,
            d: "M141.551 36.002c0 1.757-1.35 3.182-3.014 3.182H17.682c-1.664 0-3.014-1.425-3.014-3.182V24.92c0-1.758 1.35-3.182 3.014-3.182h120.855c1.664 0 3.014 1.424 3.014 3.182v11.082zm0 20.943c0-1.758-1.35-3.182-3.014-3.182H17.682c-1.664 0-3.014 1.424-3.014 3.182v11.081c0 1.759 1.35 3.184 3.014 3.184h120.855c1.664 0 3.014-1.425 3.014-3.184V56.945zm0 32.026c0-1.758-1.35-3.183-3.014-3.183H17.682c-1.664 0-3.014 1.425-3.014 3.183v11.081c0 1.758 1.35 3.182 3.014 3.182h120.855c1.664 0 3.014-1.424 3.014-3.182V88.971zm0 32.025c0-1.758-1.35-3.182-3.014-3.182H17.682c-1.664 0-3.014 1.424-3.014 3.182v11.082c0 1.757 1.35 3.182 3.014 3.182h120.855c1.664 0 3.014-1.425 3.014-3.182v-11.082z"
          }));

        case 'density-3':
          return /*#__PURE__*/_react["default"].createElement("svg", {
            width: width,
            height: height,
            viewBox: "0 0 160 160"
          }, /*#__PURE__*/_react["default"].createElement("path", {
            fill: color,
            d: "M141.624 51.054a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496zM142.015 30.76a3.015 3.015 0 0 1-3.014 3.014H18.146a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014h120.855a3.014 3.014 0 0 1 3.014 3.014v6.496zM141.624 91.642a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496zM141.624 71.348a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496zM141.624 111.936a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496zM141.624 132.229a3.015 3.015 0 0 1-3.014 3.014H17.755a3.015 3.015 0 0 1-3.014-3.014v-6.496a3.014 3.014 0 0 1 3.014-3.014H138.61a3.014 3.014 0 0 1 3.014 3.014v6.496z"
          }));

        case 'group':
          return /*#__PURE__*/_react["default"].createElement("svg", {
            width: width,
            height: height,
            viewBox: "0 0 24 24"
          }, /*#__PURE__*/_react["default"].createElement("path", {
            fill: color,
            d: "M13.338 14.604c-.436-.157-.884-.318-1.338-.486v-1.924c.339-.336.913-1.149.991-2.837.459-.215.759-.735.759-1.393 0-.564-.222-1.028-.576-1.284.325-.646.833-1.74.561-2.836-.332-1.334-2.253-1.808-3.798-1.808-1.368 0-3.032.372-3.625 1.383-.731-.034-1.107.263-1.303.515-.596.769-.253 2.095-.07 2.808.03.115.056.205.061.222v2c0 1.89 1.162 2.931 2 3.337v1.817c-.405.151-.818.3-1.23.448-2.607.939-4.858 1.75-5.271 2.996C.006 19.051 0 22.36 0 22.5a.5.5 0 00.5.5h18a.5.5 0 00.5-.5c0-.14-.006-3.449-.499-4.938-.415-1.25-2.51-2.004-5.163-2.958zM1.007 22c.021-.971.104-3.104.441-4.124.26-.785 2.7-1.664 4.661-2.37.527-.19 1.058-.381 1.569-.575A.5.5 0 008 14.464v-2.5a.505.505 0 00-.349-.477C7.583 11.465 6 10.931 6 8.964v-2c0-.114-.031-.234-.092-.472-.111-.428-.404-1.564-.108-1.946.038-.048.249-.188.727-.092a.498.498 0 00.584-.37c.148-.598 1.364-1.049 2.827-1.049s2.679.451 2.827 1.049c.199.802-.281 1.749-.54 2.257-.145.286-.225.443-.225.623a.5.5 0 00.5.5c.172 0 .25.293.25.5 0 .208-.078.5-.25.5a.5.5 0 00-.5.5c0 2.01-.764 2.575-.763 2.575a.498.498 0 00-.237.425v2.5a.5.5 0 00.324.468c.568.214 1.131.417 1.676.613 2.109.759 4.291 1.544 4.552 2.332.337 1.018.421 3.152.441 4.124H1.007z"
          }), /*#__PURE__*/_react["default"].createElement("path", {
            fill: color,
            d: "M23.501 17.562c-.388-1.167-2.337-2.352-6.501-3.942v-.925c.339-.337.913-1.15.991-2.837.192-.09.358-.235.487-.429.175-.263.271-.605.271-.965 0-.572-.228-1.041-.589-1.294.322-.694.85-1.899.575-3.01-.173-.693-.962-1.454-1.877-1.808-.893-.346-1.785-.27-2.51.215a.5.5 0 10.554.832c.574-.382 1.185-.273 1.595-.115.705.274 1.197.834 1.268 1.117.203.815-.288 1.868-.55 2.433-.143.306-.215.46-.215.63a.498.498 0 00.5.5c.172 0 .25.293.25.5a.77.77 0 01-.104.41c-.055.083-.103.09-.146.09a.5.5 0 00-.5.5c0 2.01-.764 2.575-.763 2.575a.498.498 0 00-.237.425v1.5a.5.5 0 00.324.468c3.856 1.454 5.952 2.613 6.228 3.445.337 1.018.421 3.152.441 4.124H21A.5.5 0 0021 23h2.5a.5.5 0 00.5-.5c0-.14-.006-3.449-.499-4.938z"
          }));

        case 'select':
          return /*#__PURE__*/_react["default"].createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: width,
            height: height,
            viewBox: "0 0 10 14"
          }, /*#__PURE__*/_react["default"].createElement("g", {
            fill: color,
            fillRule: "evenodd"
          }, /*#__PURE__*/_react["default"].createElement("path", {
            d: "M.62639628 5.99993896H9.3727389c.25339173.00130856.482416-.15074264.57956202-.38477624.09714598-.2340336.04312294-.50357616-.13670922-.6820964L5.4401815.1835435C5.32475606.06613116 5.1670083 0 5.00236114 0c-.16464716 0-.3223949.06613117-.43782037.1835435L.1835435 4.93306632C.06613116 5.0484918 0 5.20623953 0 5.3708867s.06613117.32239492.1835435.43782038c.1146444.1224934.27508006.19177244.44285278.19123188zM9.3727389 7.9999685H.6263963c-.1662653-.00316183-.32647608.06237894-.4428528.18116705C.0661312 8.296561 0 8.45430875 0 8.61895592s.06613117.32239492.1835435.43782037l4.38099726 4.7596802C4.67996622 13.9338688 4.83771396 14 5.00236113 14s.32239492-.0661312.43782038-.1835435l4.3754102-4.74961537c.17983216-.17852023.2338552-.44806278.13670922-.68209638-.09714602-.2340336-.3261703-.3860848-.579562-.38477625z"
          })));

        case 'times':
          return /*#__PURE__*/_react["default"].createElement("svg", {
            width: width,
            height: height,
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 352 512"
          }, /*#__PURE__*/_react["default"].createElement("path", {
            fill: color,
            d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
          }));

        default:
          return /*#__PURE__*/_react["default"].createElement("svg", {
            width: width,
            height: height,
            viewBox: "0 0 160 160"
          }, /*#__PURE__*/_react["default"].createElement("path", {
            fill: color,
            d: "M141.441 46.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014V27.252c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496zM141.441 128.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014v-19.496c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496zM141.441 87.748c0 1.664-1.35 3.014-3.014 3.014H17.572c-1.664 0-3.014-1.35-3.014-3.014V68.252c0-1.665 1.35-3.014 3.014-3.014h120.855c1.664 0 3.014 1.349 3.014 3.014v19.496z"
          }));
      }
    }
  }]);
  return DataIcon;
}(_react["default"].PureComponent);

DataIcon.defaultProps = {
  icon: 'density-1',
  color: 'black',
  width: 20,
  height: 20
};
DataIcon.propTypes = {
  icon: _propTypes["default"].string,
  color: _propTypes["default"].string,
  width: _propTypes["default"].number,
  height: _propTypes["default"].number
};
var _default = DataIcon;
exports["default"] = _default;