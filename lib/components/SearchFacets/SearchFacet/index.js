"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactstrap = require("reactstrap");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _lodash = require("lodash");

var _search_functions = require("../../../services/search/search_functions");

var _ToggleBlock = _interopRequireDefault(require("../../ToggleBlock"));

var _ShowMoreContainer = _interopRequireDefault(require("../../ShowMoreContainer"));

_fontawesomeSvgCore.library.add(_freeSolidSvgIcons.fas);

var SearchFacet = function SearchFacet(_ref) {
  var facetType = _ref.facetType,
      label = _ref.label,
      facets = _ref.facets,
      dispatch = _ref.dispatch,
      selected = _ref.selected,
      toggleClasses = _ref.toggleClasses,
      InputComponent = _ref.InputComponent,
      _ref$reset = _ref.reset,
      resetActive = _ref$reset.active,
      resetIcon = _ref$reset.icon,
      selectedFacets = _ref.selectedFacets,
      inputType = _ref.inputType,
      onMore = _ref.onMore,
      onLess = _ref.onLess;
  var myLabel = '';

  if (!label) {
    myLabel = facetType;
  } else {
    myLabel = label;
  }

  var choices = facets.map(function (item) {
    var itemName = item.name;
    var itemTotal = item.total;
    var key = "".concat(facetType.toLowerCase(), "-").concat(itemName.replace(/\s/g, ''), "-").concat(Math.random() * 100);
    var checked = selected.filter(function (selectedFacet) {
      return selectedFacet === itemName;
    }).length > 0 || false;

    var onChangeFunction = function onChangeFunction(e) {
      var value = e.target.value;
      var found = selected.indexOf(value);

      if (found > -1) {
        selected.splice(found, 1);
      } else {
        selected.push(value);
      }

      var newFacet = [facetType, value];

      if (inputType === 'radio') {
        return dispatch({
          type: 'RESET_FACETS',
          data: {
            selectedFacets: [].concat((0, _toConsumableArray2["default"])(selectedFacets.filter(function (_ref2) {
              var _ref3 = (0, _slicedToArray2["default"])(_ref2, 1),
                  type = _ref3[0];

              return type !== facetType;
            })), [newFacet])
          }
        });
      }

      dispatch({
        type: 'UPDATE_FACETS',
        data: {
          newFacet: newFacet
        }
      });
    };

    if (InputComponent) {
      return /*#__PURE__*/_react["default"].createElement(InputComponent, {
        key: key,
        checked: checked,
        name: facetType,
        type: inputType,
        value: itemName,
        onChange: onChangeFunction
      }, "".concat(itemName, " (").concat(itemTotal, ")"));
    }

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "dc-facet-option",
      key: key
    }, /*#__PURE__*/_react["default"].createElement(_reactstrap.Input, {
      checked: checked,
      id: key,
      name: facetType,
      type: inputType,
      value: itemName,
      onChange: onChangeFunction
    }), /*#__PURE__*/_react["default"].createElement(_reactstrap.Label, {
      htmlFor: key
    }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: ['fas', checked ? 'check-square' : 'square'],
      size: "1x",
      "aria-hidden": "true",
      role: "presentation"
    }), "".concat(itemName, " (").concat(itemTotal, ")")));
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-search-facet-container"
  }, resetActive && !(0, _lodash.isEmpty)(selected) ? /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: function onClick() {
      return dispatch((0, _search_functions.resetSelectedFacets)(selectedFacets, facetType));
    },
    className: "facet-reset-button"
  }, resetIcon && /*#__PURE__*/_react["default"].createElement("span", {
    className: "undo-icon"
  }, resetIcon), "Reset") : null, /*#__PURE__*/_react["default"].createElement(_ToggleBlock["default"], {
    key: facetType // TODO: Fix this so it's adjustable
    ,
    title: /*#__PURE__*/_react["default"].createElement("span", null, myLabel),
    headingClasses: "facet-block-".concat(facetType, "-inner").concat(toggleClasses ? " ".concat(toggleClasses) : ''),
    innerClasses: "inner-".concat(facetType, "-facets")
  }, /*#__PURE__*/_react["default"].createElement(_ShowMoreContainer["default"], {
    container: "div",
    items: choices,
    limit: 10,
    onMore: onMore,
    onLess: onLess
  })));
};

SearchFacet.defaultProps = {
  label: '',
  selected: [],
  toggleClasses: null,
  InputComponent: null,
  selectedFacets: [],
  reset: {
    active: false
  },
  inputType: 'checkbox'
};
SearchFacet.propTypes = {
  facetType: _propTypes["default"].string.isRequired,
  facets: _propTypes["default"].arrayOf(_propTypes["default"].arrayOf).isRequired,
  dispatch: _propTypes["default"].func.isRequired,
  label: _propTypes["default"].string,
  selected: _propTypes["default"].arrayOf(_propTypes["default"].arrayOf),
  toggleClasses: _propTypes["default"].string,
  InputComponent: _propTypes["default"].func,
  selectedFacets: _propTypes["default"].arrayOf(_propTypes["default"].array),
  reset: _propTypes["default"].shape({
    active: _propTypes["default"].bool,
    icon: _propTypes["default"].func
  }),
  inputType: _propTypes["default"].string,
  onMore: _propTypes["default"].func,
  onLess: _propTypes["default"].func
};
var _default = SearchFacet;
exports["default"] = _default;