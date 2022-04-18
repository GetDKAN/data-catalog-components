import React from 'react';
import PropTypes from 'prop-types';
import '../../../i18n';
import { useTranslation } from 'react-i18next';

const DataTablePageResults = ({
  total,
  pageSize,
  currentPage,
  className,
  viewing = false
}) => {
  const { t, i18n } = useTranslation();
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
        {t('of')}
        {' '}
        <span className="total">{displayTotal}</span>
        {' '}
        {t('rows')}
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
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default DataTablePageResults;
