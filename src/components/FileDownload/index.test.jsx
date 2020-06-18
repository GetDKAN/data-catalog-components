import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FileDownload from './index';

const TestComponent = ({ title }) => (<div className={title}>Test Component</div>);
TestComponent.propTypes = { title: PropTypes.string.isRequired };

describe('<FileDownload />', () => {
  test('renders mulitple links', () => {
    render(
      <FileDownload
        title="My Title"
        format="csv"
        downloadURL="http://demo.getdkan.com"
        description="dkan"
      />,
    );

    expect(screen.getByRole('link', 'My Title')).toHaveAttribute('href', 'http://demo.getdkan.com');
  });
});
