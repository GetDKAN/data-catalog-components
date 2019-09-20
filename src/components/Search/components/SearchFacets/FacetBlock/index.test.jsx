import React from 'react';
import { shallow } from 'enzyme';
import { FacetBlock } from './index';

describe('<FacetBlock />', () => {
  const defaultWrapper = shallow(
    <FacetBlock
      title="My Title"
    >
      <p>Child Element</p>
    </FacetBlock>,
  );

  const customWrapper = shallow(
    <FacetBlock
      title="My Custom Title"
      headingClasses="custom-heading-class"
      innerClasses="custom-inner-class"
      allowToggle={false}
    >
      <p>Child Element</p>
    </FacetBlock>,
  );

  it('renders as default h2 with button title', () => {
    expect(defaultWrapper.find('h2 button').text()).toBe('My Title');
  });

  it('renders with default classes', () => {
    expect(defaultWrapper.exists('h2.dkan-facet-block-title')).toBe(true);
    expect(defaultWrapper.exists('div.dkan-facet-block-inner')).toBe(true);
  });

  it('renders without button title', () => {
    expect(customWrapper.find('h2').text()).toBe('My Custom Title');
    expect(customWrapper.find('h2 button').exists()).toBe(false);
  });

  it('renders with custom headingClasses', () => {
    expect(customWrapper.exists('h2.custom-heading-class')).toBe(true);
    expect(customWrapper.find('h2.dkan-facet-block-title').exists()).toBe(false);
  });

  it('renders with custom innerClasses', () => {
    expect(customWrapper.exists('div.custom-inner-class')).toBe(true);
    expect(customWrapper.find('div.dkan-facet-block-inner').exists()).toBe(false);
  });

  it('toggles render of children', () => {
    defaultWrapper.find('h2 button').simulate('click');
    expect(defaultWrapper.find('div.dkan-facet-block-inner').exists()).toBe(false);
    defaultWrapper.find('h2 button').simulate('click');
    expect(defaultWrapper.exists('div.dkan-facet-block-inner'));
  });
});
