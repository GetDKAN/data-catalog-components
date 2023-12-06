import React, { useContext, useState } from 'react';
import { ResourceDispatch } from '../../services/resource/resource_defaults';
import ColumnFilter from '../../components/ColumnFilter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  createColumnHelper,
  getSortedRowModel,
  getPaginationRowModel
} from '@tanstack/react-table';

const DataTable = () => {
  const { resourceState, dispatch, reactTable } = useContext(ResourceDispatch);
  const columns = resourceState.columns;
  const density = resourceState.density ? `${resourceState.density} -striped -highlight` : '-striped -highlight';

  const { pagination, sorting, columnFilters } = reactTable.getState();
  
  React.useEffect(() => {
    if (resourceState.store) {
      if (resourceState.currentPage !== pagination.pageIndex) {
        dispatch({ type: 'UPDATE_PAGE', data: { page: pagination.pageIndex } });
      }
    }
  }, [resourceState.store, pagination.pageIndex]);
  React.useEffect(() => {
    if (resourceState.store) {
      if (resourceState.sorting !== sorting) {
        dispatch({ type: 'UPDATE_COLUMN_SORT', data: { sort: sorting } });
      }
    }
  }, [resourceState.store, sorting]);
  React.useEffect(() => {
    if (resourceState.store) {
      if (resourceState.filters !== columnFilters) {
        dispatch({ type: 'UPDATE_FILTERS', data: { columnFilters } });
      }
    }
  }, [resourceState.store, columnFilters]);

  const headerGroups = reactTable.getHeaderGroups();

  const sortIcon = (isSorted, onClickFn) => {
    if(isSorted === 'asc') {
      return 'sort-up'
    }
    if(isSorted === 'desc') {
      return 'sort-down'
    }
    return 'sort'
  }

  return (
    <>
    <table className={`dc-datatable -striped -highlight ${density}`}>
      <thead className="dc-thead -header">
        {columns.length && headerGroups.map((headerGroup) => (
          <tr
            role="row"
            className="tr"
            key="header"
          >
            {headerGroup.headers.map(header => (
              <th {
                ...{
                  key: header.id,
                  style: {
                    width: header.getSize(),
                    position: 'relative'
                  },
                  title: header.column.columnDef.header
                }
              }
              className="ds-u-border-y--2 ds-u-padding--2 ds-u-border--dark  ds-u-font-weight--bold dc-c-table-header-cell"
              >
                <div className="dc-sort" >
                  <span style={{maxWidth: header.getSize() - 16}} >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                      )}
                  </span>
                  <button onClick={header.column.getToggleSortingHandler()} aria-label={`${header.column.columnDef.header} sort order`}>
                    <FontAwesomeIcon icon={["fas", sortIcon((header.column.getIsSorted()))]} />
                  </button>
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
                {header.column.getCanFilter() ? (
                  <div className="dc-filter">
                    <ColumnFilter column={header.column} resourceState={resourceState} />
                  </div>
                ) : null}
              </th>
            ))}
          </tr>
        ))}
      </thead>
        
      <tbody className="dc-tbody">
        {reactTable.getRowModel().rows.map((row, index) => {
          const even = (index + 1) % 2 === 0;
          return(
            <tr key={row.id} className={`${even ? "dc-c-datatable--even-row" : ""}`}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    {...{
                      key: cell.id,
                      style: {
                        width: cell.column.getSize(),
                      },
                    }}
                    className={`td dc-td`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          )
          })}
      </tbody>
    </table>
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
            onClick={() => reactTable.nextPage()}
            disabled={!reactTable.getCanNextPage()}
            className="-btn"
          >
            {'>'}
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default DataTable;