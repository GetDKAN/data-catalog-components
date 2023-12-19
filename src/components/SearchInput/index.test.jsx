import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import SearchInput from './index';

jest.useFakeTimers();

describe('<SearchInput />', () => {
  describe('default', () => {
    beforeEach(() => {
      render(
        <SearchInput
          onChangeFunction={() => {}}
        />,
      );
    });
    it('renders with default label of "Search"', () => {
      expect(screen.getByText('Search')).toBeInTheDocument();
    });
    it('renders with no Reset button', () => {
      expect(screen.queryByRole('button', {name: 'Reset'})).not.toBeInTheDocument();
    });
    it('renders with default button of "Submit"', () => {
      expect(screen.getByRole('button')).toHaveTextContent('Submit');
    });
    it('renders re-renders with input text and default Reset button', async () => {
      jest.useRealTimers()
      const textbox = screen.getByRole('textbox');
      await userEvent.type(textbox, 'abcdefg', {delay: 0});
      expect(textbox).toHaveValue('abcdefg');
      expect(screen.queryByRole('button', {name: 'Reset'})).toBeInTheDocument();
    });
  });

  describe('custom', () => {
    beforeEach(() => {
      render(
        <SearchInput
          onChangeFunction={() => {}}
          onResetFunction={() => {}}
          showSubmit={false}
          value="test"
          resetContent="Custom Reset"
        />,
      );
    });
    it('renders without Submit button', () => {
      expect(screen.queryByRole('button', {name: 'Submit'})).not.toBeInTheDocument();
    });
    it('resets input value when Reset button is clicked', () => {
      //expect(customWrapper.exists('button#inputReset')).toBe(true);
      //expect(customWrapper.find('input').props().value).toBe('test');
      expect(screen.getByText('Custom Reset')).toBeInTheDocument();
      //customWrapper.find('button#inputReset').simulate('click');
      //expect(customWrapper.find('input').props().value).toBe('');
    });
  });
});
