import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Announcement from './index';

describe('<Announcement />', () => {
  test('renders an error announcement', () => {
    render(
      <Announcement
        heading="Errors"
        variation="error"
      >
        <p>500 Error</p>
      </Announcement>,
    );

    expect(screen.getByText('500 Error')).toBeInTheDocument();
    expect(screen.getByRole('heading', /Errors/)).toBeInTheDocument();
    expect(screen.getByRole('heading', /Errors/).closest('div')).toHaveClass('dc-alert--error');
  });
});
