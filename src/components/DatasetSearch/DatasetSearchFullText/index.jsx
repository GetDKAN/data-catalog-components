import React, { useState, useEffect } from 'react';

const DatasetSearchFulltext = ({fulltextValue, updateText}) => {
  const [filterText, setFilterText] = useState('');
  useEffect(() => {
    if(fulltextValue !== filterText) {
      updateText(filterText);
    }
  }, [filterText])

  return (
    <form className="usa-form">
      <label
        className="usa-label"
        htmlFor="input-type-text"
      >
        Type your search term here
      </label>
      <input
        value={filterText}
        className="usa-input"
        id="input-type-text"
        name="input-type-text"
        type="text"
        onChange={(e) => setFilterText(e.target.value)}
      />
    </form>
  );
}

export default DatasetSearchFulltext;
