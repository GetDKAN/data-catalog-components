import React from 'react';

import ApiDocs from '../../components/ApiDocs';

export default {
  title: 'WIP/ApiDocs',
  component: ApiDocs,
};

const Template = (args) => <ApiDocs {...args} />;

export const Default = Template.bind({});
Default.args = {
  endpoint: 'https://demo.getdkan.org/api/1',
  uuid: '',
};
