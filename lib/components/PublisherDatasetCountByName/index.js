"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _router = require("@reach/router");

var PublisherDatasetCountByName = function PublisherDatasetCountByName(props) {
  var name = props.name,
      searchUrl = props.searchUrl,
      datasetCount = props.datasetCount;
  var link = searchUrl ? searchUrl : "/search/?publisher__name=".concat(name);
  var str;

  if (datasetCount) {
    str = datasetCount === 1 ? '1 dataset' : "".concat(datasetCount, " datasets");
  } else {
    str = 'datasets';
  }

  return /*#__PURE__*/_react["default"].createElement(_router.Link, {
    to: link,
    className: "publisher-datasets-link",
    alt: "Publisher datasets"
  }, str);
};

var _default = PublisherDatasetCountByName;
exports["default"] = _default;
PublisherDatasetCountByName.propTypes = {
  name: _propTypes["default"].string,
  searchUrl: _propTypes["default"].string,
  datasetCount: _propTypes["default"].string
};