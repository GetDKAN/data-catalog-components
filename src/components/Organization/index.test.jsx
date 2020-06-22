import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Organization from './index';

describe('<Organization />', () => {
  test('renders a heading', () => {
    render(<Organization name="DKAN" />);
    expect(screen.getByRole('heading', 'DKAN')).toBeInTheDocument();
  });
});
