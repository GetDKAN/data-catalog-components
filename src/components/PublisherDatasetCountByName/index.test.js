import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PublisherDatasetCountByName from './index';

describe('<PublisherDatasetCountByName />', () => {

  test('If no dataset renders, just a link to the page.', () => {
    render(<PublisherDatasetCountByName name="Non matching organization." />);
    expect(screen.getByText('datasets')).toBeInTheDocument();
  });

  test('If there is a publisher with datasets render the dataset count.',() => {
    render(<PublisherDatasetCountByName name="State Economic Council" datasetCount="3" />);
    expect(screen.getByText('3 datasets')).toBeInTheDocument();
  });

  test('Dataset count with just one item.',() => {
    render(<PublisherDatasetCountByName name="State Economic Council" datasetCount="1" />);
  });

});
