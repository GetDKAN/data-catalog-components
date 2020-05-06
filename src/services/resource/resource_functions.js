import axios from 'axios';
import datastore from './datastore';

// Build columns in correct structure for Datatable component.
export function prepareColumns(columns) {
  return columns.map((column) => ({
    Header: column,
    accessor: column,
  }));
}

// Filter and reorder columns based on the toggled and reordered state.
// Use this to keep base columns in order so changes can be reset without
// extra queries to rebuild the data.
export function advancedColumns(columns = [], updatedColumns = [], excludedColumns = {}) {
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
  const columnOrder = newItems.reduce((reordered, item) => {
    if (!excludedArray.includes(item.accessor)) {
      reordered.push(item);
    }
    return reordered;
  }, []);
  return columnOrder;
}

// Create a new datastore using the DKAN datastore.
export async function getDKANDatastore(rootURL, resource) {
  const identifier = resource.identifier;
  const checkForDatastore = await axios.get(`${rootURL}datastore/imports/${identifier}`)
    .then((res) => res.data)
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.warn(e.message);
    });
  if (checkForDatastore) {
    // eslint-disable-next-line
    const store = await new datastore['dkan'](identifier, checkForDatastore.columns, rootURL);
    return {
      type: 'USE_STORE',
      data: {
        store,
        rowsTotal: checkForDatastore.numOfRows,
        columns: prepareColumns(checkForDatastore.columns),
        storeType: 'DKAN',
        queryAll: true,
      },
    };
  }
  return {
    type: 'NO_DATASTORE',
  };
}

// Get new rows of data from the datastore.
export async function queryResourceData(resourceData, includeCount = false) {
  // const {
  //   filters, pageSize, currentPage, sort, store,
  // } = resourceData;
  const items = await resourceData.store.query(
    resourceData.filters,
    null,
    null,
    resourceData.pageSize,
    resourceData.currentPage,
    resourceData.sort,
    includeCount,
  )
    .then((data) => data);
  // Make a second call to get the correct count.
  const count = await resourceData.store.query(
    resourceData.filters,
    null,
    null,
    resourceData.pageSize,
    resourceData.currentPage,
    resourceData.sort,
    true,
  )
    .then((data) => data);
  return {
    type: 'QUERY_STORE',
    data: {
      values: items.data,
      count: Number(count.data[0].expression),
    },
  };
}

// Return all rows from the datastore.
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
