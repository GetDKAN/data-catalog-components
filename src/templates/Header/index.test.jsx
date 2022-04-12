import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './index';

describe('<Header />', () => {
  test('renders a logo by default', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Header />
      </BrowserRouter>,
    );
    expect(screen.getByAltText('Open Data Catalog')).toBeInTheDocument();
  });
});
