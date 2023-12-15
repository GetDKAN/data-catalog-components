import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PublisherList from './index';
import { BrowserRouter } from 'react-router-dom';

describe('<PublisherList />', () => {
  test('renders list of orgs with custom class', () => {
    render(
      <BrowserRouter>      
        <PublisherList
          items={[
            {
              name: 'dkan', identifier: 1, imageUrl: '', description: 'react',
            },
            {
              name: 'open', identifier: 2, imageUrl: '', description: 'jest',
            },
            {
              name: 'data', identifier: 3, imageUrl: '', description: 'testing',
            },
            {
              name: 'foss', identifier: 4, imageUrl: '', description: 'css',
            },
          ]}
          className="custom"
        />
      </BrowserRouter>
    );
    expect(screen.getByRole('list')).toHaveClass('custom');
    // TODO: Fix so divs aren't returned in a list
    // expect(screen.getByRole('listitem')).toHaveLength(4);
  });
});
