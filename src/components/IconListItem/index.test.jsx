import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconListItem from './index';

describe('<IconListItem />', () => {
  test('renders a title', () => {
    render(<IconListItem link="http://demo.getdkan.com" title="dkan" />);
    expect(screen.getByText('dkan')).toBeInTheDocument();
  });
});
