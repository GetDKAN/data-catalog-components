import React from 'react';
import PropTypes from 'prop-types';
import SearchFacet from './SearchFacet';

const SearchFacets = ({
  facetsConfig,
  facetsResults,
  selectedFacets,
  dispatch,
  className,
}) => {
  const facetList = Object.entries(facetsConfig);
  const facetComponents = facetList.map(
    (facetInfo) => {
      const facetType = facetInfo[0];
      const facets = facetsResults.filter((facetItem) => facetItem.type === facetType);
      const selected = selectedFacets
        .filter((item) => item[0] === facetType)
        .map((item) => item[1]);

      return (
        <SearchFacet
          key={facetType}
          facetType={facetType}
          label={facetInfo[1].label}
          facets={facets}
          dispatch={dispatch}
          selected={selected}
        />
      );
    },
  );

  return (
    <div className={className}>
      {facetComponents}
    </div>
  );
};

SearchFacets.defaultProps = {
  className: 'dc-search-facets',
  selectedFacets: [],
};

SearchFacets.propTypes = {
  facetsConfig: PropTypes.objectOf(PropTypes.object).isRequired,
  facetsResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  selectedFacets: PropTypes.arrayOf(PropTypes.array),
  className: PropTypes.string,
};

export default SearchFacets;
