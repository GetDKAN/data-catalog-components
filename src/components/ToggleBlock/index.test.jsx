import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleBlock from './index';

describe('<ToggleBlock />', () => {
  describe('default', () => {
    beforeEach(() => {
      render(
        <ToggleBlock
          title="My Title"
        >
          <p>Child Element</p>
        </ToggleBlock>,
      );
    });
    it('renders as default h2 with button title', () => {
      expect(screen.getByText('My Title')).toBeInTheDocument();
    });
  
    it('renders with default classes', () => {
      expect(screen.getByRole('heading')).toHaveClass('toggle-block-title');
      expect(screen.getByTestId('toggle-inner')).toHaveClass('toggle-block-inner');
    });

    it('toggles render of children', async () => {
      expect(screen.getByTestId('toggle-wrapper')).toHaveClass('open');
      expect(screen.getByTestId('toggle-wrapper')).not.toHaveClass('closed');
      await userEvent.click(screen.getByRole('button'));
      expect(screen.queryByTestId('toggle-inner')).not.toBeInTheDocument();
      expect(screen.getByTestId('toggle-wrapper')).not.toHaveClass('open');
      expect(screen.getByTestId('toggle-wrapper')).toHaveClass('closed');
      await userEvent.click(screen.getByRole('button'));
      expect(screen.queryByTestId('toggle-inner')).toBeInTheDocument();
      expect(screen.getByTestId('toggle-wrapper')).toHaveClass('open');
      expect(screen.getByTestId('toggle-wrapper')).not.toHaveClass('closed');
    });
  });

  describe('custom', () => {
    beforeEach(() => {
      render(
        <ToggleBlock
          title="My Custom Title"
          headingClasses="custom-heading-class"
          innerClasses="custom-inner-class"
          allowToggle={false}
        >
          <p>Child Element</p>
        </ToggleBlock>,
      );
    });
    it('renders without button title', () => {
      expect(screen.getByText('My Custom Title')).toBeInTheDocument()
      expect(screen.queryByRole('button')).not.toBeInTheDocument
    });
  
    it('renders with custom classes', () => {
      expect(screen.getByRole('heading')).toHaveClass('custom-heading-class');
      expect(screen.getByRole('heading')).not.toHaveClass('toggle-block-title');
      
      expect(screen.getByTestId('toggle-inner')).toHaveClass('custom-inner-class');
      expect(screen.getByTestId('toggle-inner')).not.toHaveClass('toggle-block-inner');
    });

  });

  it('renders in the closed state', () => {
    render(
      <ToggleBlock
        title="My Title"
        defaultClosed
      >
        <p>Child Element</p>
      </ToggleBlock>,
    );
    expect(screen.queryByTestId('toggle-inner')).not.toBeInTheDocument();
    expect(screen.getByTestId('toggle-wrapper')).toHaveClass('closed');
  });
});
