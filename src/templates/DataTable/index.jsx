import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ResourceDispatch } from '../../services/resource/resource_tools';

const DataTable = () => {
  const { resourceState, reactTable, dispatch } = useContext(ResourceDispatch);
  const density = resourceState.density ? `${resourceState.density} -striped -highlight` : '-striped -highlight';

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    state: {
      pageIndex, sortBy, filters,
    },
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
  } = reactTable;
  React.useEffect(() => {
    if (resourceState.currentPage !== pageIndex) {
      dispatch({ type: 'UPDATE_PAGE', data: { page: pageIndex } });
    }
  }, [pageIndex]);

  React.useEffect(() => {
    if (resourceState.sort !== sortBy) {
      dispatch({ type: 'UPDATE_COLUMN_SORT', data: { sort: sortBy } });
    }
  }, [sortBy]);

  React.useEffect(() => {
    if (resourceState.filters !== filters) {
      dispatch({ type: 'UPDATE_FILTERS', data: { filters } });
    }
  }, [filters]);
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
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' -🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                  {column.render('Header')}
                  
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
              onClick={() => nextPage()} //
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
