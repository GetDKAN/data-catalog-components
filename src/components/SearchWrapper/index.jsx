import React from 'react';
import PropTypes from 'prop-types';
import withSearch from './withSearch';

const SearchWrapper = ({ children }) => <div>{children}</div>;

SearchWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withSearch(SearchWrapper);
