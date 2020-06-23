import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';
import Title from './index';

describe('<Title />', () => {
  test('renders as default h1 with text', () => {
    render(<Title title="My Title" />);
    expect(screen.getByRole('heading', 'My Title')).toContainHTML('<h1>My Title</h1>');
  });

  test('renders as h5 with text', () => {
    render(<Title headerLevel="h5" title="My Title" />);
    expect(screen.getByRole('heading', 'My Title')).toContainHTML('<h5>My Title</h5>');
  });
});
