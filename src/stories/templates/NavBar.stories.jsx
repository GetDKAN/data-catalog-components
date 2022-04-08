import React from 'react';

import NavBar from '../../templates/NavBar';

export default {
  title: 'Templates/NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  navItems: [
    {
      label: 'Home',
      url: '/',
      target: '_top',
    },
    {
      label: 'Topic Icon',
      url: '/templates/topic-icon',
      target: '_top',
    },
  ].map((item) => <a href={item.url}>{item.label}</a>),
};
