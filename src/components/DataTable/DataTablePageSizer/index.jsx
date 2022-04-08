import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component allows the user to select how many rows of data to display at a time. The max value is 100 to keep large data files from crashing the website.
 */
const DataTablePageSizer = ({
  label,
  pageSizeChange,
  initSize,
  options,
  className,
  selectClassName,
  id,
}) => {
  const [selValue, setSelValue] = React.useState(initSize);
  React.useEffect(() => {
    pageSizeChange(Number(selValue));
  }, [selValue]);
  return (
    <div className={className}>
      <label htmlFor={`dc-${id}-pagesize`}>{label}</label>
      <select
        value={selValue}
        className={selectClassName}
        onChange={(e) => setSelValue(e.target.value)}
        type="select"
        name={`dc-${id}-pagesize`}
        id={`dc-${id}-pagesize`}
      >
        {options.map((opt) => (
          <option value={opt.value} key={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};

DataTablePageSizer.defaultProps = {
  label: 'Rows per page',
  className: 'dc-page-size-options',
  initSize: 20,
  options: [
    { label: '20', value: '20' },
    { label: '50', value: '50' },
    { label: '100', value: '100' },
  ],
  selectClassName: 'page-size-select',
};

DataTablePageSizer.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  selectClassName: PropTypes.string,
  pageSizeChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    defaultChecked: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  id: PropTypes.string.isRequired,
  initSize: PropTypes.number,
};

export default DataTablePageSizer;
