import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './index';

describe('<NavBar />', () => {
  test('renders with a button and nav item', () => {
    render(<NavBar
      navItems={[
        'text',
      ]}
    />);
    expect(screen.getByRole('button', 'Menu')).toBeInTheDocument();
    expect(screen.getByRole('listitem', 'text')).toBeInTheDocument();
  });
});
