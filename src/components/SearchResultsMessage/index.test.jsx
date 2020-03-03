import React from 'react';
import { shallow } from 'enzyme';
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
  const defaultWrapper = shallow(
    <SearchResultsMessage
      searchTerm=""
      selectedFacets={[]}
      facetTypes={['Theme', 'Keyword']}
      total={10}
      defaultFacets={defaultFacets}
    />,
  );
  const customWrapper = shallow(
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
  const condensedWrapper = shallow(
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
  const noShowWrapper = shallow(
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
  const singleItemWrapper = shallow(
    <SearchResultsMessage
      searchTerm=""
      selectedFacets={[]}
      facetTypes={['Theme', 'Keyword']}
      total={1}
      defaultFacets={defaultFacets}
    />,
  );
  const delimiterWrapper = shallow(
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
  const completeMessage = '10 datasets found for "foobar" in Topics: Foo | Tags: Bar or Run';
  const customDelimiterMessage = '10 datasets found for "foobar" in Topics: Foo & Tags: Bar, Run';
  const condensedMessage = '10 datasets found for "foobar" in Topics: Foo | Tags: 3 selected Keyword';
  it('renders with default message', () => {
    expect(defaultWrapper.find('div p').text()).toBe('10 datasets found');
  });
  it('renders with default single message', () => {
    expect(singleItemWrapper.find('div p').text()).toBe('1 dataset found');
  });
  it('renders complete message', () => {
    expect(customWrapper.find('div p').text()).toBe(completeMessage);
  });
  it('renders a condensed facets message', () => {
    expect(condensedWrapper.find('div p').text()).toBe(condensedMessage);
  });
  it('renders a message with no query or facets', () => {
    expect(noShowWrapper.find('div p').text()).toBe('10 datasets found');
  });
  it('renders facets with correct delimiter', () => {
    expect(delimiterWrapper.find('div p').text()).toBe(customDelimiterMessage);
  });
});
