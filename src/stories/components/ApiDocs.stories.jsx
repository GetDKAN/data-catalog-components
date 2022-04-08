import React from 'react';

import ApiDocs from '../../components/ApiDocs';

export default {
  title: 'Components/ApiDocs',
  component: ApiDocs,
};

const Template = (args) => <ApiDocs {...args} />;

export const Default = Template.bind({});
Default.args = {
  endpoint: 'https://dkan.cadiz.local.ddev.site/api/1',
  uuid: '',
};
