import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PublisherList from './index';

describe('<PublisherList />', () => {
  test('renders list of orgs with custom class', () => {
    render(
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
      />,
    );
    expect(screen.getByRole('list')).toHaveClass('custom');
    expect(screen.getByRole('listitem')).toHaveLength(4);
  });
});
