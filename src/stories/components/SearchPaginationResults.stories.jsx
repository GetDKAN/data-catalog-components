import React from 'react';

import SearchPaginationResults from '../../components/SearchPaginationResults';

export default {
  title: 'Components/SearchPaginationResults',
  component: SearchPaginationResults,
};

const Template = (args) => <SearchPaginationResults {...args} />;

export const Default = Template.bind({});
Default.args = {
  total: 20,
  pageSize: 10,
  currentPage: 1,
};
