import React from 'react';

import SearchSort from '../../components/SearchSort';

export default {
  title: 'Components/SearchSort',
  component: SearchSort,
};

const Template = (args) => <SearchSort {...args} />;

export const Default = Template.bind({});
Default.args = {
  sortFunc: () => ({}),
  currentValue: 'relevance',
};
