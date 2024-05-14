import React from 'react';
import { render, screen } from '@testing-library/react';
import DataTableDensity from '.';

describe('<DataTableDensity />', () => {
  beforeEach(() => {
    render(
      <DataTableDensity
        densityChange={() => () => true}
      />,
    );
  
    render(
      <DataTableDensity
        densityChange={() => () => true}
        title="Foobar"
        items={[
          { icon: <span>Icon </span>, text: 'first' },
          { icon: <span>Icon </span>, text: 'second' },
          { icon: <span>Icon </span>, text: 'third' },
        ]}
      />,
    );
  });

  it('renders correct initial results', () => {
    expect(screen.getByText('Display Density')).toBeInTheDocument();
    expect(screen.getByText('expanded')).toBeInTheDocument();
    expect(screen.getByText('tight')).toBeInTheDocument();
  });

  it('renders correct custom results', () => {
    expect(screen.getByText('Foobar')).toBeInTheDocument();
    expect(screen.getByTitle('first')).toBeInTheDocument();
    expect(screen.getByTitle('third')).toBeInTheDocument();
  });
});
