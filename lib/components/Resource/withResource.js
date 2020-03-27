"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withResource;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _axios = _interopRequireDefault(require("axios"));

var _datastore = _interopRequireDefault(require("../../services/resource/datastore"));

/* eslint react/prop-types: 0 */
function withResource(OriginalComponent) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2["default"])(_class, _React$Component);

      function _class(props) {
        var _this;

        (0, _classCallCheck2["default"])(this, _class);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(_class).call(this, props));
        _this.store = null;
        _this.storeType = null;
        _this.columns = [];
        _this.state = {
          dataPreview: {
            values: [],
            pageSize: 20,
            rowsTotal: '0',
            currentPage: 0,
            filters: [],
            sort: [],
            columns: _this.columns,
            density: 'density-3',
            columnOrder: [],
            excludedColumns: {}
          },
          dataInfo: {},
          dataFunctions: {
            pageChange: function pageChange(page) {
              return _this.pageChange(page);
            },
            sortChange: function sortChange(sort) {
              return _this.sortChange(sort);
            },
            filterChange: function filterChange(filters) {
              return _this.filterChange(filters);
            },
            densityChange: function densityChange(value) {
              return _this.densityChange(value);
            },
            pageSizeChange: function pageSizeChange(event) {
              return _this.pageSizeChange(event);
            },
            reorderColumns: function reorderColumns(columns) {
              return _this.reorderColumns(columns);
            },
            toggleColumns: function toggleColumns(columns) {
              return _this.toggleColumns(columns);
            },
            activeColumns: function activeColumns(columns) {
              return _this.activeColumns(columns);
            }
          }
        };
        _this.activeColumns = _this.activeColumns.bind((0, _assertThisInitialized2["default"])(_this));
        _this.prepareColumns = _this.prepareColumns.bind((0, _assertThisInitialized2["default"])(_this));
        _this.pageChange = _this.pageChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.filterChange = _this.filterChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.sortChange = _this.sortChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.densityChange = _this.densityChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.pageSizeChange = _this.pageSizeChange.bind((0, _assertThisInitialized2["default"])(_this));
        _this.reorderColumns = _this.reorderColumns.bind((0, _assertThisInitialized2["default"])(_this));
        _this.toggleColumns = _this.toggleColumns.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }

      (0, _createClass2["default"])(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.fetchData();
        }
      }, {
        key: "getStore",
        value: function () {
          var _getStore = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee() {
            var _this2 = this;

            var data, rootUrl;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    data = this.props.data;
                    rootUrl = this.props.rootUrl;
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      if (_this2.store !== null) {
                        resolve(_this2.store);
                      } else {
                        if (_this2.columns.length > 0) {
                          var store = new _datastore["default"]['dkan'](data.identifier, _this2.columns, rootUrl);
                          store.query(null, null, null, 0, null, null, true).then(function (data) {
                            _this2.store = store;
                            _this2.storeType = 'dkan';
                            resolve(store);
                          });
                        } else {
                          var _store = new _datastore["default"]['file'](data.data.downloadURL);

                          _store.query(null, null, null, 0, null, null, true).then(function (data) {
                            if (data) {
                              _this2.store = _store;
                              _this2.storeType = 'file';

                              _this2.setState({
                                store: _store
                              });

                              resolve(_store);
                            } else {
                              reject("No datastore available.");
                            }
                          });
                        }
                      }
                    }));

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getStore() {
            return _getStore.apply(this, arguments);
          }

          return getStore;
        }()
      }, {
        key: "getData",
        value: function () {
          var _getData = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee2() {
            var fields,
                facets,
                range,
                page,
                count,
                dataPreview,
                sort,
                query,
                _args2 = arguments;
            return _regenerator["default"].wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    fields = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : null;
                    facets = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : null;
                    range = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : null;
                    page = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : null;
                    count = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : false;
                    dataPreview = this.state.dataPreview;
                    sort = dataPreview.sort;
                    query = dataPreview.filters.length ? dataPreview.filters : null;

                    if (!count) {
                      _context2.next = 15;
                      break;
                    }

                    _context2.next = 11;
                    return this.store.query(query, fields, facets, range, page, sort, count).then(function (data) {
                      dataPreview.rowsTotal = data;
                    });

                  case 11:
                    _context2.next = 13;
                    return this.store.query(query, fields, facets, range, page, sort).then(function (data) {
                      dataPreview.values = data;
                    });

                  case 13:
                    _context2.next = 17;
                    break;

                  case 15:
                    _context2.next = 17;
                    return this.store.query(query, fields, facets, range, page, sort).then(function (data) {
                      dataPreview.values = data;
                    });

                  case 17:
                    this.setState({
                      dataPreview: dataPreview
                    });

                  case 18:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function getData() {
            return _getData.apply(this, arguments);
          }

          return getData;
        }()
      }, {
        key: "fetchData",
        value: function () {
          var _fetchData = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee3() {
            var _this3 = this;

            var dataPreview, data, rootUrl, columns, store;
            return _regenerator["default"].wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    dataPreview = this.state.dataPreview;
                    data = this.props.data;
                    rootUrl = this.props.rootUrl;
                    columns = null;

                    if (!(data.identifier !== undefined)) {
                      _context3.next = 7;
                      break;
                    }

                    _context3.next = 7;
                    return _axios["default"].get("".concat(rootUrl, "/datastore/imports/").concat(data.identifier)).then(function (response) {
                      _this3.columns = response.data.columns ? response.data.columns : [];
                      columns = _this3.columns;

                      _this3.setState({
                        dataInfo: {
                          columns: columns,
                          data: data.data,
                          datastore_statistics: {
                            rows: response.data.numOfRows,
                            columns: response.data.numOfColumns
                          },
                          indentifier: data.identifier
                        }
                      });
                    })["catch"](function (error) {
                      return console.log(error);
                    });

                  case 7:
                    _context3.next = 9;
                    return this.getStore();

                  case 9:
                    store = _context3.sent;

                    if (!(columns === null)) {
                      _context3.next = 14;
                      break;
                    }

                    _context3.next = 13;
                    return store.getColumns();

                  case 13:
                    columns = _context3.sent;

                  case 14:
                    _context3.next = 16;
                    return this.activeColumns(this.prepareColumns(columns));

                  case 16:
                    dataPreview.columns = _context3.sent;
                    _context3.next = 19;
                    return this.getData(null, null, dataPreview.pageSize, dataPreview.currentPage, true);

                  case 19:
                    this.setState({
                      dataPreview: dataPreview
                    });

                  case 20:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function fetchData() {
            return _fetchData.apply(this, arguments);
          }

          return fetchData;
        }()
      }, {
        key: "prepareColumns",
        value: function prepareColumns(columns) {
          return columns.map(function (column) {
            return {
              Header: column,
              accessor: column
            };
          });
        } // TABLE FUNCTIONS

      }, {
        key: "pageChange",
        value: function () {
          var _pageChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee4(page) {
            var dataPreview;
            return _regenerator["default"].wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    dataPreview = this.state.dataPreview;
                    dataPreview.currentPage = page;
                    this.getData(null, null, dataPreview.pageSize, dataPreview.currentPage);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function pageChange(_x) {
            return _pageChange.apply(this, arguments);
          }

          return pageChange;
        }()
      }, {
        key: "filterChange",
        value: function () {
          var _filterChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee5(filters) {
            var dataPreview;
            return _regenerator["default"].wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    dataPreview = this.state.dataPreview;
                    dataPreview.filters = filters; // When filtering the pages gets reset.

                    dataPreview.currentPage = 0;
                    this.getData(null, null, dataPreview.pageSize, dataPreview.currentPage, true);

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function filterChange(_x2) {
            return _filterChange.apply(this, arguments);
          }

          return filterChange;
        }()
      }, {
        key: "sortChange",
        value: function () {
          var _sortChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee6(sort) {
            var dataPreview;
            return _regenerator["default"].wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    dataPreview = this.state.dataPreview;
                    dataPreview.sort = sort; // When sorting the pages gets reset.

                    dataPreview.currentPage = 0;
                    this.getData(null, null, dataPreview.pageSize, dataPreview.currentPage);

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function sortChange(_x3) {
            return _sortChange.apply(this, arguments);
          }

          return sortChange;
        }() // TABLE HEADER FUNCTIONS

      }, {
        key: "densityChange",
        value: function () {
          var _densityChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee7(value) {
            var dataPreview;
            return _regenerator["default"].wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    dataPreview = this.state.dataPreview;
                    dataPreview.density = "density-".concat(value + 1);
                    this.setState({
                      dataPreview: dataPreview
                    });

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          function densityChange(_x4) {
            return _densityChange.apply(this, arguments);
          }

          return densityChange;
        }()
      }, {
        key: "pageSizeChange",
        value: function () {
          var _pageSizeChange = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee8(event) {
            var dataPreview;
            return _regenerator["default"].wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    dataPreview = this.state.dataPreview;
                    dataPreview.pageSize = event.target.value;
                    dataPreview.currentPage = 0;
                    this.getData(null, null, dataPreview.pageSize, dataPreview.currentPage);

                  case 4:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));

          function pageSizeChange(_x5) {
            return _pageSizeChange.apply(this, arguments);
          }

          return pageSizeChange;
        }() // ADVANCED OPTIONS

      }, {
        key: "reorderColumns",
        value: function () {
          var _reorderColumns = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee9(columns) {
            var dataPreview;
            return _regenerator["default"].wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    dataPreview = this.state.dataPreview;
                    dataPreview.columnOrder = columns;
                    this.setState({
                      dataPreview: dataPreview
                    });

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));

          function reorderColumns(_x6) {
            return _reorderColumns.apply(this, arguments);
          }

          return reorderColumns;
        }()
      }, {
        key: "toggleColumns",
        value: function () {
          var _toggleColumns = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee10(columnsData) {
            var dataPreview;
            return _regenerator["default"].wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    dataPreview = this.state.dataPreview;
                    dataPreview.excludedColumns = columnsData;
                    this.setState({
                      dataPreview: dataPreview
                    });

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));

          function toggleColumns(_x7) {
            return _toggleColumns.apply(this, arguments);
          }

          return toggleColumns;
        }()
      }, {
        key: "activeColumns",
        value: function activeColumns(items) {
          var newExcluded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          var _this$state$dataPrevi = this.state.dataPreview,
              excludedColumns = _this$state$dataPrevi.excludedColumns,
              columnOrder = _this$state$dataPrevi.columnOrder;
          var excludedColumnsData = newExcluded || excludedColumns;
          var excludedArray = [];
          var newItems = items;

          if (columnOrder.length) {
            newItems = columnOrder;
          }

          Object.keys(excludedColumnsData).forEach(function eachKey(key) {
            if (!excludedColumnsData[key]) {
              excludedArray.push(key);
            }
          });
          return newItems.reduce(function (columns, item) {
            if (!excludedArray.includes(item.accessor)) {
              columns.push(item);
            }

            return columns;
          }, []);
        }
      }, {
        key: "render",
        value: function render() {
          return _react["default"].createElement(OriginalComponent // eslint-disable-next-line react/jsx-props-no-spreading
          , (0, _extends2["default"])({}, this.props, this.state));
        }
      }]);
      return _class;
    }(_react["default"].Component)
  );
}