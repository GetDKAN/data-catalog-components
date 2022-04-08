import React from 'react';

import Table from '../../components/Table';
import tables from '../data/tables.json';

export default {
  title: 'Components/Table',
  component: Table,
};

const Template = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  configuration: {
    homepage: { label: 'Homepage URL' },
  },
  data: {
    homepage: '<a href="/">Home</a>',
  },
  tableclass: 'table-three',
};

export const Table1 = Template.bind({});
Table1.args = {
  configuration: tables.config1,
  data: tables.data1,
  title: 'Additional Information',
  th1: 'Field',
  th2: 'Value',
  tableclass: 'table-one',
};

export const Table2 = Template.bind({});
Table2.args = {
  configuration: tables.config2,
  data: tables.data2,
  title: 'What\'s in this Dataset?',
  th1: 'Rows',
  th2: 'Columns',
  tableclass: 'table-one',
};

export const Table3 = Template.bind({});
Table3.args = {
  configuration: tables.config3,
  data: tables.data3,
  title: 'Columns in this Dataset',
  th1: 'Column Name',
  th2: 'Type',
  tableclass: 'table-one',
};