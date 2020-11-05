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
export async function getDKANDatastore(rootURL, resource, initLimit = 20, showDBCols = false) {
  const { identifier } = resource;
  const checkForDatastore = await axios.get(`${rootURL}datastore/sql/?query=[SELECT COUNT(*) FROM ${identifier}]${showDBCols ? '&show-db-columns' : ''}`)
    .then((res) => res.data)
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.warn(e.message);
    });
  if (checkForDatastore) {
    // eslint-disable-next-line
    const sqlColumns = await axios.get(`${rootURL}datastore/sql/?query=[SELECT * FROM ${identifier}][LIMIT ${initLimit} OFFSET 0]${showDBCols ? '&show-db-columns' : ''}`);
    const store = await new datastore.dkan(identifier, Object.keys(sqlColumns.data[0]), rootURL);
    return {
      type: 'USE_STORE',
      data: {
        store,
        rowsTotal: Number(checkForDatastore[0].expression),
        columns: prepareColumns(Object.keys(sqlColumns.data[0])),
        storeType: 'DKAN',
        queryAll: true,
        values: sqlColumns.data,
        count: Number(checkForDatastore[0].expression),
      },
    };
  }
  return {
    type: 'NO_DATASTORE',
  };
}

// Get new rows of data from the datastore.
export async function queryResourceData(resourceData, showDBCols = false, includeCount = false) {
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
    showDBCols,
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
    showDBCols,
  ).then((data) => data);

  let mycount = 0

  if('data' in count && Array.isArray(count.data) && count.data.length > 0 &&
  'expression' in count.data[0]) {
    mycount = Number(count.data[0].expression)
  }

  return {
    type: 'QUERY_STORE',
    data: {
      values: items.data,
      count: mycount,
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
