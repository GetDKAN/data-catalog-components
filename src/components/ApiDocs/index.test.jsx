import React from 'react';
import PropTypes from 'prop-types';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
//import ApiDocs from './index';
// swagger-ui-react isn't getting along with jest in its current state, so test is skipped for now

const TestComponent = ({ title }) => (<div className={title}>Test Component</div>);
TestComponent.propTypes = { title: PropTypes.string.isRequired };

describe('<ApiDocs />', () => {
  test.skip('renders error message when no api available', () => {
    render(<ApiDocs />);
    expect(screen.getByRole('heading', 'No API definition provided.')).toBeInTheDocument();
  });
});
