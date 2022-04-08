import React from 'react';

import SearchFacets from '../../components/SearchFacets';
import { updateSelectedFacetsState } from '../../services/search/search_reducer';

export default {
  title: 'Components/SearchFacets',
  component: SearchFacets,
};

const Template = (args) => <SearchFacets {...args} />;
// const [selectedFacets, setSelectedFacets] = React.useState([]);

export const Default = Template.bind({});
Default.args = {
  setSelectedFacets: selectedFacets,
  dispatch: (e) => {
    const facet = updateSelectedFacetsState({ selectedFacets }, e);
    setSelectedFacets(facet.selectedFacets);
  },
  facetsResults: [
    { type: 'theme', name: 'Transportation', total: '1' },
    { type: 'theme', name: 'City Planning', total: '3' },
    { type: 'theme', name: 'Finance and Budgeting', total: '4' },
    { type: 'theme', name: 'Public Safety', total: '1' },
    { type: 'theme', name: 'Health Care', total: '2' },
    { type: 'keyword', name: 'No keyword provided', total: '1' },
    { type: 'keyword', name: 'demographics', total: '3' },
    { type: 'keyword', name: 'economy', total: '3' },
    { type: 'keyword', name: 'spatial data', total: '1' },
    { type: 'keyword', name: 'United Kingdom', total: '1' },
    { type: 'keyword', name: 'crime', total: '1' },
    { type: 'keyword', name: 'public safety', total: '1' },
    { type: 'keyword', name: 'socioeconomic', total: '1' },
    { type: 'keyword', name: 'workforce', total: '1' },
    { type: 'keyword', name: 'health', total: '2' },
    { type: 'keyword', name: 'election', total: '2' },
    { type: 'keyword', name: 'politics', total: '2' },
    { type: 'keyword', name: 'transparency', total: '2' },
    { type: 'keyword', name: 'price', total: '1' },
    { type: 'keyword', name: 'time-series', total: '1' },
    { type: 'keyword', name: 'country-afghanistan', total: '1' },
    {
      type: 'publisher__name',
      name: 'State Economic Council',
      total: '5',
    },
    {
      type: 'publisher__name',
      name: 'Committee on International Affairs',
      total: '3',
    },
    {
      type: 'publisher__name',
      name: 'Advisory Council for Infectious Disease',
      total: '2',
    },
  ],
  facetsConfig: {
    theme: {
      label: 'Topics',
      field: 'theme.0.title',
      showAll: false,
      limit: 10,
      reset: {
        active: false,
        icon: <span></span>,
      },
    },
    keyword: {
      label: 'Tags',
      field: 'keyword.*.title',
      showAll: false,
      limit: 10,
      reset: {
        active: false,
        icon: <span></span>,
      },
    },
    publisher__name: {
      label: 'Publishers',
      field: 'publisher__name',
      showAll: false,
      limit: 10,
      reset: {
        active: false,
        icon: <span></span>,
      },
    },
    empty: {
      label: 'Empty',
      field: 'empty',
      showAll: false,
      limit: 10,
      reset: {
        active: false,
        icon: <span></span>,
      },
    },
  },
};
