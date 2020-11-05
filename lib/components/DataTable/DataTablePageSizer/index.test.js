"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

require("@testing-library/jest-dom/extend-expect");

var _index = _interopRequireDefault(require("./index"));

describe('<DataTablePageSizer />', function () {
  test('renders default', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      pageSizeChange: function pageSizeChange() {
        return function () {
          return true;
        };
      },
      id: "1234"
    }));
    expect(_react2.screen.getByLabelText('Rows per page')).toBeInTheDocument();
  });
  test('renders custom', function () {
    (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      pageSizeChange: function pageSizeChange() {
        return function () {
          return true;
        };
      },
      id: "1234",
      label: "Foobar",
      currentOption: "150",
      options: [{
        label: '20',
        value: '20'
      }, {
        label: '50',
        value: '50'
      }, {
        label: '100',
        value: '100'
      }, {
        defaultChecked: true,
        label: '150',
        value: '150'
      }, {
        label: '200',
        value: '200'
      }, {
        label: '250',
        value: '250'
      }]
    }));
    expect(_react2.screen.getByLabelText('Foobar')).toBeInTheDocument();
  });
});