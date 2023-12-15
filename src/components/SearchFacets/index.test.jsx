import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchFacets from './index';

describe('<SearchFacets />', () => {
  test('renders a heading by default', () => {
    render(
      <SearchFacets
        facetsConfig={{ topic: {} }}
        facetsResults={[
          { name: 'react', total: 2, type: 'topic' },
        ]}
        dispatch={() => ({})}
      />,
    );
    expect(screen.getByRole('button', 'topic')).toBeInTheDocument();
  });
});
