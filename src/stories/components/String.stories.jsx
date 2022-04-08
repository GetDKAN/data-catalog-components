import React from 'react';

import String from '../../components/String';

export default {
  title: 'Components/String',
  component: String,
};

const Template = (args) => <String {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'String Label',
  value: 'String value',
};
