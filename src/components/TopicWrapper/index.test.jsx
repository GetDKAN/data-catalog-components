import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopicWrapper from './index';

const TestComponent = ({ title }) => (<div className={title}>Test Component</div>);
TestComponent.propTypes = { title: PropTypes.string.isRequired };

describe('<TopicWrapper />', () => {
  test('renders with component in link', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <TopicWrapper topic="dkan" component={TestComponent} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('link')).toHaveClass('dc-topic-wrapper');
    expect(screen.getByRole('link')).toContainHTML('<div class="dkan">Test Component</div>dkan');
    expect(screen.getByText('dkan'));
    expect(screen.getByRole('link')).toHaveAttribute('href', '/search?theme=dkan');
  });
});
