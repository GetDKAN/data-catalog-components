import React from 'react';
import PropTypes from 'prop-types';
import SearchResultsMessage2 from './revisions/SearchResultsMessage2';

const SearchResultsMessage = ({
  searchTerm,
  selectedFacets,
  total,
  showQuery,
  showFacets,
  className,
  facetTitleClass,
  facetListClass,
  searchQueryClass,
  facetDelimiter,
  facetSeparator,
  defaultFacets,
}) => {
  let term = '';
  let facets = [];
  if (showFacets) {
    facets = [...selectedFacets];
  }

  if (facets.length > 0 && showFacets) {
    facets = selectedFacets.map((item) => {
      const newItem = [...item];
      const facetType = item[0];
      if (facetType in defaultFacets) {
        newItem[0] = defaultFacets[facetType].label;
      }
      return newItem;
    });
  }

  if (searchTerm && showQuery) {
    term = searchTerm;
  }

  return (
    <SearchResultsMessage2
      total={total}
      searchTerm={term}
      facets={facets}
      className={className}
      facetTitleClass={facetTitleClass}
      facetListClass={facetListClass}
      searchClass={searchQueryClass}
      facetDelimiter={facetDelimiter}
      facetTypeDelimiter={facetSeparator}
    />
  );
};

SearchResultsMessage.defaultProps = {
  showQuery: true,
  showFacets: true,
  facetLimit: 3,
  className: 'dc-search-results-message',
  facetTitleClass: 'dc-search-results-facet-title',
  facetListClass: 'dc-search-results-facet-list',
  searchQueryClass: 'dc-search-results-query',
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
  total: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired,
  facetDelimiter: PropTypes.string,
  facetSeparator: PropTypes.string,
  defaultFacets: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default SearchResultsMessage;