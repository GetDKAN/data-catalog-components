import React from 'react';

import DataTablePageResults from '../../components/DataTable/DataTablePageResults';

export default {
  title: 'Components/DataTablePageResults',
  component: DataTablePageResults,
};

const Template = (args) => <DataTablePageResults {...args} />;

export const Default = Template.bind({});
Default.args = {
  total: 20,
  pageSize: 10,
  currentPage: 0,
};
