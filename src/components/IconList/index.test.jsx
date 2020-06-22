import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconList from './index';

describe('<IconList />', () => {
  test('renders a default title', () => {
    render(<IconList component={() => ({})} />);
    expect(screen.getByRole('heading', 'Icon List')).toBeInTheDocument();
  });
});
