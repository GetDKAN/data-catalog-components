import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchPaginationResults from './index';

describe('<SearchPaginationResults />', () => {
  test('renders with default class and correct message', () => {
    render(
      <SearchPaginationResults
        currentPage={1}
        pageSize={20}
        total={100}
      />,
    );
    expect(screen.getByText(/datasets/).closest('div')).toHaveClass('dataset-results-count');
    expect(screen.getByText(/datasets/).closest('div')).toHaveTextContent('1-20 of 100 datasets');
  });
  test('renders with custom class and correct message', () => {
    render(
      <SearchPaginationResults
        className="custom"
        currentPage={2}
        pageSize={10}
        total={500}
      />,
    );
    expect(screen.getByText(/datasets/).closest('div')).toHaveClass('custom');
    expect(screen.getByText(/datasets/).closest('div')).toHaveTextContent('11-20 of 500 datasets');
  });
});
