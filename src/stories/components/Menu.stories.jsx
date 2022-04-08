import React from 'react';

import Menu from '../../components/Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    {
      label: 'Home',
      url: '/',
      target: '_top',
    },
    {
      label: 'Datasets',
      url: '/search',
      target: '_top',
    },
    {
      label: 'Publishers',
      url: '/publishers',
      target: '_top',
    },
  ],
};
