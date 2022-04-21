import React from 'react';

import SearchList from '../../components/SearchList';

export default {
  title: 'Components/SearchList',
  component: SearchList,
};

const Template = (args) => <SearchList {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p>children</p>,
};
