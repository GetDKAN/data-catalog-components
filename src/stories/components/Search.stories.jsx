import React from 'react';

import Search from '../../components/Search';

export default {
  title: 'Components/Search',
  component: Search,
};

const Template = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  location: {},
  searchEndpoint: '',
  defaultFacets: {
    theme: {
      label: 'Topics',
      field: 'theme.0.title',
      showAll: false,
      limit: 10,
      reset: {
        active: false,
        icon: <span></span>,
      },
    },
    keyword: {
      label: 'Tags',
      field: 'keyword.*.title',
      showAll: false,
      limit: 10,
      reset: {
        active: false,
        icon: <span></span>,
      },
    },
    publisher__name: {
      label: 'Publishers',
      field: 'publisher__name',
      showAll: false,
      limit: 10,
      reset: {
        active: false,
        icon: <span></span>,
      },
    },
  },
  sortOptions: [
    {
      field: 'modified',
      order: 'desc',
      label: 'Date',
    },
    {
      field: 'title',
      order: 'asc',
      label: 'Alphabetical',
    },
  ],
  path: '',
  children: <p>search</p>,
};
