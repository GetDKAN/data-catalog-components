import React from 'react';
import PropTypes from 'prop-types';
import SearchResultsMessage2 from './revisions/SearchResultsMessage2'

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
  defaultFacets,
}) => {
  
  let facets = [];
  let term = "";

  if (selectedFacets.length > 0 && showFacets) {
    facets = selectedFacets.map((item) => {
      item[0] = defaultFacets[item[0]].label;
      return item;
    });
  }

  if (searchTerm && showQuery) {
    term = searchTerm;
  }
  
  return (  
  <SearchResultsMessage2 
    total= {total} 
    searchTerm={term} 
    facets={facets} 
    className={className} 
    facetTitleClass={facetTitleClass} 
    facetListClass={facetListClass} 
    searchClass={searchQueryClass} 
    facetDelimiter={facetDelimiter}
    facetTypeDelimiter={facetSeparator} 
  />)
}

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
  facetTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  total: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired,
  facetDelimiter: PropTypes.string,
  facetSeparator: PropTypes.string,
  defaultFacets: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default SearchResultsMessage;


/*
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
*/