import React from 'react';

import DataTableDensity from '../../components/DataTable/DataTableDensity';

export default {
  title: 'Components/DataTableDensity',
  component: DataTableDensity,
};

const Template = (args) => <DataTableDensity {...args} />;

export const Default = Template.bind({});
Default.args = {
  densityChange: '{() => ({})}',
};

export const Other = Template.bind({});
Other.storyName = 'Custom';
Other.args = {
  title: 'Custom Title',
  items: [
    {
      icon: null,
      text: 'Expanded',
      value: 'density-1',
    },
    {
      icon: null,
      text: 'Normal',
      value: 'density-2',
    },
    { icon: null, text: 'Tight', value: 'density-3' },
  ],
  densityChange: '{() => ({})}',
};
