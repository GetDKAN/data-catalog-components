import React from 'react';

import Text from '../../components/Text';

export default {
  title: 'Components/Text',
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'string',
};
