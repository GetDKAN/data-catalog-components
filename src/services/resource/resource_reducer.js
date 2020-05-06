function resourceReducer(state, action) {
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
      return {
        ...state,
        columnOrder: action.data.columnOrder,
      };
    case 'TOGGLE_COLUMNS':
      return {
        ...state,
        excludedColumns: action.data.excludedColumns,
      };
    case 'UPDATE_DENSITY':
      return {
        ...state,
        density: action.data.density,
      };
    default:
      return 'Not a valid action type.';
  }
}

export default resourceReducer;
