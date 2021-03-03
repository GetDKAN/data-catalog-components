import React from 'react';
import { render, screen, getByRole, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrimaryNav from './index';

const nav = {
  "main": [
    {
      "label": "Home",
      "url": "/"
    },
    {
      "label": "Datasets",
      "url": "/search"
    },
    {
      "label": "Publishers",
      "url": "/publishers"
    },
    {
      "label": "About",
      "url": "/about"
    },
    {
      "label": "API",
      "url": "/api"
    }
  ]
}

describe('<PrimaryNav',() => {
  test('renders a nav element.', () => {
    const { queryByRole } = render(
      <PrimaryNav items={nav.main} />
    );
    expect(queryByRole('navigation')).toBeInTheDocument()
  });
});

it('renders items', () => {
  const { getByText } = render(
    <PrimaryNav items={nav.main} />
  )
  expect(getByText('Home')).toBeInTheDocument();
  expect(getByText('Datasets')).toBeInTheDocument();
})
