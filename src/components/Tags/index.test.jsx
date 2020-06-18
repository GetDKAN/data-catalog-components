import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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
        ]}
        label="dkan"
        path="/my-path/"
      />,
    );
    expect(screen.getByRole('heading', 'dkan')).toBeTruthy();
    expect(screen.getAllByRole('link')).toHaveLength(2);
    expect(screen.getByRole('link', { name: 'dkan1' })).toHaveAttribute('href', '/my-path/dkan1');
    expect(screen.getByRole('link', { name: 'dkan2' })).toHaveAttribute('href', '/my-path/dkan2');
  });
});
