"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excerpts = _interopRequireDefault(require("excerpts"));

var _TopicIcon = _interopRequireDefault(require("../../templates/TopicIcon"));

var _TopicWrapper = _interopRequireDefault(require("../../components/TopicWrapper"));

var _DataIcon = _interopRequireDefault(require("../DataIcon"));

var _Text = _interopRequireDefault(require("../Text"));

var _router = require("@reach/router");

/* eslint-disable */
var SearchListItem = function SearchListItem(_ref) {
  var className = _ref.className,
      item = _ref.item;
  var ref = item.ref,
      title = item.title,
      description = item.description,
      publisher = item.publisher,
      format = item.format,
      theme = item.theme,
      identifier = item.identifier;

  function formats(distribution) {
    if (!distribution) {
      return null;
    }

    if ((0, _typeof2["default"])(distribution) === 'object') {
      distribution = Object.entries(distribution);
      return distribution.map(function (dist) {
        var type = dist[1].mediaType ? dist[1].mediaType.split('/') : '';
        var backup = type ? type[1] : 'data';
        var format = dist[1].format ? dist[1].format : backup;
        return _react["default"].createElement("div", {
          title: "format: ".concat(dist.format),
          key: "dist-id-".concat(identifier, "-").concat(Math.random() * 10),
          className: "label",
          "data-format": format
        }, format);
      });
    }

    if (Array.isArray(distribution)) {
      return distribution.map(function (dist) {
        var type = dist.mediaType ? dist.mediaType.split("/") : '';
        var backup = type ? type[1] : 'data';
        var format = dist.format ? dist.format : backup;
        return _react["default"].createElement("div", {
          title: "format: ".concat(dist.format),
          key: "dist-id-".concat(identifier, "-").concat(Math.random() * 10),
          className: "label",
          "data-format": format
        }, format);
      });
    }
  }

  function themes(theme) {
    if (!theme) {
      return null;
    } else {
      return theme.map(function (topic) {
        return _react["default"].createElement(_TopicWrapper["default"], {
          component: _TopicIcon["default"],
          topic: topic
        });
      });
    }
  }

  function publishers(publisher) {
    if (!publisher) {
      return null;
    } else {
      return _react["default"].createElement("span", null, _react["default"].createElement(_DataIcon["default"], {
        icon: "group",
        height: 20,
        width: 20
      }), publisher);
    }
  }

  return _react["default"].createElement("div", {
    className: className
  }, _react["default"].createElement("h2", null, _react["default"].createElement(_router.Link, {
    to: ref
  }, title)), publisher !== 'undefined' && _react["default"].createElement("div", {
    className: "dc-item-publisher"
  }, publishers(publisher)), theme && _react["default"].createElement("div", {
    className: "dc-item-theme"
  }, themes(theme)), description && _react["default"].createElement("div", {
    className: "dc-item-description"
  }, _react["default"].createElement(_Text["default"], null, (0, _excerpts["default"])(description, {
    words: 35
  }))), format && _react["default"].createElement("div", {
    className: "format-types"
  }, formats(format)));
};

SearchListItem.defaultProps = {
  className: 'dc-search-list-item'
};
SearchListItem.propTypes = {
  className: _propTypes["default"].string,
  item: _propTypes["default"].objectOf(_propTypes["default"].any).isRequired
};
var _default = SearchListItem;
exports["default"] = _default;