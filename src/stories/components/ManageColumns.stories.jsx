import React from 'react';

import ManageColumns from '../../components/DataTable/ManageColumns';

export default {
  title: 'WIP/ManageColumns',
  component: ManageColumns,
};

const Template = (args) => <ManageColumns {...args} />;

export const Default = Template.bind({});
Default.args = {};
