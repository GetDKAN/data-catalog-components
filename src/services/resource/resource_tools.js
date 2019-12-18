import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import datastore from './datastore';

export const ResourceDispatch = createContext(null);

export const defaultResourceState = {
  loading: false,
  queryAll: false,
  rowsTotal: 0,
  columns: [],
  store: null,
  sort: [],
  density: 'density-3',
  currentPage: 0,
  pageSize: 20,
  values: [],
  count: 0,
  filters: [],
  excludedColumns: {},
  columnOrder: [],
};

export function resourceReducer(state, action) {
  switch (action.type) {
    case 'GET_STORE':
      return {
        ...state,
        loading: true,
      };
    case 'USE_STORE':
      return {
        ...state,
        loading: false,
        store: action.data.store,
        storeType: action.data.storeType,
        columns: action.data.columns,
        rowsTotal: action.data.rowsTotal,
        queryAll: true,
      };
    case 'QUERY_STORE':
      return {
        ...state,
        loading: false,
        values: action.data.values,
        count: action.data.count,
        queryAll: false,
      };
    case 'UPDATE_PAGE':
      return {
        ...state,
        currentPage: action.data.page,
      };
    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: action.data.filters,
        currentPage: 0,
      };
    case 'UPDATE_PAGE_SIZE':
      return {
        ...state,
        pageSize: Number(action.data.pageSize),
        currentPage: 0,
      };
    case 'UPDATE_COLUMN_SORT':
      return {
        ...state,
        sort: action.data.sort,
      };
    case 'REORDER_COLUMNS':
    case 'EXCLUDE_COLUMNS':
    case 'UPDATE_DENSITY':
      return {
        ...state,
        density: action.data.density,
      };
    default:
      return 'Not a valid action type.';
  }
}

export function prepareColumns(columns) {
  return columns.map((column) => ({
    Header: column,
    accessor: column,
  }));
}

export async function queryResourceData(resourceData, includeCount = false) {
  const {
    filters, pageSize, currentPage, sort, store,
  } = resourceData;
  const items = await store.query(filters, null, null, pageSize, currentPage, sort, includeCount)
    .then((data) => data);
  return {
    type: 'QUERY_STORE',
    data: {
      values: items.data,
      count: items.count,
    },
  };
}

export async function queryAllResourceData(store) {
  const items = await store.query(null, null, null, 0, null, null)
    .then((data) => data);
  return {
    type: 'QUERY_STORE',
    data: {
      values: items.data,
      count: items.count,
    },
  };
}


export async function getFileDatastore(downloadURL) {
  // eslint-disable-next-line
  const store = await new datastore['file'](downloadURL);
  const initCount = await store.query(null, null, null, 0, null, null, true)
    .then((data) => data);
  const columns = prepareColumns(await store.getColumns());
  return {
    type: 'USE_STORE',
    data: {
      store,
      rowsTotal: initCount,
      columns,
      storeType: 'FILE',
    },
  };
}

// eslint-disable-next-line
export async function getDKANDatastore(rootURL, resource, resourceData) {
  const { identifier } = resource;
  const checkForDatastore = await axios.get(`${rootURL}datastore/imports/${identifier}`)
    .then((res) => res.data)
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.warn(e.message);
    });
  if (checkForDatastore) {
    const { columns, numOfRows } = checkForDatastore;
    // eslint-disable-next-line
    const store = await new datastore['dkan'](identifier, columns, rootURL);
    return {
      type: 'USE_STORE',
      data: {
        store,
        rowsTotal: numOfRows,
        columns: prepareColumns(columns),
        storeType: 'DKAN',
        queryAll: true,
      },
    };
  }
}

export function useAdvancedOptions(columns, updatedColumns = [], excludedColumns = {}) {
  const [advancedColumns, setAdvancedColumns] = useState([]);
  useEffect(() => {
    const excludedArray = [];
    let newItems = columns;
    if (updatedColumns.length) {
      newItems = updatedColumns;
    }
    Object.keys(excludedColumns)
      .forEach((key) => {
        if (!excludedColumns[key]) {
          excludedArray.push(key);
        }
      });
    const columnOrder = newItems.reduce((newColumns, item) => {
      if (!excludedArray.includes(item.accessor)) {
        newColumns.push(item);
      }
      return newColumns;
    }, []);
    setAdvancedColumns(columnOrder);
  }, [columns, updatedColumns, excludedColumns]);
  return [advancedColumns];
}
