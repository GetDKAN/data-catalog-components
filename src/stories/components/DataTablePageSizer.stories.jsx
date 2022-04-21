import React from 'react';

import DataTablePageSizer from '../../components/DataTable/DataTablePageSizer';

export default {
  title: 'Components/DataTablePageSizer',
  component: DataTablePageSizer,
};

const Template = (args) => <DataTablePageSizer {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageSizeChange: () => ({}),
  id: '123',
};
