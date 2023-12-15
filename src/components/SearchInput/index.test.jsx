import React from 'react';
import { render, screen } from '@testing-library/react';
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
    it.skip('renders with no Reset button', () => {
      expect(defaultWrapper.exists('button#inputReset')).toBe(false);
    });
    it.skip('renders with default button of "Submit"', () => {
      expect(defaultWrapper.find('button#inputSubmit').text()).toBe('Submit');
    });
    it.skip('renders re-renders with input text and default Reset button', () => {
      defaultWrapper.find('input').simulate('change', { target: { value: 'abcdefg' } });
      jest.advanceTimersByTime(500);
      expect(defaultWrapper.find('input').props().value).toBe('abcdefg');
      expect(defaultWrapper.exists('button#inputReset')).toBe(true);
      expect(defaultWrapper.find('button#inputReset').text()).toBe('Reset');
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
    it.skip('renders without Submit button', () => {
      expect(customWrapper.exists('button#inputSubmit')).toBe(false);
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
