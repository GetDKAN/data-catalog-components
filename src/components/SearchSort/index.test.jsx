import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchSort from './index';

describe('<SearchSort />', () => {
  test('renders a select with default options', () => {
    render(<SearchSort currentValue="alpha" sortFunc={() => ({})} />);
    expect(screen.getByLabelText('Sort by')).toBeInTheDocument();
  });
});
