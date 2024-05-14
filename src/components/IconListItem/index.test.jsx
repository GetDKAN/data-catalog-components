import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import IconListItem from './index';
import { BrowserRouter } from 'react-router-dom';

describe('<IconListItem />', () => {
  test('renders a title', () => {
    render(
      <BrowserRouter>
        <IconListItem link="http://demo.getdkan.com" title="dkan" />
      </BrowserRouter>
    );
    expect(screen.getByText('dkan')).toBeInTheDocument();
  });
});
