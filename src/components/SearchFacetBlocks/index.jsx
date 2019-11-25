import React from 'react';
import PropTypes from 'prop-types';
import FacetList from '../SearchFacetList';
import { useFacetTypes } from '../../services/hooks/searchHooks';

const SearchFacetBlocks = ({
  className,
  facets,
  limit,
  facetChangeFunc,
}) => {
  const facetTypes = useFacetTypes(facets.defaultFacets);
  return (
    <div className={className}>
      {facetTypes.map((facetKey) => (
        <FacetList
          key={facetKey}
          facetKey={facetKey}
          selectedFacets={facets.selectedFacets}
          facetResults={facets.facetResults}
          limit={limit}
          facetChangeFunc={facetChangeFunc}
        />
      ))}
    </div>
  );
};

SearchFacetBlocks.defaultProps = {
  className: 'search-facet-blocks',
  limit: 10,
};

SearchFacetBlocks.propTypes = {
  className: PropTypes.string,
  facets: PropTypes.objectOf(PropTypes.any).isRequired,
  limit: PropTypes.number,
  facetChangeFunc: PropTypes.func.isRequired,
};

export default SearchFacetBlocks;
