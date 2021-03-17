import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PublisherDatasetCountByName from './index';
import {find} from 'lodash';

 const datasets = [
   {
     "name": "State Economic Council",
    "total": "3"
   }
];

const countDatasetsByName = (publisher, datasets) =>  {
  const result =  find(datasets, { 'name': publisher });
  if (typeof result !== 'undefined') {
    return result;
  }
  return null;
};

describe('<PublisherDatasetCountByName />', () => {

  test('If no dataset renders, just a link to the page.', () => {
    const val = countDatasetsByName('No matching organization', datasets);
    expect(val).toBeNull();
    render(<PublisherDatasetCountByName name="Non matching organization." />);
    expect(screen.getByText('datasets')).toBeInTheDocument();
  });

  test('If there is a publisher with datasets render the dataset count.',() => {
    const val = countDatasetsByName('State Economic Council', datasets);
    render(<PublisherDatasetCountByName name="State Economic Council" datasetCount="3" />);
    expect(screen.getByText('3x datasets')).toBeInTheDocument();
  });

  test('Dataset count with just one item.',() => {
    const val = countDatasetsByName('State Economic Council', datasets);
    render(<PublisherDatasetCountByName name="State Economic Council" datasetCount="1" />);
  });

});
