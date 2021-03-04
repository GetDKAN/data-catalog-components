import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DynamicLink from './index';

describe('<DynamicLink />', () => {
  test('renders external link', async () => {
    render(
      <DynamicLink
        url='https://demo.getdkan.org'
        content='Demo site'
      />
    )

    expect(screen.getByRole('link', {name: 'Demo site'})).toBeInTheDocument();
  })
  test('renders external link with cue', async () => {
    render(
      <DynamicLink
        url='https://demo.getdkan.org'
        content='Demo site'
        cue=" (external)"
      />
    )

    expect(screen.getByRole('link', {name: 'Demo site (external)'})).toBeInTheDocument();
  })
  test('renders a link', async () => {
    render(
      <DynamicLink
        url='/about'
        content='About'
      />
    )

    expect(screen.getByRole('link', {name: 'About'})).toBeInTheDocument();
  })
});
