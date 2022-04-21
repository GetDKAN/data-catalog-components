import React from 'react';

import FormatIcon from '../../components/FormatIcon';

export default {
  title: 'Components/FormatIcon',
  component: FormatIcon,
};

const Template = (args) => <FormatIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  format: 'csv',
};
