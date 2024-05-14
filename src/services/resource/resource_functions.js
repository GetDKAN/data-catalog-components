// Build columns in correct structure for Datatable component.
export function prepareColumns(columns) {
  return columns.map((column) => ({
    header: column,
    id: column,
    accessor: column,
  }));
};

// Built query params for filters
export function prepareFilterParams(filters) {
  let params = "";
  filters.forEach((filter, index) => {
    let param = `&conditions[${index}][property]=${filter.id}&conditions[${index}][value]=${filter.value}&conditions[${index}][operator]=contains`
    params += param;
  });
  return params;
};