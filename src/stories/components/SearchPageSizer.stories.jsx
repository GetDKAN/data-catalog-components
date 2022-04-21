import React from 'react';

import SearchPageSizer from '../../components/SearchPageSizer';

export default {
  title: 'Components/SearchPageSizer',
  component: SearchPageSizer,
};

const Template = (args) => <SearchPageSizer {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentValue: 0,
  resizeFunc: () => ({}),
};
