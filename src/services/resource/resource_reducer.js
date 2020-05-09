export default function resourceReducer(state, action) {
  switch (action.type) {
    case 'GET_STORE':
      return {
        ...state,
        loading: true,
      };
    case 'NO_DATASTORE':
      return {
        ...state,
        storeType: null,
      };
    case 'USE_STORE':
      return {
        ...state,
        loading: false,
        values: action.data.values,
        store: action.data.store,
        storeType: action.data.storeType,
        columns: action.data.columns,
        rowsTotal: action.data.rowsTotal,
        queryAll: true,
        count: action.data.count,
      };
    case 'QUERY_STORE':
      return {
        ...state,
        loading: false,
        values: action.data.values,
        count: action.data.count,
        queryAll: false,
        updateQuery: false,
      };
    case 'UPDATE_PAGE':
      return {
        ...state,
        currentPage: action.data.page,
        updateQuery: true,
      };
    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: action.data.filters,
        currentPage: 0,
        updateQuery: true,
      };
    case 'UPDATE_PAGE_SIZE':
      return {
        ...state,
        pageSize: Number(action.data.pageSize),
        currentPage: 0,
        updateQuery: true,
      };
    case 'UPDATE_COLUMN_SORT':
      return {
        ...state,
        sort: action.data.sort,
        updateQuery: true,
      };
    case 'REORDER_COLUMNS':
      return {
        ...state,
        columnOrder: action.data.columnOrder,
        updateQuery: true,
      };
    case 'TOGGLE_COLUMNS':
      return {
        ...state,
        excludedColumns: action.data.excludedColumns,
        updateQuery: true,
      };
    case 'UPDATE_DENSITY':
      return {
        ...state,
        density: action.data.density,
        updateQuery: true,
      };
    default:
      return 'Not a valid action type.';
  }
}
