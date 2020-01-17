import React from "react";
import PropTypes from "prop-types";

const SearchPageSizer = ({
  className,
  currentValue,
  inputClasses,
  label,
  options,
  resizeFunc,
  showLabel
}) => (
  <div className={className}>
    {showLabel && <label htmlFor="search-page-sizer">{label}</label>}
    <select
      id="search-page-sizer"
      className={inputClasses}
      value={currentValue}
      onChange={resizeFunc}
    >
      {options.map(opt => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

SearchPageSizer.defaultProps = {
  className: "search-page-sizer",
  inputClasses: "search-page-sizer-input",
  label: "Page Size",
  options: [5, 10, 25, 50],
  showLabel: true
};

SearchPageSizer.propTypes = {
  className: PropTypes.string,
  currentValue: PropTypes.number.isRequired,
  inputClasses: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.number),
  resizeFunc: PropTypes.func.isRequired,
  showLabel: PropTypes.bool
};

export default SearchPageSizer;
