import React from 'react';

import PageHeader from '../../components/PageHeader';

export default {
  title: 'Components/PageHeader',
  component: PageHeader,
};

const Template = (args) => <PageHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Page Header Title',
};
