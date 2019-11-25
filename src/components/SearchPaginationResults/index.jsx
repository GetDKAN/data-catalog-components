import React from 'react';
import PropTypes from 'prop-types';

const SearchPaginationResults = ({
  className,
  currentPage,
  pageSize,
  total,
}) => {
  const startingNumber = total > 0 ? 1 : 0;
  const currentLowestResult = startingNumber + ((pageSize * currentPage) - pageSize);
  let currentHighestResult = (pageSize * currentPage);
  if (currentHighestResult > total) {
    currentHighestResult = total;
  }
  return (
    <div className={className}>
      {currentLowestResult}
      -
      {currentHighestResult}
      {' '}
      out of
      {' '}
      {total}
      {' '}
      datasets
    </div>
  );
};

SearchPaginationResults.defaultProps = {
  className: 'dataset-results-count',
};

SearchPaginationResults.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default SearchPaginationResults;
