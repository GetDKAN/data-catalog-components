import React from 'react';

import IconList from '../../components/IconList';
import IconListItem from '../../components/IconListItem';
import themes from '../../examples/themes.json';
import home from '../data/home.json';

export default {
  title: 'Components/IconList',
  component: IconList,
};

const Template = (args) => <IconList {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: themes,
  paneTitle: 'My list of theme links',
  component: IconListItem,
};

export const TopicsListExternalImages = Template.bind({});
TopicsListExternalImages.args = {
  items: home.topics,
  paneTitle: 'Dataset Topics',
  component: IconListItem,
  listClass: 'icon-list',
  containerClass: 'container',
  titleAlign: 'left',
};

export const TopicsListInternalImages = Template.bind({});
TopicsListInternalImages.args = {
  items: home.topics2,
  paneTitle: 'Section Title',
  component: IconListItem,
  listClass: 'icon-list',
  containerClass: 'container',
};
