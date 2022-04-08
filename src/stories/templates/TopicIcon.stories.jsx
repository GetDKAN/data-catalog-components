import React from 'react';

import TopicIcon from '../../templates/TopicIcon';

export default {
  title: 'Templates/TopicIcon',
  component: TopicIcon,
};

const Template = (args) => <TopicIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Health',
};
