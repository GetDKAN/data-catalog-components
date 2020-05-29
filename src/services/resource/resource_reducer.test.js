import resourceReducer from './resource_reducer';
import { defaultResourceState } from './resource_defaults';

describe('resource reducer', () => {
  it('should return the initial state', () => {
    const testState = defaultResourceState;
    expect(resourceReducer(testState, {})).toEqual(defaultResourceState);
  });
  it('GET_STORE should return updated loading', () => {
    const gsTestState = defaultResourceState;
    const GET_STORE = {
      ...defaultResourceState,
      loading: true,
    };
    expect(resourceReducer(gsTestState, {
      type: 'GET_STORE',
    }))
      .toStrictEqual(GET_STORE);
  });
  it('NO_DATASTORE should return null storetype', () => {
    const testState = defaultResourceState;
    const NO_DATASTORE = {
      ...defaultResourceState,
      storeType: null,
    };
    expect(resourceReducer(testState, {
      type: 'NO_DATASTORE',
    }))
      .toStrictEqual(NO_DATASTORE);
  });
  it('USE_STORE sets state based on store', () => {
    const testState = defaultResourceState;
    const USE_STORE = {
      ...defaultResourceState,
      loading: false,
      values: 'blah',
      store: true,
      storeType: 'dkan',
      columns: [1, 2, 3],
      rowsTotal: 100,
      queryAll: true,
      count: 500,
    };
    expect(resourceReducer(testState, {
      type: 'USE_STORE',
      data: {
        values: 'blah',
        store: true,
        storeType: 'dkan',
        columns: [1, 2, 3],
        rowsTotal: 100,
        count: 500,
      },
    }))
      .toStrictEqual(USE_STORE);
  });
  it('QUERY_STORE updates values from query results', () => {
    const testState = defaultResourceState;
    const QUERY_STORE = {
      ...defaultResourceState,
      values: [1, 2, 3],
      count: 50,
      loading: false,
      queryAll: false,
      updateQuery: false,
    };
    expect(resourceReducer(testState, {
      type: 'QUERY_STORE',
      data: {
        values: [1, 2, 3],
        count: 50,
      },
    }))
      .toStrictEqual(QUERY_STORE);
  });
  it('UPDATE_PAGE changes the current page', () => {
    const testState = defaultResourceState;
    const UPDATE_PAGE = {
      ...defaultResourceState,
      currentPage: 5,
      updateQuery: true,
    };
    expect(resourceReducer(testState, {
      type: 'UPDATE_PAGE',
      data: {
        page: 5,
      },
    }))
      .toStrictEqual(UPDATE_PAGE);
  });
  it('UPDATE_FILTERS sets column filters', () => {
    const testState = defaultResourceState;
    const UPDATE_FILTERS = {
      ...defaultResourceState,
      filters: [1, 5, 10],
      updateQuery: true,
      currentPage: 0,
    };
    expect(resourceReducer(testState, {
      type: 'UPDATE_FILTERS',
      data: {
        filters: [1, 5, 10],
      },
    }))
      .toStrictEqual(UPDATE_FILTERS);
  });
  it('UPDATE_PAGE_SIZE updates page size as a number and sets page to 0', () => {
    const testState = defaultResourceState;
    const UPDATE_PAGE_SIZE = {
      ...defaultResourceState,
      currentPage: 0,
      pageSize: 10,
      updateQuery: true,
    };
    expect(resourceReducer(testState, {
      type: 'UPDATE_PAGE_SIZE',
      data: {
        pageSize: 10,
      },
    }))
      .toStrictEqual(UPDATE_PAGE_SIZE);
    expect(resourceReducer(testState, {
      type: 'UPDATE_PAGE_SIZE',
      data: {
        pageSize: '10',
      },
    }))
      .toStrictEqual(UPDATE_PAGE_SIZE);
  });
  it('UPDATE_COLUMN_SORT updates a columns sort', () => {
    const testState = defaultResourceState;
    const UPDATE_COLUMN_SORT = {
      ...defaultResourceState,
      sort: [1, 2, 3],
      updateQuery: true,
    };
    expect(resourceReducer(testState, {
      type: 'UPDATE_COLUMN_SORT',
      data: {
        sort: [1, 2, 3],
      },
    }))
      .toStrictEqual(UPDATE_COLUMN_SORT);
  });
  it('REORDER_COLUMNS updates excluded columns', () => {
    const testState = defaultResourceState;
    const REORDER_COLUMNS = {
      ...defaultResourceState,
      columnOrder: [1, 2, 3],
      updateQuery: true,
    };
    expect(resourceReducer(testState, {
      type: 'REORDER_COLUMNS',
      data: {
        columnOrder: [1, 2, 3],
      },
    }))
      .toStrictEqual(REORDER_COLUMNS);
  });
  it('TOGGLE_COLUMNS updates excluded columns', () => {
    const testState = defaultResourceState;
    const TOGGLE_COLUMNS = {
      ...defaultResourceState,
      excludedColumns: { foo: 'bar' },
      updateQuery: true,
    };
    expect(resourceReducer(testState, {
      type: 'TOGGLE_COLUMNS',
      data: {
        excludedColumns: { foo: 'bar' },
      },
    }))
      .toStrictEqual(TOGGLE_COLUMNS);
  });
  it('UPDATE_DENSITY sets a new density', () => {
    const testState = defaultResourceState;
    const UPDATE_DENSITY = {
      ...defaultResourceState,
      density: 'dkan',
      updateQuery: true,
    };
    expect(resourceReducer(testState, {
      type: 'UPDATE_DENSITY',
      data: {
        density: 'dkan',
      },
    }))
      .toStrictEqual(UPDATE_DENSITY);
  });
});
