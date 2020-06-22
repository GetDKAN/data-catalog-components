import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchList from './index';

describe('<SearchPaginationResults />', () => {
  test('renders with default class and correct message and children', () => {
    render(
      <SearchList
        message="My Message"
      >
        <li>Stuff</li>
      </SearchList>,
    );
    expect(screen.getByText('My Message')).toBeInTheDocument();
    expect(screen.getByRole('listitem', 'Stuff')).toBeInTheDocument();
    expect(screen.getByRole('listitem', 'Stuff').closest('ol')).toHaveClass('search-list');
    expect(screen.getByText('My Message')).toHaveClass('results-message');
  });
});
