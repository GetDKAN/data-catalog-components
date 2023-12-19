import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Menu from './index';

describe('<Menu />', () => {
  test('renders a heading', () => {
    render(<Menu title="Welcome to DKAN" />);
    expect(screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});
