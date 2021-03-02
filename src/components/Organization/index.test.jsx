import React from 'react';
import { act } from 'react-dom/test-utils';
import { navigate, Link } from '@reach/router'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { axe, toHaveNoViolations } from 'jest-axe';
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


expect.extend(toHaveNoViolations)

jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
  Link: jest.requireActual('@reach/router').Link
}))

describe('<Organization />', () => {
  test('renders as a list item', async () => {
    const customOrg = (
      <Organization
        isCard
        org={{
          name: "Sample Org",
          description: "Sample Org description",
          searchUrl: "/search/?publisher__name=sample_org",
          imageUrl: "https://dkan-default-content-files.s3.amazonaws.com/files/publishers/clipboard.png"
        }}
        headingText="Group Name"
        bodyText="Group Description."
        buttonText="Explore datasets by Sample Org"
      />
    );
    const { container } = render(
      customOrg, 
      {container: document.body.appendChild(document.createElement('ul'))}
    );
    expect(screen.getByRole('heading', {name: 'Sample Org', level: 2})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Explore datasets by Sample Org'})).toBeInTheDocument();

    
    await act(async () => {
      userEvent.click(screen.getByRole('button', {name: 'Explore datasets by Sample Org'}));
    });
    expect(navigate).toHaveBeenCalledTimes(1)
    expect(navigate).toHaveBeenCalledWith('/search/?publisher__name=sample_org')

    const results = await axe(container);
    expect(results).toHaveNoViolations()
  });
  test('renders as a div', async () => {

    const { container } = render(
      <Organization
        isCard={false}
        org={{
          name: "Sample Org",
          description: "Sample Org description",
          searchUrl: "/search/?publisher__name=sample_org",
        }}
        headingText="Group Name"
        bodyText="Group Description."
        buttonText="My Custom link"
      />
    );
    expect(screen.getByRole('heading', {name: 'Sample Org', level: 2})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'My Custom link'})).toHaveAttribute('href', '/search/?publisher__name=sample_org');

    const results = await axe(container);
    expect(results).toHaveNoViolations()
  });
  test('renders with default button text', async () => {

    const { container } = render(
      <Organization
        isCard={false}
        org={{
          name: "Sample Org",
          description: "Sample Org description",
          searchUrl: "/search/?publisher__name=sample_org",
        }}
        headingText="Group Name"
        bodyText="Group Description."
      />
    );
    expect(screen.getByRole('heading', {name: 'Sample Org', level: 2})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: 'Search Sample Org'})).toHaveAttribute('href', '/search/?publisher__name=sample_org');

    const results = await axe(container);
    expect(results).toHaveNoViolations()
  });
  test('renders as a list item with default button text', async () => {
    const customOrg = (
      <Organization
        isCard
        org={{
          name: "Sample Org",
          description: "Sample Org description",
          searchUrl: "/search/?publisher__name=sample_org",
          imageUrl: "https://dkan-default-content-files.s3.amazonaws.com/files/publishers/clipboard.png"
        }}
        headingText="Group Name"
        bodyText="Group Description."
      />
    );
    const { container } = render(
      customOrg, 
      {container: document.body.appendChild(document.createElement('ul'))}
    );
    expect(screen.getByRole('heading', {name: 'Sample Org', level: 2})).toBeInTheDocument();
    expect(screen.getByRole('button', {name: 'Search Sample Org'})).toBeInTheDocument();

    const results = await axe(container);
    expect(results).toHaveNoViolations()
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
