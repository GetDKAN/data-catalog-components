import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from './index';

describe('<Hero />', () => {
  test('renders a heading by default', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Hero />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});
