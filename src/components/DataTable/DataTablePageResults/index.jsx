import React, { useContext } from 'react';
import { ResourceDispatch } from '../../../services/resource/resource_defaults';
import PropTypes from 'prop-types';

const DataTablePageResults = ({
  total,
  className,
  viewing = false
}) => {
  const { resourceState } = useContext(ResourceDispatch);
  const pageSize = resourceState.pageSize;
  const currentPage = resourceState.currentPage

  // Add one to offset the 0 array index.
  const page = currentPage + 1;
  let displayTotal = total;
  const currentLowestResult = total <= 0 ? 0 : 1 + ((pageSize * page) - pageSize);
  let currentHighestResult = (pageSize * page);
  if (total < 0) {
    displayTotal = 0;
  }
  if (currentHighestResult > total) {
    currentHighestResult = displayTotal;
  }
  return (
    <div className={className}>
      <p>
        {viewing && (
          'Viewing '
        )}
        <span className="low-result">{currentLowestResult}</span>
        {' '}
        -
        {' '}
        <span className="high-result">{currentHighestResult}</span>
        {' '}
        of
        {' '}
        <span className="total">{displayTotal}</span>
        {' '}
        rows
      </p>
    </div>
  );
};

DataTablePageResults.defaultProps = {
  className: 'data-table-results',
};

DataTablePageResults.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number.isRequired,
};

export default DataTablePageResults;
