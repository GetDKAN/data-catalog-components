import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconList from './index';

describe('<IconList />', () => {
  test('renders a default title', () => {
    render(<IconList component={() => (<p>text here</p>)} paneTitle="Icon List" items={[]}/>);
    expect(screen.getByRole('heading', 'Icon List')).toBeInTheDocument();
  });
});
