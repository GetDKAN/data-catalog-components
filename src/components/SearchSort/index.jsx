import React from "react";
import PropTypes from "prop-types";

const SearchSort = ({
  className,
  currentValue,
  inputClasses,
  label,
  options,
  sortFunc
}) => (
  <div className={className}>
    <label htmlFor="search-sort">{label}</label>
    <select
      id="search-sort"
      className={inputClasses}
      value={currentValue}
      onChange={sortFunc}
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

SearchSort.defaultProps = {
  className: "search-sort",
  inputClasses: "search-sort-input",
  label: "Sort by",
  options: [
    { value: "relevance", label: "Relevance" },
    { value: "date", label: "Date" },
    { value: "alpha", label: "Alphabetical" }
  ]
};

SearchSort.propTypes = {
  className: PropTypes.string,
  currentValue: PropTypes.string.isRequired,
  inputClasses: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string
    })
  ),
  sortFunc: PropTypes.func.isRequired
};

export default SearchSort;
