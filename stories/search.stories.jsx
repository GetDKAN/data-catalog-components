/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, number, select, boolean,
} from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import SearchList from '../src/components/SearchList';
import SearchListItem from '../src/components/SearchListItem';
import InputLarge from '../src/components/InputLarge';
import FacetList from '../src/components/FacetList';
import SearchInput from '../src/components/SearchInput';
import SearchResultsMessage from '../src/components/SearchResultsMessage';

import search from './data/search.json';

const InputSearchParent = () => {
  const [inputValue, setInputValue] = useState('');
  function handleString(e) {
    e.preventDefault();
    setInputValue(e.target.value);
  }
  return (
    <SearchInput
      className={text('className', 'front-page-search')}
      placeholder={text('Placeholder', 'Search the data')}
      value={inputValue}
      resetContent={text('Reset Content', 'Reset')}
      showSubmit={boolean('Show Submit', true)}
      submitContent={text('Submit Content', 'Submit')}
      onChangeFunction={(event) => handleString(event)}
      onResetFunction={() => setInputValue('')}
    />
  );
};

const {
  selectedFacets, facetsResults, query, facets, facetCallback, items,
} = search;

const searchListItems = items.map((item) => (<SearchListItem item={item} />));

const facetListProps = {
  query,
  facets,
  facetsResults,
  selectedFacets,
  facetCallback,
  Link,
  url: 'search',
};
const selectedFacetOptions1 = [
  ['Themes', 'Foo'],
  ['Keywords', 'Bar'],
  ['Keywords', 'Run'],
];
const selectedFacetOptions2 = [
  ['Themes', 'Foo'],
  ['Keywords', 'Bar'],
  ['Keywords', 'Run'],
  ['Keywords', 'DKAN'],
];

storiesOf('Search', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add('Item', () => <SearchListItem item={search.items[0]} />)
  .add('List', () => <SearchList message={text('Title', '2 Datasets found')}>{searchListItems}</SearchList>)
  .add('Input Large', () => <InputLarge value={query} />)
  .add('Facet List', () => <Router><FacetList {... facetListProps} /></Router>)
  .add('Search Input', () => (<InputSearchParent />))
  .add('Search Results Message', () => (
    <SearchResultsMessage
      searchTerm={text('Search Term', '')}
      total={number('Total Results', 10)}
      facetLimit={number('Facet Limit', 3)}
      selectedFacets={select(
        'Seleced Facets',
        { '2 Keywords': selectedFacetOptions1, '3 Keywords': selectedFacetOptions2 },
        selectedFacetOptions1,
      )}
      facetTypes={['Themes', 'Keywords']}
      showQuery={boolean('Show Query', true)}
      showFacets={boolean('Show Facets', true)}
    />
  ));
