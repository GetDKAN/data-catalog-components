import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tags from './index';

const TestComponent = ({ title }) => (<div className={title}>Test Component</div>);
TestComponent.propTypes = { title: PropTypes.string.isRequired };

describe('<TopicWrapper />', () => {
  test('renders mulitple links', () => {
    render(
      <Tags
        tags={[
          { data: 'dkan1', identifier: 1 },
          { data: 'dkan2', identifier: 2 },
          { data: 'open data', identifier: 3 },
        ]}
        label="dkan"
        path="/my-path/"
      />,
    );
    expect(screen.getByRole('heading', 'dkan')).toBeTruthy();
    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getByRole('link', { name: 'dkan1' })).toHaveAttribute('href', '/my-path/dkan1');
    expect(screen.getByRole('link', { name: 'dkan2' })).toHaveAttribute('href', '/my-path/dkan2');
    expect(screen.getByRole('link', { name: 'open data' })).toHaveAttribute('href', '/my-path/open%20data');
  });
});
