import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PublisherList from './index';
import orgs from '../../examples/publishers.json'

describe('<PublisherList />', () => {
  test('renders list of orgs', () => {
    render(
      <PublisherList orgs={orgs} />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('renders list of orgs with custom button text', () => {
    render(
      <PublisherList
        orgs={orgs}
        buttonTextPrefix="Explore"
      />,
    );
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByRole('button', {name: 'Explore Clipboards'})).toBeInTheDocument();
  });
});
