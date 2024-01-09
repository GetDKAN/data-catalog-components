import React from 'react';
import {
  useTable,
  usePagination,
  useFilters,
  useSortBy,
  useFlexLayout,
  useResizeColumns,
  useColumnOrder,
} from 'react-table';

const columns = [{"Header":"record_number","accessor":"record_number"},{"Header":"date","accessor":"date"},{"Header":"price","accessor":"price"}];
const data = [
  { date: '1950-01-01', price: '34.73', record_number: 1 },
  { date: '1950-02-01', price: '34.73', record_number: 2 },
  { date: '1950-03-01', price: '34.73', record_number: 3 },
  { date: '1950-04-01', price: '34.73', record_number: 4 },
  { date: '1950-05-01', price: '34.73', record_number: 5 },
  { date: '1950-06-01', price: '34.73', record_number: 6 },
  { date: '1950-07-01', price: '34.73', record_number: 7 },
  { date: '1950-08-01', price: '34.73', record_number: 8 },
  { date: '1950-09-01', price: '34.73', record_number: 9 },
  { date: '1950-10-01', price: '34.73', record_number: 10 },
  { date: '1950-11-01', price: '34.73', record_number: 11 },
  { date: '1950-12-01', price: '34.72', record_number: 12 },
  { date: '1951-01-01', price: '34.72', record_number: 13 },
  { date: '1951-02-01', price: '34.73', record_number: 14 },
  { date: '1951-03-01', price: '34.73', record_number: 15 },
  { date: '1951-04-01', price: '34.73', record_number: 16 },
  { date: '1951-05-01', price: '34.73', record_number: 17 },
  { date: '1951-06-01', price: '34.73', record_number: 18 },
  { date: '1951-07-01', price: '34.72', record_number: 19 },
  { date: '1951-08-01', price: '34.71', record_number: 20 },
];

const MockResource = ({ children }) => {

  const store = {
    id: '144f86b3-9828-556a-be7c-9331b9843dc3',
    columns,
    rootUrl: '/api/1/',
    data: [{ expression: '748' }],
    values: data,
    storeType: 'DKAN',
    updateQuery: false,
  };


  const resourceState = {
    columnOrder: [],
    columnVisibility: {},
    columns,
    count: 20,
    currentPage: 0,
    density: 'density-3',
    filters: [],
    loading: false,
    pageSize: 20,
    queryAll: false,
    rowsTotal: 20,
    sort: [],
    store,
    values: [],
  };

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
      minWidth: 30,
      // width: 150,
      maxWidth: 400,
    }),
    [],
  );

  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows ? preFilteredRows.length : 0;
  
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

  const reactTable = useTable(
    {
      columns,
      data,
      manualPagination: true,
      manualSortBy: true,
      manualFilters: true,
      pageCount: Number(Math.ceil(resourceState.rowsTotal / resourceState.pageSize)),
      defaultColumn,
      filterTypes,
    },
    useFilters,
    useFlexLayout,
    useResizeColumns,
    useColumnOrder,
    useSortBy,
    usePagination,
  );


  return (
    <>{children}</>
  );
};

export default MockResource;
