import React from 'react';

import Announcement from '../../templates/Announcement';

export default {
  title: 'Templates/Announcement',
  component: Announcement,
};

const Template = (args) => <Announcement {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Announcement',
  children: 'This is my announcement',
  variation: 'info',
  role: 'alert',
};
