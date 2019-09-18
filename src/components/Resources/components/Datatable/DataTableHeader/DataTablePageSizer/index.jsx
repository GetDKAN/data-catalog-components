import React from 'react';
import PropTypes from 'prop-types';

const DataTablePageSizer = ({label, pageSizeChange, currentOption, options, wrapperClass}) => {
  return(
    <div className={wrapperClass}>
      <label>
        {label}
        <select value={currentOption} onChange={pageSizeChange}>
          {options.map((option, index) => (<option key={index} value={option.value}>{option.label}</option>))}
        </select>
      </label>
    </div>
  );
}

DataTablePageSizer.defaultProps = {
  label: 'Rows per page',
  wrapperClass: 'page-size-options',
  options: [
    { defaultChecked: true, label: '20', value: '20' },
    { label: '50', value: '50' },
    { label: '100', value: '100'}
  ],
}

DataTablePageSizer.propTypes = {
  label: PropTypes.string,
  wrapperClass: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    defaultChecked: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string
  }))
}

export default DataTablePageSizer;
