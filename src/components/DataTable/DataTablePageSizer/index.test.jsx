import React from 'react';
import { shallow, mount } from 'enzyme';
import DataTablePageSizer from '.';

describe('<DataTablePageSizer />', () => {
  const defaultWrapper = mount(
    <DataTablePageSizer
      pageSizeChange={() => () => true}
      id="1234"
    />,
  );

  const customWrapper = mount(
    <DataTablePageSizer
      pageSizeChange={() => () => true}
      id="1234"
      label="Foobar"
      currentOption="150"
      options={[
        { label: '20', value: '20' },
        { label: '50', value: '50' },
        { label: '100', value: '100' },
        { defaultChecked: true, label: '150', value: '150' },
        { label: '200', value: '200' },
        { label: '250', value: '250' },
      ]}
    />,
  );

  it('renders correct initial results', () => {
    expect(defaultWrapper.find('.dc-page-size-options label').text()).toBe('Rows per page');
    expect(defaultWrapper.find('.dc-page-size-options .page-size-select').props().value).toBe('20');
    expect(defaultWrapper.find('option')).toHaveLength(3);
  });

  it('renders correct custom results', () => {
    expect(customWrapper.find('.dc-page-size-options label').text()).toBe('Foobar');
    expect(customWrapper.find('.page-size-select').props().value).toBe('150');
    expect(customWrapper.find('option')).toHaveLength(6);
  });
});
