import React from 'react';

import IconListItem from '../../components/IconListItem';

export default {
  title: 'Components/IconListItem',
  component: IconListItem,
};

const Template = (args) => <IconListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Education',
  link: '/search?theme=education',
  image: '',
  size: 40,
  color: 'red',
  identifier: '123',
};
