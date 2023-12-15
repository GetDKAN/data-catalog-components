import React from 'react';
import { render } from '@testing-library/react';
import DataTablePageResults from '.';
import { getByTextContent } from '../../../tests/utils';

describe('<DataTablePageResults />', () => {
  it('renders correct initial results', () => {
    render(
      <DataTablePageResults
        total={100}
        pageSize={10}
        currentPage={0}
      />,
    );
    expect(getByTextContent('1 - 10 of 100 rows')).toBeInTheDocument();
  });

  it('renders correct results on subsequent pages', () => {
    render(
      <DataTablePageResults
        total={100}
        pageSize={10}
        currentPage={4}
      />,
    );
    expect(getByTextContent('41 - 50 of 100 rows')).toBeInTheDocument();
  });

  it('Correctly displays appended viewing to results list', () => {
    render(
      <DataTablePageResults
        total={100}
        pageSize={10}
        currentPage={4}
        viewing
      />,
    );
    expect(getByTextContent('Viewing 41 - 50 of 100 rows')).toBeInTheDocument();
  })
  
});
