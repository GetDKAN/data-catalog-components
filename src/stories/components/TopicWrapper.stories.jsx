import React from 'react';

import TopicWrapper from '../../components/TopicWrapper';
import TopicIcon from '../../templates/TopicIcon';

export default {
  title: 'Components/TopicWrapper',
  component: TopicWrapper,
};

const Template = (args) => <TopicWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  component: TopicIcon,
  topic: 'My Topic Name',
};
