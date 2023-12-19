import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './index';
import { BrowserRouter } from 'react-router-dom';

describe('<Header />', () => {
  test('renders a logo by default', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByAltText('Open Data Catalog')).toBeInTheDocument();
  });
});
