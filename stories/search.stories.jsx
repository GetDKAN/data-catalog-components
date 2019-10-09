/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, button } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import SearchList from '../src/components/SearchList';
import SearchListItem from '../src/components/SearchListItem';
import InputLarge from '../src/components/InputLarge';
import FacetList from '../src/components/FacetList';
import SearchInput from '../src/components/SearchInput';

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

storiesOf('Search', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add('Item', () => <SearchListItem item={search.items[0]} />)
  .add('List', () => <SearchList message={text('Title', '2 Datasets found')}>{searchListItems}</SearchList>)
  .add('Input Large', () => <InputLarge value={query} />)
  .add('Facet List', () => <Router><FacetList {... facetListProps} /></Router>)
  .add('Search Input', () => (<InputSearchParent />));
