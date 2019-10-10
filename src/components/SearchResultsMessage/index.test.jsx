import React from 'react';
import { shallow } from 'enzyme';
import SearchResultsMessage from '.';

describe('<SearchResultMessage />', () => {
  const defaultWrapper = shallow(
    <SearchResultsMessage
      searchTerm=""
      selectedFacets={[]}
      facetTypes={['Themes', 'Keywords']}
      total={10}
    />,
  );
  const customWrapper = shallow(
    <SearchResultsMessage
      searchTerm="foobar"
      selectedFacets={[
        ['Themes', 'Foo'],
        ['Keywords', 'Bar'],
        ['Keywords', 'Run'],
      ]}
      facetTypes={['Themes', 'Keywords']}
      total={10}
    />,
  );
  const condensedWrapper = shallow(
    <SearchResultsMessage
      searchTerm="foobar"
      selectedFacets={[
        ['Themes', 'Foo'],
        ['Keywords', 'Bar'],
        ['Keywords', 'Run'],
        ['Keywords', 'Fun'],
      ]}
      facetTypes={['Themes', 'Keywords']}
      total={10}
    />,
  );
  const noShowWrapper = shallow(
    <SearchResultsMessage
      searchTerm="foobar"
      selectedFacets={[
        ['Themes', 'Foo'],
        ['Keywords', 'Bar'],
        ['Keywords', 'Run'],
      ]}
      facetTypes={['Themes', 'Keywords']}
      total={10}
      showQuery={false}
      showFacets={false}
    />,
  );
  const singleItemWrapper = shallow(
    <SearchResultsMessage
      searchTerm=""
      selectedFacets={[]}
      facetTypes={['Themes', 'Keywords']}
      total={1}
    />,
  );
  const completeMessage = '10 datasets found for "foobar" in Themes: Foo | Keywords: Bar or Run';
  const condensedMessage = '10 datasets found for "foobar" in Themes: Foo | Keywords: 3 selected Keywords';
  it('renders with default message', () => {
    expect(defaultWrapper.find('div p').text()).toBe('10 datasets found');
  });
  it('renders with default single message', () => {
    expect(singleItemWrapper.find('div p').text()).toBe('1 dataset found');
  });
  it('renders complete message', () => {
    expect(customWrapper.find('div p').text()).toBe(completeMessage);
  });
  it('renders complete message', () => {
    expect(condensedWrapper.find('div p').text()).toBe(condensedMessage);
  });
  it('renders complete message', () => {
    expect(noShowWrapper.find('div p').text()).toBe('10 datasets found');
  });
});
