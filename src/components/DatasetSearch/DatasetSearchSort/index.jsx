import React from 'react';

const DatasetSearchSort = ({sortUpdate}) => {
  const options = [{ label: 'Recently Updated', value: 'modified' },{ label: 'Alphabetical', value: 'title' }];
  return (
    <form className="usa-form">
      <label className="usa-label" htmlFor="sort-option">Sort by</label>
      <select
        className="usa-select"
        name="sort-option"
        id="sort-option"
        onChange={(e) => sortUpdate(e.target.value)}
      >
        {options.map((option) => <option key={option.label} value={option.value}>{option.label}</option>)}
      </select>
    </form>
  );
}

export default DatasetSearchSort;
