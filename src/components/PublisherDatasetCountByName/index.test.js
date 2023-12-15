import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PublisherDatasetCountByName from './index';
import { BrowserRouter } from 'react-router-dom';

describe('<PublisherDatasetCountByName />', () => {

  test('If no dataset renders, just a link to the page.', () => {
    render(
      <BrowserRouter>
        <PublisherDatasetCountByName name="Non matching organization." />
      </BrowserRouter>
    );
    expect(screen.getByText('datasets')).toBeInTheDocument();
  });

  test('If there is a publisher with datasets render the dataset count.',() => {
    render(
      <BrowserRouter>
        <PublisherDatasetCountByName name="State Economic Council" datasetCount="3" />
      </BrowserRouter>
    );
    expect(screen.getByText('3 datasets')).toBeInTheDocument();
  });

  test('Dataset count with just one item.',() => {
    render(
      <BrowserRouter>
        <PublisherDatasetCountByName name="State Economic Council" datasetCount="1" />
      </BrowserRouter>
    );
  });

});
