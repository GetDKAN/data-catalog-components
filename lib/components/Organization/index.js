"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.countDatasetsByName = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _router = require("@reach/router");

var _PublisherDatasetCountByName = _interopRequireDefault(require("../PublisherDatasetCountByName"));

var _axios = _interopRequireDefault(require("axios"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Organization(props) {
  var name = props.name,
      description = props.description,
      imageUrl = props.imageUrl,
      searchUrl = props.searchUrl,
      alignment = props.alignment,
      organizationEndpoint = props.organizationEndpoint;

  var image = /*#__PURE__*/_react["default"].createElement("img", {
    alt: name || 'Organization Image',
    src: imageUrl
  });

  var link = searchUrl ? searchUrl : "/search/?publisher__name=".concat(name);

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      dataObj = _useState2[0],
      setDataObj = _useState2[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var endpoint;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              endpoint = organizationEndpoint ? organizationEndpoint.replace("api/1", "data.json") : null;

              if (endpoint) {
                _axios["default"].get(endpoint).then(function (res) {
                  return setDataObj(res.data);
                })["catch"](function (err) {
                  return console.log("Error, check URL/Cors.", err);
                });
              } else {
                console.log("No search endpoint defined for Organization/s, so no dataset info available.");
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    fetchData();
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-org-block",
    style: {
      textAlign: alignment
    }
  }, /*#__PURE__*/_react["default"].createElement(_router.Link, {
    to: link,
    className: "dc-org-image",
    alt: "Organization Logo"
  }, image, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "dc-org-name"
  }, name)), description && /*#__PURE__*/_react["default"].createElement("div", {
    className: "dc-org-description"
  }, description), dataObj && dataObj.dataset !== 'undefined' ? /*#__PURE__*/_react["default"].createElement(_PublisherDatasetCountByName["default"], {
    name: name,
    datasetCount: countDatasetsByName(name, dataObj.dataset)
  }) : /*#__PURE__*/_react["default"].createElement(_PublisherDatasetCountByName["default"], {
    name: name
  }));
}

var countDatasetsByName = function countDatasetsByName(publisher, datasets) {
  var publishers = datasets.map(function (data, index, arr) {
    return data.publisher;
  });
  var result = publishers.filter(function (p) {
    return p.name === publisher;
  });

  if (typeof result !== 'undefined' && result.length) {
    return result.length;
  }

  return null;
};

exports.countDatasetsByName = countDatasetsByName;
Organization.defaultProps = {
  alignment: "center",
  name: "",
  description: "",
  imageUrl: "https://s3.amazonaws.com/dkan-default-content-files/files/group.png"
};
Organization.propTypes = {
  alignment: _propTypes["default"].string,
  name: _propTypes["default"].string,
  description: _propTypes["default"].string,
  imageUrl: _propTypes["default"].string,
  searchUrl: _propTypes["default"].string,
  organizationEndpoint: _propTypes["default"].string
};
var _default = Organization;
exports["default"] = _default;