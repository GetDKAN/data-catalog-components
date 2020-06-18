import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Logo from './index';

const TestComponent = ({ title }) => (<div className={title}>Test Component</div>);
TestComponent.propTypes = { title: PropTypes.string.isRequired };

describe('<FileDownload />', () => {
  test('renders an image with alt text', () => {
    render(<Logo />);
    expect(screen.getByAltText('Open Data Catalog')).toBeTruthy();
  });
});
