export default function resourceReducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PAGE':
      return {
        ...state,
        currentPage: action.data.page,
        updateQuery: true,
      };
    case 'UPDATE_FILTERS':
      return {
        ...state,
        filters: action.data.columnFilters,
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
    default:
      return 'Not a valid action type.';
  }
}