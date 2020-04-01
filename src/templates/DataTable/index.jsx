import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ResourceDispatch } from '../../services/resource/resource_tools';
import {
  useTable,
  usePagination,
  useFilters,
  useSortBy,
  useBlockLayout,
  useResizeColumns,
  useColumnOrder,
} from 'react-table'

const DataTable = () => {
  const { resourceState } = useContext(ResourceDispatch);
  const data = resourceState.values;
  const { columns } = resourceState;
  const density = resourceState.density ? `${resourceState.density} -striped -highlight` : '-striped -highlight';
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
  // Define a default UI for filtering
  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length

    return (
      <input
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
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
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    pageCount,
    page,
    state: { pageIndex, pageSize},
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    allColumns,
    setColumnOrder,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: Number(Math.ceil(resourceState.rowsTotal / 10)),
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

  return (
    <div className={`dc-datatable -striped -highlight ${density}`}>
      <div {...getTableProps()} role="grid" className="dc-table">
        <div className="dc-thead -header">
          {headerGroups.map((headerGroup) => (
            <div
              role="row"
              {...headerGroup.getHeaderGroupProps()}
              className="tr"
            >
              {headerGroup.headers.map(column => (
                <div
                  style={{ position: 'relative' }}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="th"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' -🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                  <div
                    {...column.getResizerProps()}
                    className={`resizer ${column.isResizing ? 'isResizing' : ''}`}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="dc-thead -filters">
          {headerGroups.map((headerGroup) => (
            <div
              role="row"
              {...headerGroup.getHeaderGroupProps()}
              className="tr"
            >
              {headerGroup.headers.map((column) => (
                <div
                  style={{ position: 'relative' }}
                  {...column.getHeaderProps()}
                  className="th"
                >
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="dc-tbody">
          {page.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr dc-tr">
                {row.cells.map((cell) => <div {...cell.getCellProps()} className="td dc-td">{cell.render('Cell')}</div>)}
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagination-bottom">
        <div className="-pagination">
          <div className="-previous">
            <button
              type="button"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="-btn"
            >
              {'<'}
            </button>
          </div>
          <div className="-center">
            <span className="-pageInfo">
              Page
              {' '}
              <strong>
                {pageIndex + 1}
                {' '}
                of
                {' '}
                {pageOptions.length}
              </strong>
            </span>
          </div>
          <div className="-next">
            <button
              type="button"
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="-btn"
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
