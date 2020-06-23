import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SearchPageSizer from './index';

describe('<SearchPageSizer />', () => {
  test('renders an image with alt text', () => {
    render(<SearchPageSizer resizeFunc={() => ({})} currentValue={5} />);
    expect(screen.getByLabelText('Page Size')).toBeInTheDocument();
  });
});
