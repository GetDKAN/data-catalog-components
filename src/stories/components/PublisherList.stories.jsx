import React from 'react';

import PublisherList from '../../components/PublisherList';
import items from '../../examples/publishers.json';

export default {
  title: 'Components/PublisherList',
  component: PublisherList,
};

const Template = (args) => <PublisherList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: items,
};
