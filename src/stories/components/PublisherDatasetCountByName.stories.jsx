import React from 'react';

import PublisherDatasetCountByName from '../../components/PublisherDatasetCountByName';

export default {
  title: 'Components/PublisherDatasetCountByName',
  component: PublisherDatasetCountByName,
};

const Template = (args) => <PublisherDatasetCountByName {...args} />;

export const WithACountOfOne = Template.bind({});
WithACountOfOne.args = {
  datasetCount: '1',
  name: 'State Economic Council',
};

export const WithACountOfMoreThanOne = Template.bind({});
WithACountOfMoreThanOne.args = {
  datasetCount: '3',
  name: 'State Economic Council',
};

export const WithNoDatasetCount = Template.bind({});
WithNoDatasetCount.args = {
  datasetCount: '0',
  name: 'State Economic Council',
};
