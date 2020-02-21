"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DataTablePageResults = _interopRequireDefault(require("./DataTablePageResults"));

var _DataTableDensity = _interopRequireDefault(require("./DataTableDensity"));

var _DataTablePageSizer = _interopRequireDefault(require("./DataTablePageSizer"));

var _AdvancedOptions = _interopRequireDefault(require("./AdvancedOptions"));

var _Wrapper = _interopRequireDefault(require("./Wrapper"));

var _FullScreenResource = _interopRequireDefault(require("./FullScreenResource"));

var DataTableHeader = function DataTableHeader(_ref) {
  var dataPreview = _ref.dataPreview,
      id = _ref.id,
      dataFunctions = _ref.dataFunctions,
      className = _ref.className,
      options = _ref.options,
      FullScreenComponent = _ref.FullScreenComponent,
      fullScreenMode = _ref.fullScreenMode;
  var pageSizer = options.pageSizer,
      pageResults = options.pageResults,
      advancedOptions = options.advancedOptions,
      tableDensity = options.tableDensity,
      fullScreen = options.fullScreen;
  var pageResultsClass = pageResults.className,
      hidePageResults = pageResults.hidePageResults;
  var label = pageSizer.label,
      selectOptions = pageSizer.selectOptions,
      pageSizerClass = pageSizer.className,
      hidePageSizer = pageSizer.hidePageSizer,
      selectClassName = pageSizer.selectClassName;
  var items = tableDensity.items,
      densityClass = tableDensity.className,
      screenReaderClass = tableDensity.screenReaderClass,
      title = tableDensity.title,
      hideDisplayDensity = tableDensity.hideDisplayDensity;
  var titleText = advancedOptions.titleText,
      actionsClassNames = advancedOptions.actionsClassNames,
      actionText = advancedOptions.actionText,
      showAction = advancedOptions.showAction,
      appNode = advancedOptions.appNode,
      closeModalBtnText = advancedOptions.closeModalBtnText,
      modalOpenBtnText = advancedOptions.modalOpenBtnText,
      actionButtonClassNames = advancedOptions.actionButtonClassNames,
      hideAdvancedOptions = advancedOptions.hideAdvancedOptions,
      underlayClass = advancedOptions.underlayClass,
      includeDefaultStyles = advancedOptions.includeDefaultStyles,
      dialogClass = advancedOptions.dialogClass,
      modalClass = advancedOptions.modalClass,
      itemClasses = advancedOptions.itemClasses,
      headerClass = advancedOptions.headerClass,
      closeModalClasses = advancedOptions.closeModalClasses;
  var fsModalOpenBtnText = fullScreen.modalOpenBtnText,
      fsDialogClass = fullScreen.dialogClass,
      fsHeaderClass = fullScreen.headerClass,
      fsModalClass = fullScreen.modalClass,
      fsCloseModalBtnText = fullScreen.closeModalBtnText,
      fsCloseModalClasses = fullScreen.closeModalClasses,
      fsTitleText = fullScreen.titleText,
      fsAppNode = fullScreen.appNode,
      fsIncludeDefaultStyles = fullScreen.includeDefaultStyles,
      fsUnderlayClass = fullScreen.underlayClass,
      hideFullScreen = fullScreen.hideFullScreen;
  return _react["default"].createElement(_Wrapper["default"], null, _react["default"].createElement("div", {
    className: className
  }, !hidePageResults && _react["default"].createElement(_DataTablePageResults["default"], {
    total: parseInt(dataPreview.rowsTotal, 10),
    pageSize: dataPreview.pageSize,
    currentPage: dataPreview.currentPage,
    className: pageResultsClass
  }), !hidePageSizer && _react["default"].createElement(_DataTablePageSizer["default"], {
    pageSizeChange: dataFunctions.pageSizeChange,
    currentOption: dataPreview.pageSize.toString(),
    label: label,
    options: selectOptions,
    selectClassName: selectClassName,
    className: pageSizerClass,
    id: id
  }), !hideDisplayDensity && _react["default"].createElement(_DataTableDensity["default"], {
    densityChange: dataFunctions.densityChange,
    items: items,
    className: densityClass,
    screenReaderClass: screenReaderClass,
    title: title
  }), !hideAdvancedOptions && _react["default"].createElement(_AdvancedOptions["default"], {
    columns: dataPreview.columns,
    excludedColumns: dataPreview.excludedColumns,
    columnOrder: dataPreview.columnOrder,
    toggleColumns: dataFunctions.toggleColumns,
    reorderColumns: dataFunctions.reorderColumns,
    modalClass: modalClass,
    className: dialogClass,
    titleText: titleText,
    itemClasses: itemClasses,
    headerClass: headerClass,
    closeModalClasses: closeModalClasses,
    includeDefaultStyles: includeDefaultStyles,
    underlayClass: underlayClass,
    actionButtonClassNames: actionButtonClassNames,
    modalOpenBtnText: modalOpenBtnText,
    closeModalBtnText: closeModalBtnText,
    appNode: appNode,
    showAction: showAction,
    actionText: actionText,
    actionsClassNames: actionsClassNames
  }), (!hideFullScreen && !fullScreenMode || !fullScreenMode) && _react["default"].createElement(_FullScreenResource["default"], {
    modalOpenBtnText: fsModalOpenBtnText,
    className: fsDialogClass,
    headerClass: fsHeaderClass,
    modalClass: fsModalClass,
    closeModalBtnText: fsCloseModalBtnText,
    closeModalClasses: fsCloseModalClasses,
    titleText: fsTitleText,
    appNode: fsAppNode,
    includeDefaultStyles: fsIncludeDefaultStyles,
    underlayClass: fsUnderlayClass
  }, _react["default"].createElement(FullScreenComponent, null))));
};

