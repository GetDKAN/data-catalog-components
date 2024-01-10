  import React, {useState, useEffect} from "react";

  function ColumnFilter({
    column,
    count
  }) {
    const [inputValue, setInputValue] = useState(column.getFilterValue() || '')

    useEffect(() => {
      const delayedInputTimeout = setTimeout(() => {
        column.setFilterValue(inputValue || '');
      }, 500)
      return () => clearTimeout(delayedInputTimeout);
    }, [inputValue, 500]);

    return (
      <input
        aria-label={column.columnDef.header}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value || '')
        }}
        placeholder={`Search ${count} records...`}
      />
    );
  };

  export default ColumnFilter;