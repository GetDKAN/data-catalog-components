import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './index';
import menu from '../../examples/menu.json';

describe('<Header />', () => {
  test('renders a logo by default', () => {
    render(
      <Header
        navItems={menu.map((item) => (
          <a href={item.url}>{item.label}</a>
        ))}
      />
    );
    expect(screen.getByAltText('Open Data Catalog')).toBeInTheDocument();
  });
});