DataTableHeader.defaultProps = {
  className: 'data-table-header',
  options: {
    pageResults: {
      hidePageResults: false,
      className: 'data-table-results'
    },
    pageSizer: {
      hidePageSizer: false,
      label: 'Rows per page',
      selectOptions: [{
        defaultChecked: true,
        label: '20',
        value: '20'
      }, {
        label: '50',
        value: '50'
      }, {
        label: '100',
        value: '100'
      }],
      className: 'page-size-options'
    },
    tableDensity: {
      hideDisplayDensity: false,
      items: [{
        icon: null,
        text: 'expanded'
      }, {
        icon: null,
        text: 'normal'
      }, {
        icon: null,
        text: 'tight'
      }],
      className: 'data-table-density',
      screenReaderClass: 'sr-only sr-only-focusable',
      title: 'Display Density'
    },
    advancedOptions: {
      hideAdvancedOptions: false
    },
    fullscreen: {
      hideFullScreen: false
    }
  },
  FullScreenComponent: null,
  fullScreenMode: false
};
DataTableHeader.propTypes = {
  className: _propTypes["default"].string,
  dataPreview: _propTypes["default"].shape({
    columnOrder: _propTypes["default"].array,
    columns: _propTypes["default"].array,
    currentPage: _propTypes["default"].number,
    density: _propTypes["default"].string,
    excludedColumns: _propTypes["default"].objectOf(_propTypes["default"].bool),
    filters: _propTypes["default"].array,
    pageSize: _propTypes["default"].number,
    rowsTotal: _propTypes["default"].string,
    sort: _propTypes["default"].array,
    values: _propTypes["default"].arrayOf(_propTypes["default"].object)
  }).isRequired,
  options: _propTypes["default"].shape({
    pageResultsOptions: _propTypes["default"].shape({
      className: _propTypes["default"].string
    }),
    pageSizerOptions: _propTypes["default"].shape({
      label: _propTypes["default"].string,
      options: _propTypes["default"].arrayOf(_propTypes["default"].object),
      className: _propTypes["default"].string
    }),
    displayDensityOptions: _propTypes["default"].shape({
      screenReaderClass: _propTypes["default"].string,
      className: _propTypes["default"].string,
      items: _propTypes["default"].arrayOf(_propTypes["default"].shape({
        icon: _propTypes["default"].node,
        text: _propTypes["default"].string
      })),
      title: _propTypes["default"].string
    })
  }),
  id: _propTypes["default"].string.isRequired,
  dataFunctions: _propTypes["default"].objectOf(_propTypes["default"].func).isRequired,
  FullScreenComponent: _propTypes["default"].node,
  fullScreenMode: _propTypes["default"].bool
};
var _default = DataTableHeader;
exports["default"] = _default;