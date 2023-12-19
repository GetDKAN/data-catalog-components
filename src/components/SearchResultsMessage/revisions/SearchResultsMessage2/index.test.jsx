import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchResultsMessage2 from './index';

describe('<SearchResultsMessage2 />', () => {
  test('renders', () => {
    render(
      <SearchResultsMessage2
        facets={[]}
        searchTerm="test"
        total={10}
      />,
    );
    expect(screen.getByText(/test/)).toBeInTheDocument();
  });
});
