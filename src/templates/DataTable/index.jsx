import React, { useState, useContext, useEffect } from 'react';
// import MetadataContext from '../MetadataPage/MetadataContext';
// import DatastoreContext from './DatastoreContext';
// import { ResourceDispatch } from '../../services/resource/resource_defaults';
// import ColumnFilter from '../../components/ColumnFilter';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import {
//   useReactTable,
//   flexRender,
//   getCoreRowModel,
//   createColumnHelper,
//   getSortedRowModel,
//   getFilteredRowModel
// } from '@tanstack/react-table';
// import DataTableHeader from '../../templates/DataTableHeader';

const DataTable = ({data, columns}) => {
  // const {dispatch, resourceState} = useContext(ResourceDispatch);
  // const [ariaLiveFeedback, setAriaLiveFeedback] = useState('')
  // const [columnResizing, setColumnResizing] = useState('');

  // const [columnOrder, setColumnOrder] = useState(resourceState.columnOrder);
  // useEffect(() => {
  //   if(JSON.stringify(columnOrder) != JSON.stringify(resourceState.columnOrder)) {
  //     dispatch({
  //       type: 'REORDER_COLUMNS',
  //       data: {
  //         columnOrder: columnOrder
  //       }
  //     });
  //   }
  // }, [columnOrder]);

  // const [columnVisibility, setColumnVisibility] = useState(resourceState.columnVisibility);
  // useEffect(() => {
  //   if(JSON.stringify(columnVisibility) != JSON.stringify(resourceState.columnVisibility)) {
  //     dispatch({
  //       type: 'COLUMN_VISIBILITY',
  //       data: {
  //         columnVisibility: columnVisibility
  //       }
  //     });
  //   }
  // }, [columnVisibility]);
  
  // const [sorting, setSorting] = useState(resourceState.sort);
  // useEffect(() => {
  //   if(JSON.stringify(sorting) != JSON.stringify(resourceState.sort)) {
  //     dispatch({
  //       type: 'UPDATE_COLUMN_SORT',
  //       data: {
  //         sort: sorting
  //       }
  //     });
  //   }
  // }, [sorting]);


  // const [columnFilters, setColumnFilters] = useState(resourceState.filters);
  // useEffect(() => {
  //   if(JSON.stringify(columnFilters) != JSON.stringify(resourceState.filters)) {
  //     dispatch({
  //       type: 'UPDATE_FILTERS',
  //       data: {
  //         columnFilters: columnFilters
  //       }
  //     });
  //   }
  // }, [columnFilters]);

  // const [density, setDensity] = useState(resourceState.density)
  // const densityClassName = density ? `${density} -striped -highlight` : '-striped -highlight';

  // const columnHelper = createColumnHelper();
  // const table_columns = columns.map((col) => {
  //   if (col.cell) {
  //     return (
  //       columnHelper.accessor(col.accessor, {
  //         header: col.header,
  //         cell: col.cell,
  //         minSize: 215
  //       })
  //     )
  //   }
  //   return (
  //     columnHelper.accessor(col.accessor, {
  //       header: col.header,
  //       minSize: 215
  //     })
  //   )
  // });
  // // reorder based on state
  // if (resourceState.columnOrder.length)
  //   table_columns.sort((a,b) => {
  //     return resourceState.columnOrder.indexOf(a.header) - resourceState.columnOrder.indexOf(b.header)
  //   });

  // const reactTable = useReactTable(
  //   {
  //     data: data.results,
  //     columns: table_columns,
  //     columnResizeMode: 'onChange',
  //     manualSorting: true,
  //     onSortingChange: setSorting,
  //     onColumnOrderChange: setColumnOrder,
  //     onColumnFiltersChange: setColumnFilters,
  //     onColumnVisibilityChange: setColumnVisibility,
  //     initialState: {
  //       columnOrder: columnOrder,
  //       pagination: {
  //         pageSize: resourceState.pageSize,
  //         pageCount: Number(Math.ceil(data.count / resourceState.pageSize)),
  //       },
  //     },
  //     state: {
  //       columnOrder: columnOrder,
  //       columnVisibility: columnVisibility,
  //       columnFilters: columnFilters,
  //       sorting: sorting
  //     },
  //     getCoreRowModel: getCoreRowModel(),
  //     getSortedRowModel: getSortedRowModel(),
  //     getFilteredRowModel: getFilteredRowModel(),
  //     debugTable: false,
  //     autoResetPageIndex: false,
  //   }
  // );
  // const headerGroups = reactTable.getHeaderGroups();

  // const sortIcon = (isSorted) => {
  //   if(isSorted === 'asc') {
  //     return 'sort-up'
  //   }
  //   if(isSorted === 'desc') {
  //     return 'sort-down'
  //   }
  //   return 'sort'
  // }

  // const pageCount = Number(Math.ceil(data.count / resourceState.pageSize));
  const metadataContext = useContext(MetadataContext);
  // console.log(metadataContext)
  return (
    <div></div>
    // <DatastoreContext.Provider value={{
    //   distributions: metadataContext.metadata?.distribution
    // }}>
    //   {metadataContext.metadata?.distribution?.map((dist) => {
    //     console.log(dist)
    //     return <ResourceTable />
    //   })}
    // </DatastoreContext.Provider>
      
  );
};

