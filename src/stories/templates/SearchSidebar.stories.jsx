import React from 'react';

import SearchSidebar from '../../templates/SearchSidebar';

export default {
  title: 'WIP/SearchSidebar',
  component: SearchSidebar,
};

const Template = (args) => <SearchSidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  sortOptions: [
    { field: 'modified', order: 'desc', label: 'Date' },
    { field: 'title', order: 'asc', label: 'Alphabetical' },
  ],
};
