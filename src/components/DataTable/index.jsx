import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useTable, usePagination, useResizeColumns, useSortBy, useFilters, useFlexLayout, useBlockLayout } from 'react-table';

const DataTable = ({
  data,
  filterTitle,
  columns,
  totalRows,
  limit,
  loading,
  options,
  columnDefaults,
  setSort,
  setConditions,
  conditionsTransform,
  sortTransform,
  className,
  tableClasses,
  customColumnFilter,
  cellTextClassName
}) => {
  const { layout, columnFilter, columnSort, columnResize } = options;
  const { minWidth, maxWidth, width } = columnDefaults
  const {
    tableContainerClassName,
    headerCellClassName,
    headerGroupClassName,
    defaultColumnFilterClassName,
    cellClassName,
    cellFirstRowClassName,
    cellEvenRowClassName,
    cellOddRowClassName,
    tableColumnResizer,
    tableColumnIsResizing,
    headerCellTextClassName,
    filterTitleClassName,
    headerFilterClassName,
    headerFilterCellClassName,
    columnIsSortedClassName,
    columnIsSortedAscClassName,
    columnIsSortedDecClassName
  } = tableClasses;
  if(columns.length === 0) {
    return <p>Loading</p>;
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

  function DefaultColumnFilter({
    column: { Header, accessor, setFilter, filterValue },
  }) {
    return (
      <div>
        <label
          className={defaultColumnFilterClassName}
          htmlFor={`filter_${accessor}`}
        >
            {`Filter ${Header}`}
        </label>
        <input
          className="usa-input margin-bottom-1"
          onChange={(e) => { setFilter(e.target.value) || undefined }}
          id={`filter_${accessor}`}
          name={`filter_${accessor}`}
          type="text"
          value={filterValue || ''}
        />
      </div>
    );
  }

   

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: customColumnFilter ? customColumnFilter :DefaultColumnFilter,
      // When using the useFlexLayout:
      minWidth: minWidth, // minWidth is only used as a limit for resizing
      width: width, // width is used for both the flex-basis and flex-grow
      maxWidth: maxWidth, // maxWidth is only used as a limit for resizing
    }),
    [],
  );

  const {
    getTableProps,
    prepareRow,
    rows,
    headerGroups,
    state: { filters, sortBy },
  } = useTable(
    {
      columns,
      data,
      filterTypes,
      initialState: {  },
      manualPagination: true,
      manualFilters: true,
      manualSortBy: true,
      pageCount: Math.ceil(totalRows / limit),
      filterTypes,
      defaultColumn,
    },
    useResizeColumns,
    useFilters,
    useSortBy,
    usePagination,
    (layout === 'block') ? useBlockLayout : useFlexLayout,
  );

  useEffect(() => {
    if(columnSort) {
      const normalizedSort = sortTransform ? sortTransform(sortBy) : filters;
      setSort(normalizedSort);
    }
  }, [sortBy])

  useEffect(() => {
    let timerFunc = setTimeout(() => {
      if(columnFilter) {
        const normalizedFilters = conditionsTransform ? conditionsTransform(filters) : filters;
        setConditions(normalizedFilters)
      }
    }, 1000);
    return () => clearTimeout(timerFunc);
  }, [filters])

  return(
    <div {...getTableProps()}
      className={className}
    >
      <div className={tableContainerClassName}>
        {headerGroups.map(headerGroup => (
          <div
            {...headerGroup.getHeaderGroupProps()}
            className={headerGroupClassName}
          >
            {headerGroup.headers.map(column => (
              <div
                {...column.getHeaderProps()}
              > 
                <div
                  className={headerCellClassName}
                  {...column.getHeaderProps(columnSort ? column.getSortByToggleProps() : undefined)}
                >
                  <span className={headerCellTextClassName}>
                    {column.render('Header')}
                  </span>
                  {columnSort
                      && (
                        <span
                          className={
                            column.isSorted
                            ? column.isSortedDesc
                              ? columnIsSortedDecClassName
                              : columnIsSortedAscClassName
                            : columnIsSortedClassName
                          }
                        />
                      )
                    }
                </div>
                {columnResize
                  &&(
                    <div
                      {...column.getResizerProps()}
                      className={`${tableColumnResizer} ${
                        column.isResizing ? tableColumnIsResizing : ''
                      }`}
                    />
                  )
                }
              </div>
            ))}
            
          </div>
        ))}
        {columnFilter
          &&(
            <div className={headerFilterClassName}>
               {filterTitle
                &&(
                  <span className={filterTitleClassName}>
                    {filterTitle}
                  </span>
                )
              }
              {headerGroups.map((headerGroup) => (
                <div
                  {...headerGroup.getHeaderGroupProps()}
                >
                 
                  {headerGroup.headers.map(column => (
                    <div
                      {...column.getHeaderProps()}
                      className={headerFilterCellClassName}
                    > 
                      <div className="th">
                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                      </div>
                      
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
      </div>
      <div className="tbody">
        {rows.map((row, index) => {
          const even = (index + 1) % 2 === 0;
          prepareRow(row)
          let classList = cellClassName
          if (index === 0 && cellFirstRowClassName) {
            classList = cellFirstRowClassName
          }
          if (even) {
            classList += ` ${cellEvenRowClassName}`
          }
          if (!even) {
            classList += ` ${cellOddRowClassName}`
          }
          return (
            <div {...row.getRowProps()} className="tr">
              {row.cells.map((cell) => {
                return (
                  <div {...cell.getCellProps()} className={classList}>
                    <span className={cellTextClassName}>
                      {cell.render('Cell')}
                    </span>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
};

DataTable.defaultProps = {
  filterTitle: '',
  className: '',
  tableClasses: {
    tableContainerClassName: '',
    tableColumnResizer: 'width-1 bg-primary margin-right-neg-05 position-absolute top-0 bottom-0 right-0 z-100',
    tableColumnIsResizing: '',
    headerCellClassName: 'bg-base-lighter border-top-1px text-right text-bold padding-x-1 overflow-hidden',
    headerGroupClassName: '',
    headerCellTextClassName: 'overflow-hidden text-no-wrap display-inline-block',
    defaultColumnFilterClassName: 'usa-label usa-sr-only',
    cellTextClassName: 'overflow-hidden text-no-wrap display-inline-block',
    cellFirstRowClassName: '',
    cellClassName: 'border-right-1px font-mono-sm text-tabular text-right padding-x-105 padding-y-05',
    cellEvenRowClassName: 'bg-base-lightest',
    cellOddRowClassName: '',
    filterTitleClassName: '',
    headerFilterCellClassName: 'bg-base-lighter border-bottom-1px border-right-1px padding-x-1',
    headerFilterClassName: '',
    columnIsSortedClassName: '',
    columnIsSortedAscClassName: '',
    columnIsSortedDecClassName: '',
  },
  options: {
    layout: 'flex',
    columnFilter: true,
    columnSort: true,
    columnResize: true,
  },
  columnDefaults: {
    minWidth: 30,
    maxWidth: 300,
    width: 150,
  },
  customColumnFilter: undefined,
}

DataTable.propTypes = {
  options: PropTypes.shape({
    layout: PropTypes.oneOf(['flex', 'block']),
    columnFilter: PropTypes.bool,
    columnSort: PropTypes.bool,
    columnResize: PropTypes.bool,
  }),
}

export default DataTable;
