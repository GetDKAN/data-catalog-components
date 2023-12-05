  import React from "react";

  function ColumnFilter({
    column: { getFilterValue, setFilterValue, Header },
    resourceState
  }) {

    return (
      <input
        aria-label={Header}
        value={getFilterValue() || ''}
        onChange={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setFilterValue(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${resourceState.rowsTotal} records...`}
      />
    );
  };

  export default ColumnFilter;