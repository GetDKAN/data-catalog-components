import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Text from './index';

describe('<Text />', () => {
  test('renders with children ignoring of value', () => {
    render(
      <Text
        label="DKAN"
        wrapper={{
          tag: 'h1',
          classes: 'my-class',
        }}
        value="my value"
      >
        my text
      </Text>,
    );
    expect(screen.getByRole('heading', 'DKAN: my text')).toHaveClass('my-class');
  });

  test('renders with children ignoring wrapper', () => {
    render(
      <Text
        label="DKAN"
        wrapper={{
          classes: 'my-class',
        }}
      >
        <h1 className="custom">my custom html</h1>
      </Text>,
    );
    expect(screen.getByText('my custom html')).toHaveClass('custom');
  });

  test('renders with children', () => {
    render(
      <Text
        label="DKAN"
        wrapper={{
          tag: 'h1',
          classes: 'my-class',
        }}
      >
        my text
      </Text>,
    );
    expect(screen.getByRole('heading', 'DKAN: my text')).toHaveClass('my-class');
  });

  test('renders with value', () => {
    render(
      <Text
        label="DKAN"
        wrapper={{
          classes: 'my-class',
        }}
        value="<h1>my value without tag</h1>"
      />,
    );
    expect(screen.getByRole('heading', 'DKAN: my value without tag')).not.toHaveClass('my-class');
  });

  test('renders with value', () => {
    render(
      <Text
        label="DKAN"
        wrapper={{
          tag: 'h1',
          classes: 'my-class',
        }}
        value="my value"
      />,
    );
    expect(screen.getByRole('heading', 'DKAN: my value')).toHaveClass('my-class');
  });
});
