import React from 'react';
import { render, screen } from '@testing-library/react';
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

describe.skip('<SearchResultMessage />', () => {
  it('renders with default message', () => {
    render(
      <SearchResultsMessage
        searchTerm=""
        selectedFacets={[]}
        facetTypes={['Theme', 'Keyword']}
        total={10}
        defaultFacets={defaultFacets}
      />,
    );
    expect(screen.getByText('10 datasets found')).toBeInTheDocument();
  });
  it('renders with default single message', () => {
    render(
      <SearchResultsMessage
        searchTerm=""
        selectedFacets={[]}
        facetTypes={['Theme', 'Keyword']}
        total={1}
        defaultFacets={defaultFacets}
      />,
    );
    expect(screen.getByText('1 datasets found')).toBeInTheDocument();
  });

  it('renders complete message', () => {
    render(
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
    expect(screen.getByText('10 datasets found for "foobar" in Topics: Foo | Tags: Bar or Run')).toBeInTheDocument();
  });

  it('renders a condensed facets message', () => {
    render(
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
    expect(screen.getByText('10 datasets found for "foobar" in Topics: Foo | Tags: 3 selected Tags')).toBeInTheDocument();
  });

  it('renders a message with no query or facets', () => {
    render(
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
    expect(screen.getByText('10 datasets found')).toBeInTheDocument();
  });

  it('renders facets with correct delimiter', () => {
    render(
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
    expect(screen.getByText('10 datasets found for "foobar" in Topics: Foo & Tags: Bar, Run')).toBeInTheDocument();
  });
});
