import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Blocks from './index';
import BasicBlock from './BasicBlock';
import StatBlock from './StatBlock';
import StepsBlock from './StepsBlock';

describe('<Blocks />', () => {
  test('renders a heading by default', () => {
    render(
      <Blocks paneTitle="Welcome to DKAN" items={[{ title: 'Welcome to DKAN', ref: '/dkan' }]} />
    );
    expect(screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});

describe('<BasicBlock />', () => {
  test('renders a heading by default', () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <BasicBlock content={{ title: 'Welcome to DKAN', ref: '/dkan' }} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});

describe('<StatBlock />', () => {
  test('renders a heading by default', () => {
    render(<StatBlock content={{ title: 'Welcome to DKAN', ref: '/dkan' }} />);
    expect(screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});

describe('<StepsBlock />', () => {
  test('renders a heading by default', () => {
    render(<StepsBlock content={{ title: 'Welcome to DKAN', ref: '/dkan' }} />);
    expect(screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});
