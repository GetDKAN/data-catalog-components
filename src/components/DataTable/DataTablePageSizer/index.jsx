import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'reactstrap';

const DataTablePageSizer = ({
  label,
  pageSizeChange,
  currentOption,
  options,
  className,
  selectClassName,
  id,
}) => (
  <div className={className}>
    <Label htmlFor={`dc-${id}-pagesize`}>{label}</Label>
    <Input
      className={selectClassName}
      onChange={pageSizeChange}
      type="select"
      name={`dc-${id}-pagesize`}
      id={`dc-${id}-pagesize`}
    >
      {options.map((opt) => (
        <option value={opt.value} key={opt.value}>{opt.label}</option>
      ))}
    </Input>
  </div>
);

DataTablePageSizer.defaultProps = {
  label: 'Rows per page',
  className: 'dc-page-size-options',
  currentOption: '20',
  options: [
    { defaultChecked: true, label: '20', value: '20' },
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
  currentOption: PropTypes.string,
};

export default DataTablePageSizer;
