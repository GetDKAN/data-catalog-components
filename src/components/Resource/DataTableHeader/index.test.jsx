import React from 'react';
import { mount, shallow } from 'enzyme';
import DataTableHeader from '.';

const dataPreview = {
  columnOrder: [],
  columns: [],
  currentPage: 0,
  density: 'density-3',
  excludedColumns: {},
  filters: [],
  pageSize: 20,
  rowsTotal: '100',
  sort: [],
  values: [{ foo: 'bar' }],
};

describe('<DataTableHeader />', () => {
  const defaultWrapper = mount(
    <DataTableHeader
      dataPreview={dataPreview}
      dataFunctions={{ pageChange: (elem) => elem }}
    />,
  );

  it('renders correct initial results', () => {
    expect(defaultWrapper.exists('div.data-table-header')).toBe(true);
    expect(defaultWrapper.exists('div.data-table-results')).toBe(true);
  });
});
