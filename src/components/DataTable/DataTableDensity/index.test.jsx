import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DataTableDensity from '.';

describe('<DataTableDensity />', () => {
  test('renders correct initial results', () => {
    render(
      <DataTableDensity
        densityChange={() => () => true}
      />,
    );
    expect(screen.getByText('Display Density')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'expanded'})).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'tight'})).toBeInTheDocument();
  });
});
