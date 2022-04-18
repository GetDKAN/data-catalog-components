import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../../../../i18n';
import { useTranslation } from 'react-i18next';

const SearchResultsMessage2 = ({ className, total, searchTerm, searchClass, facets, facetTitleClass, facetListClass, facetDelimiter, facetTypeDelimiter, facetLimit }) => {
  const { t, i18n } = useTranslation();

  const totalInfo = getTotalInfo(total);
  const searchInfo = getSearchInfo(searchTerm, searchClass);
  const facetsInfo = getFacetsInfo(facets, facetTitleClass, facetListClass, facetDelimiter, facetTypeDelimiter, facetLimit);

  return (
    <div className={className}>
      <p>
        {totalInfo}
        {searchInfo}
        {facetsInfo}
      </p>
    </div>
  );

  function getTotalInfo(total) {
    let text = []
    text.push(total.toLocaleString('en'));
    text.push(total !== 1 ? t('datasets') : t('dataset'));
    text.push(t('found'));
    return text.join(" ");
  }

  function getSearchInfo(searchTerm, searchQueryClass) {
    if (!searchTerm) {
      return "";
    }
    
    return (<>{' '}for &quot;<span className={searchQueryClass}>{searchTerm}</span>&quot;</>);
  }

  function getFacetsInfo(facets, facetTitleClass, facetListClass, facetDelimiter, facetTypeDelimiter, facetLimit) {
    if (facets.length == 0) {
      return "";
    }

    const facetTypes = getFacetTypes(facets);

    let facetsText = []
    let counter = 0;
    facetsText.push(' in ');

    facetTypes.forEach(facetType => {
      
      // Add '&' between facet types.
      if (counter > 0) {
        facetsText.push(facetTypeDelimiter);
      }

      facetsText.push(getFragmentForFacetType(facetType, facets, facetTitleClass, facetDelimiter, facetLimit));
      
      counter++
    });

    return <span className={facetListClass}>{facetsText}</span>;
  }

};

function getFacetTypes(selectedFacets) {
  return selectedFacets
  .map((facet) => facet[0])
  .filter((value, index, self) => self.indexOf(value) === index);
}

function getFacetsOfType(facetType, selectedFacets) {
  let facets = []
  selectedFacets.forEach(facet => {
    if (facet[0] === facetType) {
      facets.push(facet[1]);
    }
  });
  return facets;
}

function getFragmentForFacetType(facetType, selectedFacets, facetTitleClass, facetDelimiter, facetLimit) {
  let facetTitle = (<span className={facetTitleClass}>{facetType}</span>);
  
  const facets = getFacetsOfType(facetType, selectedFacets);
  
  const facetsText = getFacetsText(facets, facetType, facetDelimiter, facetLimit)
  
  return (
    <Fragment key={`${facetType}-${facets.length}`}>
      {facetTitle}
      :
      {' '}
      {facetsText}
    </Fragment>
  );
}

function getFacetsText(facets, facetType, facetDelimiter, facetLimit) {
  if (facets.length === facetLimit) {
    return facets.length + ' selected ' + facetType;
  }
  return facets.join(facetDelimiter)
}

SearchResultsMessage2.defaultProps = {
  className: 'dc-search-results-message',
  facetTitleClass: 'dc-search-results-facet-title',
  facetListClass: 'dc-search-results-facet-list',
  searchQueryClass: 'dc-search-results-query',
  facetDelimiter: ' or ',
  facetTypeDelimiter: ' | ',
  facetLimit: 3
};

SearchResultsMessage2.propTypes = {
  className: PropTypes.string,
  total: PropTypes.number.isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchClass: PropTypes.string,
  facets: PropTypes.arrayOf(PropTypes.array).isRequired,
  facetTitleClass: PropTypes.string,
  facetListClass: PropTypes.string,
  facetDelimiter: PropTypes.string,
  facetTypeDelimiter: PropTypes.string,
  facetLimit: PropTypes.number
};

export default SearchResultsMessage2;
