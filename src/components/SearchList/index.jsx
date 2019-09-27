import React from 'react';
import PropTypes from 'prop-types';

const SearchList = ({
  children,
  message,
  className,
  listClassName,
  resultsClassName,
}) => (
  <div className={className}>
    {message && (
      <div className={resultsClassName}>
        {message}
      </div>
    )}
    <ol className={listClassName}>
      {children}
    </ol>
  </div>
);

SearchList.defaultProps = {
  message: '',
  listClassName: 'search-list',
  className: '',
  resultsClassName: 'results-message',
};

SearchList.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.string,
  listClassName: PropTypes.string,
  className: PropTypes.string,
  resultsClassName: PropTypes.string,
};

export default SearchList;
