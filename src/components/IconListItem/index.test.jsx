import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IconListItem from './index';

describe('<IconListItem />', () => {
  test('renders a title', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <IconListItem link="http://demo.getdkan.com" title="dkan" />
      </BrowserRouter>,
    );
    expect(screen.getByText('dkan')).toBeInTheDocument();
  });
});
