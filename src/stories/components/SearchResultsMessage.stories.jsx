import React from 'react';

import SearchResultsMessage from '../../components/SearchResultsMessage';

export default {
  title: 'Components/SearchResultsMessage',
  component: SearchResultsMessage,
};

const Template = (args) => <SearchResultsMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectedFacets: [],
  facetTypes: [],
  defaultFacets: {},
  total: 0,
  searchTerm: '',
};
