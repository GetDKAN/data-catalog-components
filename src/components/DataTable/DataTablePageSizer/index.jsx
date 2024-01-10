import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { ResourceDispatch } from '../../../services/resource/resource_defaults';

const DataTablePageSizer = ({
  label,
  options,
  className,
  selectClassName,
  id,
}) => {
  const {dispatch, resourceState} = useContext(ResourceDispatch);
  
  return (
    <div className={className}>
      <label htmlFor={`dc-${id}-pagesize`}>{label}</label>
      <select
        value={resourceState.pageSize}
        className={selectClassName}
        onChange={(e) => dispatch({
          type: 'UPDATE_PAGE_SIZE',
          data: {
            pageSize: e.target.value
          }
        })}
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
  options: PropTypes.arrayOf(PropTypes.shape({
    defaultChecked: PropTypes.bool,
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  id: PropTypes.string.isRequired,
};

export default DataTablePageSizer;
