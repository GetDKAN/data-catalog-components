import React from 'react';
import { mount } from 'enzyme';
import SearchResultsMessage from '.';

const defaultFacets = {
  Theme: {
    label: 'Topics',
    field: 'theme.0.title',
    showAll: false,
    limit: 10,
    reset: {
      active: false,
      icon: <span />,
    },
  },
  Keyword: {
    label: 'Tags',
    field: 'keyword.*.title',
    showAll: false,
    limit: 10,
    reset: {
      active: false,
      icon: <span />,
    },
  },
};

describe('<SearchResultMessage />', () => {
    
  const defaultWrapper = mount(
    <SearchResultsMessage
      searchTerm=""
      selectedFacets={[]}
      facetTypes={['Theme', 'Keyword']}
      total={10}
      defaultFacets={defaultFacets}
    />,
  );
  it('renders with default message', () => {
    let ps = defaultWrapper.find('div p');
    expect(defaultWrapper.find('div p').text()).toBe('10 datasets found');
  });

  const singleItemWrapper = mount(
    <SearchResultsMessage
      searchTerm=""
      selectedFacets={[]}
      facetTypes={['Theme', 'Keyword']}
      total={1}
      defaultFacets={defaultFacets}
    />,
  );
  it('renders with default single message', () => {
    expect(singleItemWrapper.find('p').text()).toBe('1 dataset found');
  });

  const customWrapper = mount(
    <SearchResultsMessage
      searchTerm="foobar"
      selectedFacets={[
        ['Theme', 'Foo'],
        ['Keyword', 'Bar'],
        ['Keyword', 'Run'],
      ]}
      facetTypes={['Theme', 'Keyword']}
      total={10}
      defaultFacets={defaultFacets}
    />,
  );
  const completeMessage = '10 datasets found for "foobar" in Topics: Foo | Tags: Bar or Run';
  it('renders complete message', () => {
    expect(customWrapper.find('p').text()).toBe(completeMessage);
  });

  const condensedWrapper = mount(
    <SearchResultsMessage
      searchTerm="foobar"
      selectedFacets={[
        ['Theme', 'Foo'],
        ['Keyword', 'Bar'],
        ['Keyword', 'Run'],
        ['Keyword', 'Fun'],
      ]}
      facetTypes={['Theme', 'Keyword']}
      total={10}
      defaultFacets={defaultFacets}
    />,
  );
  const condensedMessage = '10 datasets found for "foobar" in Topics: Foo | Tags: 3 selected Tags';
  it('renders a condensed facets message', () => {
    expect(condensedWrapper.find('p').text()).toBe(condensedMessage);
  });

  const noShowWrapper = mount(
    <SearchResultsMessage
      searchTerm="foobar"
      selectedFacets={[
        ['Theme', 'Foo'],
        ['Keyword', 'Bar'],
        ['Keyword', 'Run'],
      ]}
      facetTypes={['Theme', 'Keyword']}
      total={10}
      showQuery={false}
      showFacets={false}
      defaultFacets={defaultFacets}
    />,
  );
  it('renders a message with no query or facets', () => {
    expect(noShowWrapper.find('p').text()).toBe('10 datasets found');
  });

  const delimiterWrapper = mount(
    <SearchResultsMessage
      searchTerm="foobar"
      selectedFacets={[
        ['Theme', 'Foo'],
        ['Keyword', 'Bar'],
        ['Keyword', 'Run'],
      ]}
      facetTypes={['Theme', 'Keyword']}
      total={10}
      facetDelimiter=", "
      facetSeparator=" &amp; "
      defaultFacets={defaultFacets}
    />,
  );
  const customDelimiterMessage = '10 datasets found for "foobar" in Topics: Foo & Tags: Bar, Run';
  it('renders facets with correct delimiter', () => {
    expect(delimiterWrapper.find('p').text()).toBe(customDelimiterMessage);
  });
});
