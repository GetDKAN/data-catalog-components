/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, number, select, boolean,
} from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import SearchList from '../components/SearchList';
import SearchListItem from '../components/SearchListItem';
import SearchInput from '../components/SearchInput';
import SearchResultsMessage from '../components/SearchResultsMessage';
import '../theme/styles/index.scss';
import search from './data/search.json';

const { query, items } = search;

const InputSearchParent = () => {
  const [inputValue, setInputValue] = useState('');
  function handleString(e) {
    e.preventDefault();
    setInputValue(e.target.value);
  }
  return (
    <SearchInput
      className={text('className', 'catalog-search-input')}
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

storiesOf('Search', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add('Item', () => <SearchListItem item={getItem()} />)
  .add('List', () => <SearchList message={text('Title', '2 Datasets found')}>{getSearchListItems()}</SearchList>)
  .add('Input Large', () => <InputLarge value={query} />)
  .add('Search Input', () => (<InputSearchParent />))
  .add('Search Results Message', () => (
    <SearchResultsMessage
      searchTerm={text('Search Term', 'hello')}
      total={number('Total Results', 1000)}
      facetLimit={number('Facet Limit', 3)}
      facetDelimiter={text('Facet Delimiter', ' or ')}
      facetSeparator={text('Facet Separator', ' | ')}
      selectedFacets={select(
        'Selected Facets',
        { '2 Keywords': getSelectedFacetOptions(1), '3 Keywords': getSelectedFacetOptions(2) },
        getSelectedFacetOptions(1),
      )}
      facetTypes={['Themes', 'Keywords']}
      showQuery={boolean('Show Query', true)}
      showFacets={boolean('Show Facets', true)}
      defaultFacets={{ Themes: { label: 'Themes' }, Keywords: { label: 'Keywords' } }}
    />
));

function getItem() {
  return search.items[0];
}

function getSearchListItems() {
  return items.map((item) => (<SearchListItem item={item} />));
}

function getSelectedFacetOptions($index) {
  if ($index === 1) {
    return [
      ['Themes', 'Foo'],
      ['Keywords', 'Bar'],
      ['Keywords', 'Run'],
    ];
  }

  return [
    ['Themes', 'Foo'],
    ['Keywords', 'Bar'],
    ['Keywords', 'Run'],
    ['Keywords', 'DKAN'],
  ];
}
