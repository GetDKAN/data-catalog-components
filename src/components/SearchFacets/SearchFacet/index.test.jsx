import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchFacet from './index';

describe('<SearchFacet />', () => {
  test('renders a button', () => {
    render(
      <SearchFacet
        facetType="topic"
        facets={[
          { name: 'react', total: 2 },
        ]}
        dispatch={() => ({})}
      />,
    );
    expect(screen.getByRole('button', 'topic')).toBeInTheDocument();
  });
});
