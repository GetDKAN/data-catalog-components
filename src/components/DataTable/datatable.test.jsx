import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataTable from './index';

const columns1 = [
  {Header: 'Header 1', accessor: 'header_1'},
  {Header: 'Header 2', accessor: 'header_2'},
  {Header: 'Header 3', accessor: 'header_3'}
];

const data1 = [
  {header_1: 'foo', header_2: 'bar', header_3: 'fizz'},
  {header_1: 'dkan', header_2: 'react', header_3: 'drupal'}
]

describe('<DataTable />', () => {
  test('renders', () => {
    const setSort = jest.fn();
    const setConditions = jest.fn();
    render(
      <DataTable
        data={data1}
        columns={columns1}
        limit={10}
        totalRows={100}
        setSort={setSort}
        setConditions={setConditions}
        tableClasses={{
          cellEvenRowClassName: 'even',
          cellOddRowClassName: 'odd',
          cellFirstRowClassName: 'first'
        }}
      />,
    );
    expect(screen.getByRole('cell', {name: /foo/})).toBeInTheDocument();
    expect(screen.getByRole('cell', {name: /bar/})).toBeInTheDocument();
    expect(screen.getByRole('cell', {name: /fizz/})).toBeInTheDocument();

    expect(screen.getByRole('cell', {name: /fizz/})).toHaveClass('first');

    expect(screen.getByRole('cell', {name: /fizz/})).toHaveClass('odd');
    expect(screen.getByRole('cell', {name: /drupal/})).toHaveClass('even');
  });
  test('renders loading if no columns', () => {
    const setSort = jest.fn();
    const setConditions = jest.fn();
    const {debug} = render(
      <DataTable
        data={data1}
        columns={[]}
        limit={10}
        totalRows={100}
        setSort={setSort}
        setConditions={setConditions}
      />,
    );
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
});
