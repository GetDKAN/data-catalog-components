import React from 'react';
import { shallow } from 'enzyme';
import DataTable from '.';

describe('<DataTable />', () => {
  const data = [
    {
      column1: 'alpha',
      column2: 'beta',
      column3: 'gamma',
    },
    {
      column1: 'alpha',
      column2: 'beta',
      column3: 'gamma',
    },
  ];
  const columns = [
    { Header: 'column1', accessor: 'column1' },
    { Header: 'column2', accessor: 'column2' },
    { Header: 'column3', accessor: 'column3' },
  ];

  const defaultWrapper = shallow(
    <DataTable
      data={data}
      loading={false}
      columns={columns}
      pageSize={1}
      pages={1}
      sortedChange={() => true}
      pageChange={() => true}
      filterChange={() => true}
      index={1}
    />,
  );

  it('renders correctly', () => {
    expect(defaultWrapper.exists('div')).toBe(true);
  });
});
