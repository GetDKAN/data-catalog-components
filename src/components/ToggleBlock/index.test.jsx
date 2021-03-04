import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToggleBlock from './index';

describe('<ToggleBlock />', () => {
  // const defaultWrapper = shallow(
  //   <ToggleBlock
  //     title="My Title"
  //   >
  //     <p>Child Element</p>
  //   </ToggleBlock>,
  // );

  // const defaultClosedWrapper = shallow(
  //   <ToggleBlock
  //     title="My Title"
  //     defaultClosed
  //   >
  //     <p>Child Element</p>
  //   </ToggleBlock>,
  // );

  // const customWrapper = shallow(
  //   <ToggleBlock
  //     title="My Custom Title"
  //     headingClasses="custom-heading-class"
  //     innerClasses="custom-inner-class"
  //     allowToggle={false}
  //   >
  //     <p>Child Element</p>
  //   </ToggleBlock>,
  // );

  it('renders as default h2 with button title', () => {
    render(
      <ToggleBlock
        title="My Title"
      >
        <p>Child Element</p>
      </ToggleBlock>,
    )
    expect(screen.getByRole('button', {name: /My Title/i})).toBeInTheDocument();
    expect(screen.getByRole('heading', {name: /My Title/i, level: 2})).toBeInTheDocument();
  });

  it.skip('renders with default classes', () => {
    expect(defaultWrapper.exists('h2.toggle-block-title')).toBe(true);
    expect(defaultWrapper.exists('div.toggle-block-inner')).toBe(true);
  });

  it('renders without button title', () => {
    render(
      <ToggleBlock
        title="My Title"
        allowToggle={false}
      >
        <p>Child Element</p>
      </ToggleBlock>,
    )
    expect(screen.queryByRole('button', {name: /My Title/i})).toBeNull();
    expect(screen.getByRole('heading', {name: /My Title/i, level: 2})).toBeInTheDocument();
  });

  it.skip('renders with custom headingClasses', () => {
    expect(customWrapper.exists('h2.custom-heading-class')).toBe(true);
    expect(customWrapper.find('h2.toggle-block-title').exists()).toBe(false);
  });

  it.skip('renders with custom innerClasses', () => {
    expect(customWrapper.exists('div.custom-inner-class')).toBe(true);
    expect(customWrapper.find('div.toggle-block-inner').exists()).toBe(false);
  });

  it.skip('renders in the closed state', () => {
    expect(defaultClosedWrapper.find('div.toggle-block-inner').exists()).toBe(false);
    expect(defaultClosedWrapper.exists('div.closed')).toBe(true);
  });

  it.skip('toggles render of children', () => {
    expect(defaultWrapper.exists('div.open')).toBe(true);
    expect(defaultWrapper.exists('div.closed')).toBe(false);
    defaultWrapper.find('h2 button').simulate('click');
    expect(defaultWrapper.find('div.toggle-block-inner').exists()).toBe(false);
    expect(defaultWrapper.exists('div.closed')).toBe(true);
    expect(defaultWrapper.exists('div.open')).toBe(false);
    defaultWrapper.find('h2 button').simulate('click');
    expect(defaultWrapper.exists('div.toggle-block-inner'));
    expect(defaultWrapper.exists('div.open')).toBe(true);
    expect(defaultWrapper.exists('div.closed')).toBe(false);
  });
});
