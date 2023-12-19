import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Blocks from './index';
import BasicBlock from './BasicBlock';
import StatBlock from './StatBlock';
import StepsBlock from './StepsBlock';
import { BrowserRouter } from 'react-router-dom';

describe('<Blocks />', () => {
  test('renders a heading by default', () => {
    render(<Blocks paneTitle="Welcome to DKAN" items={[{ title: 'Welcome to DKAN', ref: '/dkan' }]} />);
    expect(screen.getByRole('heading', 'Welcome to DKAN')).toBeInTheDocument();
  });
});

describe('<BasicBlock />', () => {
  test('renders a heading by default', () => {
    render(
      <BrowserRouter>
        <BasicBlock content={{ title: 'Welcome to DKAN', ref: '/dkan' }} />
      </BrowserRouter>
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
