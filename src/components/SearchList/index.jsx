/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import ResultsList from './ResultsList';

import SearchListItem from '../SearchListItem';

const SearchList = ({items, message}) => {

    return (
      <React.Fragment>
        <div className="results-message">{ message }</div>
        <ResultsList items={items} className="search-list" component={SearchListItem} />
      </React.Fragment>
    );

}

SearchList.defaultProps = {
  message: "",
  items: [],
};

SearchList.propTypes = {
  message: PropTypes.string,
  items: PropTypes.any,
};

export default SearchList;
