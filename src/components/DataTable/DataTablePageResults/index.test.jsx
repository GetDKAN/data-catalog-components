import React from 'react';
import { shallow } from 'enzyme';
import DataTablePageResults from '.';

describe('<DataTablePageResults />', () => {
  const defaultWrapper = shallow(
    <DataTablePageResults
      total={100}
      pageSize={10}
      currentPage={0}
    />,
  );

  const customWrapper = shallow(
    <DataTablePageResults
      total={100}
      pageSize={10}
      currentPage={4}
    />,
  );

  const viewingWrapper = shallow(
    <DataTablePageResults
      total={100}
      pageSize={10}
      currentPage={4}
      viewing
    />,
  );

  it('renders correct initial results', () => {
    expect(defaultWrapper.find('p').text()).toBe('1 - 10 of 100 rows');
  });

  it('renders correct results on subsequent pages', () => {
    expect(customWrapper.find('p').text()).toBe('41 - 50 of 100 rows');
  });

  it('Correctly displays appended viewing to results list', () => {
    expect(viewingWrapper.find('p').text()).toBe('Viewing 41 - 50 of 100 rows');
  })
  
});
