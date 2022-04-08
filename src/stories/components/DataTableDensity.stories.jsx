import React from 'react';

import DataTableDensity from '../../components/DataTable/DataTableDensity';
import { text } from '@storybook/addon-knobs';

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
      text: text('Density Button 1', 'Expanded'),
      value: 'density-1',
    },
    {
      icon: null,
      text: text('Density Button 2', 'Normal'),
      value: 'density-2',
    },
    { icon: null, text: text('Density Button 3', 'Tight'), value: 'density-3' },
  ],
  densityChange: '{() => ({})}',
};
