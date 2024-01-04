import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, select, number,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import {
  useTable,
  usePagination,
  useFilters,
  useSortBy,
  useBlockLayout,
  useResizeColumns,
  useColumnOrder,
} from 'react-table'
import FormatIcon from '../src/components/FormatIcon';
import FileDownload from '../src/components/FileDownload';
import Organization from '../src/components/Organization';
import Text from '../src/components/Text';
import Table from '../src/components/Table';
import Tags from '../src/components/Tags';
import DataIcon from '../src/components/DataIcon';
import DataTableDensity from '../src/components/DataTable/DataTableDensity';
import DataTablePageResults from '../src/components/DataTable/DataTablePageResults';
import data from './data/data.json';
import tables from './data/tables.json';
import '../src/theme/styles/index.scss';
import TopicIcon from '../src/templates/TopicIcon';
import TopicWrapper from '../src/components/TopicWrapper';
import DataTable from '../src/templates/DataTable';
import { resourceData } from './data/resourceData';

storiesOf('Dataset', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .add(
    'Format Icon',
    () => (
      <FormatIcon
        format={select(
          'Format',
          ['CSV', 'ZIP', 'JSON', 'PDF', 'RDF', 'XML', 'DATA'],
          'CSV',
        )}
        height={text('Height', '50')}
        width={text('Width', '50')}
        fill={text('Fill', '')}
      />
    ),
    { knobs: { escapeHTML: false } },
  )
  .add('File Download', () => <FileDownload title={data.distribution[0].title} downloadURL={data.distribution[0].downloadURL} format={data.distribution[0].format} />)
  .add('File Download with description', () => (
    <FileDownload
      title={data.distribution[0].title}
      downloadURL={data.distribution[0].downloadURL}
      format={data.distribution[0].format}
      description={data.distribution[0].description}
    />
  ))
  .add('Organization', () => (
    <Organization
      name={data.publisher.name}
      description={data.publisher.description}
      identifier={data.publisher.identifier}
      alignment={select(
        'Alignment',
        ['left', 'right', 'center'],
        'center',
      )}
    />
  ))
  .add(
    'Text',
    () => (
      <Text
        wrapper={{ tag: text('Tag', ''), classes: text('Classes', '') }}
        label={text('Label', 'I am a label')}
        value={text('Value', '<u>I am an underlined string.</u>')}
      >
        {text('Children', '')}
      </Text>
    ),
    { knobs: { escapeHTML: false } },
  )
  .add('Table 1', () => <Table configuration={tables.config1} data={tables.data1} title="Additional Information" th1="Field" th2="Value" tableclass="table-one" />)
  .add('Table 2', () => <Table configuration={tables.config2} data={tables.data2} title="What's in this Dataset?" th1="Rows" th2="Columns" tableclass="table-two" />)
  .add('Table 3', () => <Table configuration={tables.config3} data={tables.data3} title="Columns in this Dataset" th1="Column Name" th2="Type" tableclass="table-three" />)
  .add('Tags', () => <Tags label="Tags" tags={data.keyword} path="../search?keyword=" />)
  .add('TopicWrapper', () => <TopicWrapper component={TopicIcon} topic="Education" />)
  .add('Datatable Results Message', () => (
    <DataTablePageResults
      total={number('Total', 100)}
      pageSize={number('Page Size', 10)}
      currentPage={number('Current Page', 0)}
    />
  ))
  .add('Datatable Custom Density Buttons', () => (
    <DataTableDensity
      items={[
        { icon: null, text: text('Density Button 1', 'Expanded'), value: 'density-1' },
        { icon: null, text: text('Density Button 2', 'Normal'), value: 'density-2' },
        { icon: null, text: text('Density Button 3', 'Tight'), value: 'density-3' },
      ]}
      title={text('Title', 'Display Density')}
      densityChange={action('clicked')}
    />
  ))
  .add('Datatable Default Density Buttons', () => (
    <DataTableDensity
      items={[
        { icon: <DataIcon name="density-1" height={20} width={20} icon={'density-1'} fill="#666666" />, text: 'expanded' },
        { icon: <DataIcon name="density-2" height={20} width={20} icon={'density-2'} fill="#666666" />, text: 'normal' },
        { icon: <DataIcon name="density-3" height={20} width={20} icon={'density-3'} fill="#666666" />, text: 'tight' }
      ]}
    />
  ))
  .add('Datatable', () => {
    const filterTypes = React.useMemo(
      () => ({
        // Add a new fuzzyTextFilterFn filter type.
        // fuzzyText: fuzzyTextFilterFn,
        // Or, override the default text filter to use
        // "startWith"
        text: (rows, id, filterValue) => (
          rows.filter((row) => {
            const rowValue = row.values[id];
            return rowValue !== undefined
              ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
              : true;
          })
        ),
      }),
      [],
    );
    function DefaultColumnFilter({
      column: { filterValue, preFilteredRows, setFilter },
    }) {
      const count = preFilteredRows.length;

      return (
        <input
          value={filterValue || ''}
          onChange={(e) => {
            setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
          }}
          placeholder={`Search ${count} records...`}
        />
      );
    }
    const defaultColumn = React.useMemo(
      () => ({
        // Let's set up our default Filter UI
        Filter: DefaultColumnFilter,
        minWidth: 30,
        width: 150,
        maxWidth: 400,
      }),
      [],
    );
    const reactTable = useTable(
      {
        columns: resourceData.columns,
        data: resourceData.store.data,
        initialState: { pageIndex: 0 },
        manualPagination: true,
        pageCount: Number(Math.ceil(resourceData.rowsTotal / 10)),
        defaultColumn,
        filterTypes,
      },
      useFilters,
      useBlockLayout,
      useResizeColumns,
      useColumnOrder,
      useSortBy,
      usePagination,
    );
    return ( <DataTable /> );
  });
