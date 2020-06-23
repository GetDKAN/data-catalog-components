import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Table from './index';

describe('<Table />', () => {
  test('renders a table header', () => {
    render(
      <Table
        configuration={
          {
            dkan: { label: 'd' },
            react: { label: 'r' },
          }
        }
        data={
          {
            dkan: 'dd',
            react: 'rr',
          }
        }
      />,
    );
    expect(screen.getByRole('heading', 'Additional Information')).toBeInTheDocument();
  });
});
