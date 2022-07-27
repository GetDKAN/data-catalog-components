import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import DynamicLink from './index';

describe('<DynamicLink />', () => {
  test('renders external link', async () => {
    render(
      <BrowserRouter>
        <DynamicLink
          url='https://demo.getdkan.org'
          content='Demo site'
        />
      </BrowserRouter>

    )

    expect(screen.getByRole('link', {name: 'Demo site'})).toBeInTheDocument();
  })
  test('renders external link with cue', async () => {
    render(
    <BrowserRouter>
      <DynamicLink
        url='https://demo.getdkan.org'
        content='Demo site'
        cue=" (external)"
      />
    </BrowserRouter>

    )

    expect(screen.getByRole('link', {name: 'Demo site (external)'})).toBeInTheDocument();
  })
  test('renders a link', async () => {
    render(
      <BrowserRouter>
        <DynamicLink
          url='/about'
          content='About'
        />
      </BrowserRouter>

    )

    expect(screen.getByRole('link', {name: 'About'})).toBeInTheDocument();
  })
});
