"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLoaderAdvanced = _interopRequireDefault(require("react-loader-advanced"));

var _reactLoadingSpin = _interopRequireDefault(require("react-loading-spin"));

var _FileDownload = _interopRequireDefault(require("../FileDownload"));

var _withResource = _interopRequireDefault(require("./withResource"));

var _DataTable = _interopRequireDefault(require("./DataTable"));

var _DataTableHeader = _interopRequireDefault(require("./DataTableHeader"));

var _InfoTable = _interopRequireDefault(require("./InfoTable"));

var _useDatasetUrl = _interopRequireDefault(require("../../services/hooks/useDatasetUrl"));

var Resource = function Resource(_ref) {
  var data = _ref.data,
      dataPreview = _ref.dataPreview,
      dataInfo = _ref.dataInfo,
      dataFunctions = _ref.dataFunctions,
      infoTableOptions = _ref.infoTableOptions,
      headerOptions = _ref.headerOptions,
      datasetId = _ref.datasetId,
      showFileDownload = _ref.showFileDownload;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      show = _useState2[0],
      toggleShow = _useState2[1];

  (0, _react.useEffect)(function () {
    if (dataPreview.values.length > 0) {
      toggleShow(false);
    }
  }, [dataPreview.values.length]);
  var datasetURL = dataInfo.data ? (0, _useDatasetUrl["default"])(dataInfo.data) : '';
  var hideTable = infoTableOptions.hideTable;
  var hideHeader = headerOptions.hideHeader;
  var values = 'values' in dataPreview ? dataPreview.values : [];
  var columns = 'columns' in dataPreview ? dataPreview.columns : [];
  var dataKey = dataInfo.indentifier;
  var pageSize = 'pageSize' in dataPreview ? dataPreview.pageSize : 20;
  var pages = Math.ceil(parseInt(dataPreview.rowsTotal, 10) / pageSize);
  var statistics = 'datastore_statistics' in dataInfo ? dataInfo.datastore_statistics : {
    rows: parseInt(dataPreview.rowsTotal, 10),
    columns: columns.length
  };
  var type = dataInfo.data && dataInfo.data.mediaType ? dataInfo.data.mediaType.split('/') : '';
  var backup = type ? type[1] : '';
  var format = dataInfo.data && dataInfo.data.format ? dataInfo.data.format : backup;

  var FullScreenModal = function FullScreenModal() {
    if (dataKey) {
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_DataTableHeader["default"], {
        dataPreview: dataPreview,
        options: headerOptions,
        dataFunctions: dataFunctions,
        id: datasetId,
        fullScreenMode: true
      }), _react["default"].createElement(_DataTable["default"], {
        index: 1,
        key: dataKey,
        loading: show,
        pageSize: pageSize,
        pages: pages,
        data: values,
        filtered: dataPreview.filters,
        columns: dataFunctions.activeColumns(dataPreview.columns),
        density: dataPreview.density,
        sortedChange: dataFunctions.sortChange,
        filterChange: dataFunctions.filterChange,
        pageChange: dataFunctions.pageChange
      }));
    }

    return null;
  };

  return _react["default"].createElement("div", {
    className: "resource-container"
  }, dataKey ? _react["default"].createElement(_reactLoaderAdvanced["default"], {
    backgroundStyle: {
      backgroundColor: '#f9fafb'
    },
    foregroundStyle: {
      backgroundColor: '#f9fafb'
    },
    show: show,
    message: _react["default"].createElement(_reactLoadingSpin["default"], {
      width: "3px",
      primaryColor: "#007BBC"
    })
  }, dataInfo.data && showFileDownload && _react["default"].createElement(_FileDownload["default"], {
    format: format,
    downloadURL: datasetURL,
    title: dataInfo.data.title,
    key: "".concat(dataKey, "-file-download")
  }), hideHeader ? _react["default"].createElement("div", {
    className: "row-results"
  }, _react["default"].createElement("strong", null, "Rows:"), ' ', dataPreview.rowsTotal) : _react["default"].createElement(_DataTableHeader["default"], {
    dataPreview: dataPreview,
    options: headerOptions,
    dataFunctions: dataFunctions,
    id: datasetId,
    FullScreenComponent: FullScreenModal
  }), _react["default"].createElement(_DataTable["default"], {
    index: 1,
    key: dataKey,
    loading: show,
    pageSize: pageSize,
    pages: pages,
    data: values,
    filtered: dataPreview.filters,
    columns: dataFunctions.activeColumns(dataPreview.columns),
    density: dataPreview.density,
    sortedChange: dataFunctions.sortChange,
    filterChange: dataFunctions.filterChange,
    pageChange: dataFunctions.pageChange
  }), !hideTable && _react["default"].createElement(_InfoTable["default"], {
    statistics: statistics,
    title: infoTableOptions.title,
    th1: infoTableOptions.th1,
    th2: infoTableOptions.th2,
    tableclass: infoTableOptions.tableclass
  })) : _react["default"].createElement("div", null, dataInfo.data && _react["default"].createElement(_FileDownload["default"], {
    format: format,
    downloadURL: datasetURL,
    title: dataInfo.data.title,
    key: "".concat(data.indentifier, "-file-download")
  })));
};

Resource.defaultProps = {
  headerOptions: {
    hideHeader: false,
    pageSizer: {},
    pageResults: {},
    advancedOptions: {},
    tableDensity: {},
    fullScreen: {}
  },
  infoTableOptions: {
    hideTable: false,
    title: 'What\'s in this Dataset?',
    th1: 'Rows',
    th2: 'Columns',
    tableclass: 'table-one'
  },
  dataInfo: {},
  showFileDownload: true
};
Resource.propTypes = {
  data: _propTypes["default"].shape({
    data: _propTypes["default"].objectOf(_propTypes["default"].string),
    indentifier: _propTypes["default"].string
  }).isRequired,
  headerOptions: _propTypes["default"].shape({
    hideHeader: _propTypes["default"].bool,
    options: _propTypes["default"].objectOf(_propTypes["default"].object)
  }),
  dataFunctions: _propTypes["default"].objectOf(_propTypes["default"].func).isRequired,
  infoTableOptions: _propTypes["default"].shape({
    hideTable: _propTypes["default"].bool,
    title: _propTypes["default"].string,
    th1: _propTypes["default"].string,
    th2: _propTypes["default"].string,
    tableclass: _propTypes["default"].string
  }),
  dataPreview: _propTypes["default"].shape({
    columnOrder: _propTypes["default"].array,
    columns: _propTypes["default"].array,
    currentPage: _propTypes["default"].number,
    density: _propTypes["default"].string,
    excludedColumns: _propTypes["default"].object,
    filters: _propTypes["default"].array,
    pageSize: _propTypes["default"].number,
    rowsTotal: _propTypes["default"].string,
    sort: _propTypes["default"].array,
    values: _propTypes["default"].array
  }).isRequired,
  dataInfo: _propTypes["default"].shape({
    columns: _propTypes["default"].array,
    data: _propTypes["default"].object,
    datastore_statistics: _propTypes["default"].object,
    indentifier: _propTypes["default"].string
  }),
  datasetId: _propTypes["default"].string.isRequired,
  showFileDownload: _propTypes["default"].bool
};

var _default = (0, _withResource["default"])(Resource);

exports["default"] = _default;