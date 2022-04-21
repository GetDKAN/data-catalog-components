import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconList from './index';

describe('<IconList />', () => {
  test('renders a default title', () => {
    render(<IconList items={[]} component={() => (<p>text here</p>)} paneTitle="Icon List" />);
    expect(screen.getByRole('heading', 'Icon List')).toBeInTheDocument();
  });
});
