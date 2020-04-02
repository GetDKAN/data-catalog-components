import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import {
  useTable,
  usePagination,
  useFilters,
  useSortBy,
  useBlockLayout,
  useResizeColumns,
  useColumnOrder,
} from 'react-table'
import {
  ResourceDispatch,
  defaultResourceState,
  resourceReducer,
  queryResourceData,
  queryAllResourceData,
  getDKANDatastore,
} from '../../services/resource/resource_tools';

const Resource = ({
  apiURL,
  children,
  resource,
}) => {
  // const [cards, setCards] = React.useState(null);
  const [resourceState, dispatch] = useReducer(
    resourceReducer,
    defaultResourceState,
  );
  useEffect(() => {
    async function getStore() {
      if (resourceState.store === null) {
        dispatch(await getDKANDatastore(apiURL, resource));
      }
    }
    async function queryStore() {
      if (resourceState.queryAll) {
        dispatch(await queryAllResourceData(resourceState.store));
      } else {
        dispatch(await queryResourceData(resourceState));
      }
    }
    dispatch({ type: 'GET_STORE' });
    if (resourceState.store !== null) {
      queryStore();
    } else {
      getStore();
    }
  }, [
    resourceState.store,
    resourceState.storeType,
    resourceState.currentPage,
    resourceState.filters,
    resourceState.pageSize,
    resourceState.sort,
  ]);

  const { columns } = resourceState;
  const data = resourceState.values;
  // Define a default UI for filtering
  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
  }) {
    const count = preFilteredRows.length

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
      width: 150,
      maxWidth: 400,
    }),
    [],
  );
  const reactTable = useTable(
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
    <ResourceDispatch.Provider value={{ resourceState, dispatch, reactTable }}>
      {children}
    </ResourceDispatch.Provider>
  );
};

Resource.propTypes = {
  apiURL: PropTypes.string.isRequired,
};

export default Resource;
