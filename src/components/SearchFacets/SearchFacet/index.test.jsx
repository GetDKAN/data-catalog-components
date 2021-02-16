import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import SearchFacet from './index';

describe('<SearchFacet />', () => {

  test('no facets', () => {
    render(
      <SearchFacet
        facetType="topic"
        facets={[]}
        dispatch={() => ({})}
      />,
    );
    expect(screen.getByRole('button', 'topic')).toBeInTheDocument();
  });

  test('no facets', () => {
    render(
      <SearchFacet
        label="TOPICSS"
        facetType="topic"
        facets={[]}
        dispatch={() => ({})}
      />,
    );
    expect(screen.getByRole('button', 'TOPICSS')).toBeInTheDocument();
  });

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

  test('renders a selected button', () => {
    render(
      <SearchFacet
        facetType="topic"
        facets={[
          { name: 'react', total: 2 },
          { name: 'vue', total: 1 },
        ]}
        dispatch={() => ({})}
        selected={['react']}
      />,
    );
    expect(screen.getByRole('button', 'topic')).toBeInTheDocument();
    userEvent.click(screen.getByRole('checkbox', { name: 'react (2)' }));
    userEvent.click(screen.getByRole('checkbox', { name: 'vue (1)' }));

  });
});
