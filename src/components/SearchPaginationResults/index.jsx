import React from 'react';
import PropTypes from 'prop-types';
import '../../i18n';
import { useTranslation } from 'react-i18next';

const SearchPaginationResults = ({
  className,
  currentPage,
  pageSize,
  total,
}) => {
  const { t, i18n } = useTranslation();
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
      {t('of')}
      {' '}
      {total}
      {' '}
      {t('datasets')}
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
