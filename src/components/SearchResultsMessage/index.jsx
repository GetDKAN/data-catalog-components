import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SearchResultsMessage = ({
  searchTerm,
  selectedFacets,
  facetTypes,
  total,
  showQuery,
  showFacets,
  facetLimit,
  className,
  facetTitleClass,
  facetListClass,
  searchQueryClass,
  facetDelimiter,
  facetSeparator,
}) => {
  let queryText = null;
  const facetsText = [];
  if (showQuery && searchTerm) {
    queryText = (
      <>
        {' '}
        for &quot;
        <span className={searchQueryClass}>
          {searchTerm}
        </span>
        &quot;
      </>
    );
  }

  if (showFacets && selectedFacets.length > 0) {
    const facetObj = {};
    for (let i = 0; i < facetTypes.length; i += 1) {
      facetObj[facetTypes[i]] = selectedFacets.filter((facet) => facet[0] === facetTypes[i]);
    }
    if (Object.keys(facetObj).length) {
      const keys = Object.keys(facetObj);
      facetsText.push(' in ');
      for (let i = 0; i < keys.length; i += 1) {
        const facetTitle = <span className={facetTitleClass}>{keys[i]}</span>;
        if (facetObj[keys[i]].length) {
          if (facetsText.length >= 2) {
            facetsText.push(facetSeparator);
          }
          const facetArray = facetObj[keys[i]].map((item) => item[1]);
          let facetsList = (
            <span className={facetListClass}>{facetArray.join(facetDelimiter)}</span>
          );
          if (facetArray.length >= facetLimit) {
            facetsList = (
              <span className={`${facetListClass} combined-facets`}>
                {facetArray.length}
                {' '}
                selected
                {' '}
                {keys[i]}
              </span>
            );
          }
          facetsText.push(
            <Fragment key={`${facetTitle}-${facetArray.length}`}>
              {facetTitle}
              :
              {' '}
              {facetsList}
            </Fragment>,
          );
        }
      }
    }
  }

  return (
    <div className={className}>
      <p>
        {(total).toLocaleString('en') }
        {' '}
        {total !== 1 ? 'datasets' : 'dataset'}
        {' '}
        found
        {queryText}
        {facetsText}
      </p>
    </div>
  );
};

SearchResultsMessage.defaultProps = {
  showQuery: true,
  showFacets: true,
  facetLimit: 3,
  className: 'search-results-message',
  facetTitleClass: 'search-results-facet-title',
  facetListClass: 'search-results-facet-list',
  searchQueryClass: 'search-results-query',
  facetDelimiter: ' or ',
  facetSeparator: ' | ',
};
SearchResultsMessage.propTypes = {
  className: PropTypes.string,
  showQuery: PropTypes.bool,
  showFacets: PropTypes.bool,
  facetLimit: PropTypes.number,
  facetTitleClass: PropTypes.string,
  facetListClass: PropTypes.string,
  searchQueryClass: PropTypes.string,
  selectedFacets: PropTypes.arrayOf(PropTypes.array).isRequired,
  facetTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  total: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired,
  facetDelimiter: PropTypes.string,
  facetSeparator: PropTypes.string,
};

export default SearchResultsMessage;
