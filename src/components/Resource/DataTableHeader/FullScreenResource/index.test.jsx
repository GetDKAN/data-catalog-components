import React from 'react';
import { mount, shallow } from 'enzyme';
import FullScreenResource from '.';

describe('<FullScreenResource />', () => {
  const defaultWrapper = mount(
    <FullScreenResource>
      <h1 id="header-item">dkan2</h1>
    </FullScreenResource>,
  );

  it('renders correctly without modal open', () => {
    expect(defaultWrapper.exists('.data-table-fullscreen')).toBe(true);
    expect(defaultWrapper.exists('.data-table-fullscreen-modal')).toBe(false);
  });

  it('opens and closes the modal window', () => {
    defaultWrapper.find('.data-table-fullscreen button').simulate('click');
    expect(defaultWrapper.exists('.data-table-fullscreen-modal')).toBe(true);
    defaultWrapper.find('.fullscreen-modal-close').simulate('click');
    expect(defaultWrapper.exists('.data-table-fullscreen-modal')).toBe(false);
  });
});