export default DataTable;

const ResourceTable = () => {
  const datastoreContext = useContext(DatastoreContext);
  console.log(datastoreContext)
  console.log('ijfgigj')
  return (
    <p>resource</p>
  );
}



{/* <DataTableHeader reactTable={reactTable} total={data.count} setDensity={setDensity} />
      <div className="dc-overflow">
        <table
          className={`dc-datatable -striped -highlight ${densityClassName}`}
          {...{
            style: {
              width: reactTable.getCenterTotalSize(),
            },
          }}
        >
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
                    {header.column.getCanFilter() ? (
                      <div className="dc-filter">
                        <ColumnFilter column={header.column} count={data.results.length} />
                      </div>
                    ) : null}
                    <button
                      {...{
                        onMouseDown: header.getResizeHandler(),
                        onTouchStart: header.getResizeHandler(),
                        className: `dc-c-resize-handle ${
                          header.column.getIsResizing() || header.column.id == columnResizing ? 'isResizing' : ''
                        }`,
                      }}
                      aria-label={`Resize ${header.column.columnDef.header} column`}
                      onKeyDown={(e) => {
                        const columnSizingObject = reactTable.getState().columnSizing;
                        switch (e.key) {
                          case 'Enter':
                          case ' ':
                            e.preventDefault();
                            e.stopPropagation();
                            if (columnResizing) {
                              // end resizing
                              setColumnResizing('')
                              setAriaLiveFeedback(`${header.column.columnDef.header} dropped.`)
                            } else {
                              // start resizing
                              setColumnResizing(header.column.id)
                              setAriaLiveFeedback(`${header.column.columnDef.header} grabbed.`)
                            }
                            break;

                          case 'Escape':
                            if (columnResizing) {
                              setColumnResizing('')
                              setAriaLiveFeedback(`${header.column.columnDef.header} dropped.`)
                            }
                            break;
                          case 'ArrowRight':
                            e.preventDefault();
                            e.stopPropagation();
                            if (columnResizing) {
                              columnSizingObject[header.column.id] = header.getSize() + 10;
                              reactTable.setColumnSizing(columnSizingObject);
                              setAriaLiveFeedback(`${header.column.columnDef.header} has been resized. The new width is ${header.getSize()} pixels.`);
                            }
                            break;
                          case 'ArrowLeft':
                            e.preventDefault();
                            e.stopPropagation();
                            if (columnResizing) {
                              columnSizingObject[header.column.id] = header.getSize() - 10;
                              reactTable.setColumnSizing(columnSizingObject);
                              setAriaLiveFeedback(`${header.column.columnDef.header} has been resized. The new width is ${header.getSize()} pixels.`)
                            }
                            break;
                        }
                      }}
                      onBlur={() => {
                        setColumnResizing('')
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
                <tr key={row.id} className={`${even ? "dc-c-datatable--even-row" : ""}`}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <td
                        {...{
                          key: cell.id,
                          style: {
                            maxWidth: cell.column.getSize(),
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
        </div>
        <div className='sr-only' aria-live='assertive' aria-atomic='true'>{ariaLiveFeedback}</div>
        <div className="pagination-bottom">
          <div className="-pagination">
            <div className="-previous">
              <button
                type="button"
                onClick={() => dispatch({
                  type: 'UPDATE_PAGE',
                  data: {
                    page: Number(resourceState.currentPage) - 1
                  }
                })}
                disabled={resourceState.currentPage === 0}
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
                  {resourceState.currentPage + 1}
                  {' '}
                  of
                  {' '}
                  {pageCount}
                </strong>
              </span>
            </div>
            <div className="-next">
              <button
                type="button"
                onClick={() => dispatch({
                  type: 'UPDATE_PAGE',
                  data: {
                    page: Number(resourceState.currentPage) + 1
                  }
                })}
                disabled={resourceState.currentPage >= (pageCount-1) }
                className="-btn"
              >
                {'>'}
              </button>
            </div>
          </div>
        </div>
    </> */}