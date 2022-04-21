import React from 'react';

import FileDownload from '../../components/FileDownload';

export default {
  title: 'Components/FileDownload',
  component: FileDownload,
};

const Template = (args) => <FileDownload {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Dataset CSV File',
  format: 'csv',
  downloadURL: 'http://localhost:3000/',
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  title: 'Dataset CSV File',
  format: 'csv',
  downloadURL: 'http://localhost:3000/',
  description: 'This could be some additional information about the csv file.',
};
