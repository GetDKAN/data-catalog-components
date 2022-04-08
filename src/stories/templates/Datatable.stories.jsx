import React from 'react';

import DataTable from '../../templates/DataTable';
import { resourceData } from '../data/resourceData';
import { ResourceDispatch } from '../../services/resource/resource_defaults';
import {
  useBlockLayout,
  useColumnOrder,
  useFilters,
  usePagination,
  useResizeColumns,
  useSortBy,
  useTable,
} from 'react-table';

export default {
  title: 'Templates/DataTable',
  component: DataTable,
};

export const Default = () => {
  const filterTypes = React.useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
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
    []
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
    usePagination
  );

  return (
    <ResourceDispatch.Provider
      value={{ resourceState: resourceData, dispatch: () => ({}), reactTable }}
    >
      <DataTable />
    </ResourceDispatch.Provider>
  );
};
