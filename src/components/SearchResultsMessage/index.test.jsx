import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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
    
  // const defaultWrapper = mount(
  //   <SearchResultsMessage
  //     searchTerm=""
  //     selectedFacets={[]}
  //     facetTypes={['Theme', 'Keyword']}
  //     total={10}
  //     defaultFacets={defaultFacets}
  //   />,
  // );
  test('renders with default message', () => {
    render(
      <SearchResultsMessage
        searchTerm=""
        selectedFacets={[]}
        facetTypes={['Theme', 'Keyword']}
        total={10}
        defaultFacets={defaultFacets}
      />
    )
    expect(screen.getByText(/10 datasets found/)).toBeInTheDocument();
  });

  // const singleItemWrapper = mount(
  //   <SearchResultsMessage
  //     searchTerm=""
  //     selectedFacets={[]}
  //     facetTypes={['Theme', 'Keyword']}
  //     total={1}
  //     defaultFacets={defaultFacets}
  //   />,
  // );
  test.skip('renders with default single message', () => {
    expect(singleItemWrapper.find('p').text()).toBe('1 dataset found');
  });

  // const customWrapper = mount(
  //   <SearchResultsMessage
  //     searchTerm="foobar"
  //     selectedFacets={[
  //       ['Theme', 'Foo'],
  //       ['Keyword', 'Bar'],
  //       ['Keyword', 'Run'],
  //     ]}
  //     facetTypes={['Theme', 'Keyword']}
  //     total={10}
  //     defaultFacets={defaultFacets}
  //   />,
  // );
  // const completeMessage = '10 datasets found for "foobar" in Topics: Foo | Tags: Bar or Run';
  test.skip('renders complete message', () => {
    expect(customWrapper.find('p').text()).toBe(completeMessage);
  });

  // const condensedWrapper = mount(
  //   <SearchResultsMessage
  //     searchTerm="foobar"
  //     selectedFacets={[
  //       ['Theme', 'Foo'],
  //       ['Keyword', 'Bar'],
  //       ['Keyword', 'Run'],
  //       ['Keyword', 'Fun'],
  //     ]}
  //     facetTypes={['Theme', 'Keyword']}
  //     total={10}
  //     defaultFacets={defaultFacets}
  //   />,
  // );
  // const condensedMessage = '10 datasets found for "foobar" in Topics: Foo | Tags: 3 selected Tags';
  test.skip('renders a condensed facets message', () => {
    expect(condensedWrapper.find('p').text()).toBe(condensedMessage);
  });

  // const noShowWrapper = mount(
  //   <SearchResultsMessage
  //     searchTerm="foobar"
  //     selectedFacets={[
  //       ['Theme', 'Foo'],
  //       ['Keyword', 'Bar'],
  //       ['Keyword', 'Run'],
  //     ]}
  //     facetTypes={['Theme', 'Keyword']}
  //     total={10}
  //     showQuery={false}
  //     showFacets={false}
  //     defaultFacets={defaultFacets}
  //   />,
  // );
  test.skip('renders a message with no query or facets', () => {
    expect(noShowWrapper.find('p').text()).toBe('10 datasets found');
  });

  // const delimiterWrapper = mount(
  //   <SearchResultsMessage
  //     searchTerm="foobar"
  //     selectedFacets={[
  //       ['Theme', 'Foo'],
  //       ['Keyword', 'Bar'],
  //       ['Keyword', 'Run'],
  //     ]}
  //     facetTypes={['Theme', 'Keyword']}
  //     total={10}
  //     facetDelimiter=", "
  //     facetSeparator=" &amp; "
  //     defaultFacets={defaultFacets}
  //   />,
  // );
  // const customDelimiterMessage = '10 datasets found for "foobar" in Topics: Foo & Tags: Bar, Run';
  test.skip('renders facets with correct delimiter', () => {
    expect(delimiterWrapper.find('p').text()).toBe(customDelimiterMessage);
  });
});
