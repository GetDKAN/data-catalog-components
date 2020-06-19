import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageHeader from './index';

describe('<SearchPaginationResults />', () => {
  test('renders with default class and correct message', () => {
    render(
      <PageHeader title="DKAN" />,
    );
    expect(screen.getByRole('heading', 'DKAN')).toBeInTheDocument();
  });
});
