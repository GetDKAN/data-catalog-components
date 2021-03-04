import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DatasetSearchCards from './index';

describe('<DataTable />', () => {
  test('renders', () => {
    render(
      <DatasetSearchCards
        items={[
          {
            description: 'Description',
            title: 'Title',
            identifier: '1234',
            distribution: [
              {
                title: '1234-abcd',
                format: 'csv'
              }
            ],
            publisher: { name: 'Publisher' },
            theme: ['theme_1']
          }
        ]}
      />
    );

    expect(screen.getByText('Title')).toBeInTheDocument();
  });
});