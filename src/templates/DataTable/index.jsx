import React, { useContext } from 'react';

import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  createColumnHelper,
  getSortedRowModel,
  getPaginationRowModel
} from '@tanstack/react-table';

const DataTable = ({
  resource
}) => {
  console.log(resource);
  const columns = resource.columns;
  const data = resource.values;
  const columnHelper = createColumnHelper();
  const table_columns = columns.map((col) => {
    if (col.cell) {
      return (
        columnHelper.accessor(col.accessor, {
          header: col.header,
          cell: col.cell,
        })
      )
    }
    return (
      columnHelper.accessor(col.accessor, {
        header: col.header,
      })
    )
  })
  const reactTable = useReactTable(
    {
      data: data,
      columns: table_columns,
      manualSorting: true,
      columnResizeMode: 'onChange',
      state: {
        pagination: { pageSize: 20, pageIndex: 0 }
      },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      debugTable: false,
    }
  );
  const { pagination, sorting, columnFilters } = reactTable.getState();
  console.log(reactTable);
  const headerGroups = reactTable.getHeaderGroups();

  return (
    <table className={`dc-datatable -striped -highlight`}>
        <thead className="dc-thead -header">
          {columns.length && headerGroups.map((headerGroup) => (
            <tr
              role="row"
              className="tr"
            >
              {headerGroup.headers.map(header => (
                <th {
                  ...{
                    key: header.id,
                    style: {
                      width: header.getSize(),
                    },
                    title: header.column.columnDef.header
                  }
                }
                className="ds-u-border-y--2 ds-u-padding--2 ds-u-border--dark  ds-u-font-weight--bold dc-c-table-header-cell"
                >
                  <div onClick={header.column.getToggleSortingHandler()}>
                    <span style={{maxWidth: header.getSize() - 16}} >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                        )}
                    </span>
                    <span
                      {...{
                        className: header.column.getCanSort()
                          ? `cursor-pointer select-none`
                          : '',
                      }}
                    />
                  </div>
                  <span
                    {...{
                      onMouseDown: header.getResizeHandler(),
                      onTouchStart: header.getResizeHandler(),
                      className: `dc-c-resize-handle ${
                        header.column.getIsResizing() ? 'isResizing' : ''
                      }`,
                    }}
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        
        <tbody className="dc-tbody">
          {reactTable.getRowModel().rows.map((row, index) => {
            const even = (index + 1) % 2 === 0;
            return(
              <tr key={row.id} className={`tr dc-tr ${even ? "dc-c-datatable--even-row" : ""}`}>
                {row.getVisibleCells().map((cell) => {
                  let classList = "dc-truncate ds-u-padding-x--1"
                  return (
                    <td
                      {...{
                        key: cell.id,
                        style: {
                          maxWidth: cell.column.getSize(),
                        },
                      }}
                      className={`td dc-td ${classList}`}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  );
                })}
              </tr>
            )
            })}
        </tbody>
      <div className="pagination-bottom">
        <div className="-pagination">
          <div className="-previous">
            <button
              type="button"
              onClick={() => reactTable.previousPage()}
              disabled={!reactTable.getCanPreviousPage()}
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
                {pagination.pageIndex + 1}
                {' '}
                of
                {' '}
                {reactTable.getPageCount()}
              </strong>
            </span>
          </div>
          <div className="-next">
            <button
              type="button"
              onClick={() => reactTable.nextPage()} //
              disabled={!reactTable.getCanNextPage()}
              className="-btn"
            >
              {'>'}
            </button>
          </div>
        </div>
        </div>
    </table>
  );
};

export default DataTable;

/*
        <div className="dc-thead -filters">
          {headerGroups.map((headerGroup) => (
            <div
              role="row"
              className="tr"
            >
              {headerGroup.headers.map((column) => (
                <div
                  style={{ position: 'relative' }}
                  className="th"
                >
                  <div>{column.canFilter ? column.render('Filter') : null}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        */