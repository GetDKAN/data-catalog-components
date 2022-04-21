import React from 'react';

import SearchListItem from '../../components/SearchListItem';

export default {
  title: 'Components/SearchListItem',
  component: SearchListItem,
};

const Template = (args) => <SearchListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    ref: '/',
    title: 'Dataset Title',
    description: 'This is the description.',
    publisher: 'Data Provider Name',
    format: [
      {
        identifier: 1,
        format: 'csv',
      },
      { identifier: 2, format: 'json' },
      { identifier: 3, format: 'pdf' },
      { identifier: 4, format: 'rdf' },
      { identifier: 5, format: 'xml' },
    ],
    theme: ['category'],
    identifier: '123',
  },
};
