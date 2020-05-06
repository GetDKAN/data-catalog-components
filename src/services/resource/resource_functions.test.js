import { prepareColumns } from './resource_functions';

const columns = ['foo', 'bar', 'react', 'dkan'];

test('prepareColumns returns an array of objects', () => {
  expect(prepareColumns(columns)).toEqual([
    { Header: 'foo', accessor: 'foo' },
    { Header: 'bar', accessor: 'bar' },
    { Header: 'react', accessor: 'react' },
    { Header: 'dkan', accessor: 'dkan' },
  ]);
});
