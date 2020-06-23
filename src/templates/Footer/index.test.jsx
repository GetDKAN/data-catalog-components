import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './index';

describe('<Footer />', () => {
  test('renders a heading', () => {
    render(<Footer />);
    expect(screen.getByRole('heading', 'Open Source Open Data')).toBeInTheDocument();
  });
});
