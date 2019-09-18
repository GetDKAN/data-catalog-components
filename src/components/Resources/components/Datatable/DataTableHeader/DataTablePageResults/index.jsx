import React from 'react';
import PropTypes from 'prop-types';

const DataTablePageResults = ({total, pageSize, currentPage, wrapperClass, message}) => {
  // Add one to offset the 0 array index.
  const page = currentPage + 1;
  const currentLowestResult = 1 + ((pageSize * page) - pageSize);
  let currentHighestResult = (pageSize * page);
  if(currentHighestResult > total) {
    currentHighestResult = total;
  }
  return (
    <div className={wrapperClass}>
      {message.length ?
        message
        :
        `${currentLowestResult}-${currentHighestResult} of ${total} datasets`
      }
    </div>
  );
}

DataTablePageResults.defaultProps = {
  wrapperClass: 'dkan-data-table-results',
  message: ''
};
DataTablePageResults.propTypes = {
  wrapperClass: PropTypes.string,
  message: PropTypes.string,
  total: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired
}

export default DataTablePageResults;
