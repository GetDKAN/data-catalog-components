import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './index';

describe('<Header />', () => {
  test('renders a logo by default', () => {
    render(<Header />);
    expect(screen.getByAltText('Open Data Catalog')).toBeInTheDocument();
  });
});
