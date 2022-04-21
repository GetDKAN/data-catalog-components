import React from 'react';

import Organization from '../../components/Organization';

export default {
  title: 'Components/Organization',
  component: Organization,
};

const Template = (args) => <Organization {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Group Name',
  description: 'Group Description.',
};
