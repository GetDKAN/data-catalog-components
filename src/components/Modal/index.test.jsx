import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from './index';

describe('<Modal />', () => {
  test('renders a button by default', () => {
    render(
      <Modal
        title="DKAN"
        nodeId="id"
      >
        <h1>My Modal</h1>
      </Modal>,
    );
    expect(screen.getByRole('button', 'Open Modal')).toBeInTheDocument();
  });
});
