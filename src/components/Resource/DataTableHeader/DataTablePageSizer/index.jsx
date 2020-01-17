import React from "react";
import PropTypes from "prop-types";

const DataTablePageSizer = ({
  label,
  pageSizeChange,
  currentOption,
  options,
  className,
  selectClassName,
  id
}) => (
  <div className={className}>
    <label htmlFor={`table-${id}`} className="page-size-label">
      <span className="page-size-label-text">{label}</span>{" "}
      <select
        id={`table-${id}`}
        className={selectClassName}
        value={currentOption}
        onChange={pageSizeChange}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  </div>
);

DataTablePageSizer.defaultProps = {
  label: "Rows per page",
  className: "page-size-options",
  currentOption: "20",
  options: [
    { defaultChecked: true, label: "20", value: "20" },
    { label: "50", value: "50" },
    { label: "100", value: "100" }
  ],
  selectClassName: "page-size-select"
};

DataTablePageSizer.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  selectClassName: PropTypes.string,
  pageSizeChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      defaultChecked: PropTypes.bool,
      label: PropTypes.string,
      value: PropTypes.string
    })
  ),
  id: PropTypes.string.isRequired,
  currentOption: PropTypes.string
};

export default DataTablePageSizer;
