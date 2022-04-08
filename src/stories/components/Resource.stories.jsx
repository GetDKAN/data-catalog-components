import React from 'react';

import Resource from '../../components/Resource';

export default {
  title: 'WIP/Resource',
  component: Resource,
};

const Template = (args) => <Resource {...args} />;

export const Default = Template.bind({});
Default.args = {
  apiURL: '',
};
