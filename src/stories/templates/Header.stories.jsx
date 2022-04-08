import React from 'react';

import Header from '../../templates/Header';
import menu from '../../examples/menu.json';

export default {
  title: 'Templates/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  navItems: menu.map((item) => <a href={item.url}>{item.label}</a>),
  site: 'Site Name',
};
