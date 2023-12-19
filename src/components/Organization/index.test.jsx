import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Organization, {countDatasetsByName} from './index';
import { BrowserRouter } from 'react-router-dom';

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
    render(
      <BrowserRouter>
        <Organization name="DKAN" />
      </BrowserRouter>
    );
    expect(screen.getByRole('heading', 'DKAN')).toBeInTheDocument();
  });

  test('Has a publisher name.', () => {
    expect(data[0]['publisher']['name']).toEqual("State Economic Council");
  });

  test('renders with a dataset link with no count', () => {
    render(
      <BrowserRouter>
        <Organization name="DKAN" />
      </BrowserRouter>
    );
    expect(screen.getByText('datasets')).toBeInTheDocument();
  });

  test('Calculates a count from data',() => {
    expect(countDatasetsByName("State Economic Council", data)).toEqual(2);
  });

});
