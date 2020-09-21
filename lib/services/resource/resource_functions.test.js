"use strict";

var _resource_functions = require("./resource_functions");

var columns = ['foo', 'bar', 'react', 'dkan'];
test('prepareColumns returns an array of objects', function () {
  expect((0, _resource_functions.prepareColumns)(columns)).toEqual([{
    Header: 'foo',
    accessor: 'foo'
  }, {
    Header: 'bar',
    accessor: 'bar'
  }, {
    Header: 'react',
    accessor: 'react'
  }, {
    Header: 'dkan',
    accessor: 'dkan'
  }]);
});