import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormatIcon from './index';

describe('<FormatIcon />', () => {
  test('renders an svg with title', () => {
    render(<FormatIcon />);
    expect(screen.getByTitle('Data')).toBeInTheDocument();
  });
});
