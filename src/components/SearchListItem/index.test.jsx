import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchListItem from './index';

describe('<SearchListItem />', () => {
  test('renders an item', () => {
    render(<SearchListItem
      item={
        {
          title: 'dkan',
          ref: '/dkan-item',
        }
      }
    />);
    expect(screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});
