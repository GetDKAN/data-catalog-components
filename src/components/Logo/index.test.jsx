import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logo from './index';

describe('<Logo />', () => {
  test('renders an image with alt text', () => {
    render(<Logo />);
    expect(screen.getByAltText('Open Data Catalog')).toBeTruthy();
  });
});
