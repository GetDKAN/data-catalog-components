import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputLarge from './index';

describe('<InputLarge />', () => {
  test('renders a label by default', () => {
    render(<InputLarge onChange={() => ({})} />);
    expect(screen.getByLabelText('Search')).toBeInTheDocument();
  });
});
