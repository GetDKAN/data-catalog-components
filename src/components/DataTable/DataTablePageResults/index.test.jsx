import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTablePageResults from '.';

describe('<DataTablePageResults />', () => {
  it.skip('renders correct initial results', () => {
    render(
      <DataTablePageResults
        total={100}
        pageSize={10}
        currentPage={0}
      />,
    );
    expect(screen.getByText('1 - 10 of 100 rows')).toBeInTheDocument();
  });

  it.skip('renders correct results on subsequent pages', () => {
    render(
      <DataTablePageResults
        total={100}
        pageSize={10}
        currentPage={4}
      />,
    );
    expect(screen.getByText('41 - 50 of 100 rows')).toBeInTheDocument();
  });

  it.skip('Correctly displays appended viewing to results list', () => {
    render(
      <DataTablePageResults
        total={100}
        pageSize={10}
        currentPage={4}
        viewing
      />,
    );
    expect(screen.getByText('Viewing 41 - 50 of 100 rows')).toBeInTheDocument();
  })
  
});
