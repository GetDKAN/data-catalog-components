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
    expect(screen.getByRole('button', {name: 'topic'})).toBeInTheDocument();
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
    expect(screen.getByRole('button', {name: 'TOPICSS'})).toBeInTheDocument();
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
    expect(screen.getByRole('button', {name: 'topic'})).toBeInTheDocument();
  });

  test('renders a selected button', () => {
    const {debug} = render(
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
    
    expect(screen.getByRole('button', {name: 'topic'})).toBeInTheDocument();
    expect(screen.getByLabelText('react (2)')).toBeChecked();
    expect(screen.getByLabelText('vue (1)')).not.toBeChecked();
    userEvent.click(screen.getByLabelText('react (2)'));
    userEvent.click(screen.getByLabelText('vue (1)'));
    expect(screen.getByLabelText('react (2)').checked).toBeTruthy();
    expect(screen.getByLabelText('vue (1)').checked).toBeFalsy();
  });
});
