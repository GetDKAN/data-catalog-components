import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  useTable,
  usePagination,
  useFilters,
  useSortBy,
  useFlexLayout,
  useResizeColumns,
  useColumnOrder,
} from 'react-table';

import {
  ResourceDispatch,
  defaultResourceState,
} from '../../services/resource/resource_defaults';

import resourceReducer from '../../services/resource/resource_reducer';

import {
  queryResourceData,
  getDKANDatastore,
} from '../../services/resource/resource_functions';

const Resource = ({
  apiURL,
  children,
  resource,
  showDBColumnNames,
}) => {


  const [resourceState, dispatch] = useReducer(
    resourceReducer,
    defaultResourceState,
  );

  useEffect(() => {
    dispatch({ type: 'GET_STORE' });
    async function getStore() {
      if (resourceState.store === null) {
        dispatch(await getDKANDatastore(apiURL, resource, resourceState.pageSize, showDBColumnNames));
      }
    }
    getStore();
  }, []);


  useEffect(() => {
    dispatch({ type: 'GET_STORE' });

    // async function getStore() {
    //   if (resourceState.store === null) {
    //     dispatch(await getDKANDatastore(apiURL, resource, resourceState.pageSize, true));
    //   }
    // }
    async function queryStore() {
      dispatch(await queryResourceData(resourceState, showDBColumnNames));
    }
    if (resourceState.updateQuery) {
      queryStore();
    }
   
    // if (resourceState.store !== null) {
      
    // } else {
      // getStore();
    // }
  }, [
    resourceState.updateQuery,
    resourceState.currentPage,
    resourceState.filters,
    resourceState.pageSize,
    resourceState.sort,
  ]);

  const { columns, currentPage } = resourceState;
  const data = resourceState.values;


  // Define a default UI for filtering
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


  const reactTable = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: currentPage },
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
    <ResourceDispatch.Provider value={{ resourceState, dispatch, reactTable }}>
      { children }
    </ResourceDispatch.Provider>
  );
};

Resource.defaultProps = {
  showDBColumnNames: false,
};

Resource.propTypes = {
  apiURL: PropTypes.string.isRequired,
  showDBColumnNames: PropTypes.bool,
};

export default Resource;
