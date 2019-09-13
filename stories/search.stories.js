import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import SearchList from '../src/components/SearchList';
import SearchListItem from '../src/components/SearchListItem';
import InputLarge from '../src/components/InputLarge';
import FacetList from '../src/components/FacetList';
import SearchInput from '../src/components/SearchInput';

import search from './data/search.json';

const selectedFacets = search.selectedFacets;
const facetsResults = search.facetsResults;
const query = search.query;
const facets = search.facets;
const facetCallback = search.facetCallback;

const facetListProps = {
  query,
  facets,
  facetsResults,
  selectedFacets,
  facetCallback,
  Link,
  url: "search"
};

storiesOf('Search', module)
  .add('Item', () => <SearchListItem item={search.items[0]}/>)
  .add('List', () => <SearchList items={search.items} message="2 Datasets found" />)
  .add('Input Large', () => <InputLarge value={query} />)
  .add('Facet List', () => <Router><FacetList {... facetListProps} /></Router>)
  .add('Search Input', () => <SearchInput className="front-page-search" placeholder="Search the data" />)
