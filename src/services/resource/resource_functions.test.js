import { prepareColumns } from './resource_functions';

const columns = ['foo', 'bar', 'react', 'dkan'];

test('prepareColumns returns an array of objects', () => {
  expect(prepareColumns(columns)).toEqual([
    { header: 'foo', id: 'foo', accessor: 'foo' },
    { header: 'bar', id: 'bar', accessor: 'bar' },
    { header: 'react', id: 'react', accessor: 'react' },
    { header: 'dkan', id: 'dkan', accessor: 'dkan' },
  ]);
});
