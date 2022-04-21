import React from 'react';

import Tags from '../../components/Tags';

export default {
  title: 'Components/Tags',
  component: Tags,
};

const Template = (args) => <Tags {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Tags',
  path: 'http://localhost:3000/',
  tags: [
    { data: 'dkan', identifier: '1234' },
    { data: 'react', identifier: '4321' },
  ],
};
