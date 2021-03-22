import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Organization, {countDatasetsByName} from './index';
import PublisherDatasetCountByName from '../PublisherDatasetCountByName';

const data =
      [{"publisher": {
        "@type": "org:Organization",
        "name": "State Economic Council"
      }},
      {"publisher": {
        "@type": "org:Organization",
        "name": "State Economic Council"
      }}];


describe('<Organization />', () => {
  test('renders a heading', () => {
    render(<Organization name="DKAN" />);
    expect(screen.getByRole('heading', 'DKAN')).toBeInTheDocument();
  });

  test('Has a publisher name.', () => {
    expect(data[0]['publisher']['name']).toEqual("State Economic Council");
  });

  test('renders with a dataset link with no count', () => {
    render(<Organization name="DKAN" />);
    expect(screen.getByText('datasets')).toBeInTheDocument();
  });

  test('Calculates a count from data',() => {
    expect(countDatasetsByName("State Economic Council", data)).toEqual(2);
  });

});
