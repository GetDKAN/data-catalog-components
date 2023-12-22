  import React from "react";

  function ColumnFilter({
    column,
    reactTable,
    count
  }) {
    return (
      <input
        aria-label={column.columnDef.header}
        value={column.getFilterValue() || ''}
        onChange={(e) => {
          e.preventDefault();
          e.stopPropagation();
          column.setFilterValue(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    );
  };

  export default ColumnFilter;