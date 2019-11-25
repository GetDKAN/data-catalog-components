import React from 'react';
import PropTypes from 'prop-types';
import ToggleBlock from '../ToggleBlock';
import ShowMoreContainer from '../ShowMoreContainer';
import { useFilteredFacets } from '../../services/hooks/searchHooks';

const SearchFacetList = ({
  facetKey,
  selectedFacets,
  facetResults,
  limit,
  facetChangeFunc,
}) => {
  const filteredFacets = useFilteredFacets(facetKey, selectedFacets, facetResults);

  const choices = filteredFacets.map((result) => {
    const type = 'checkbox';
    const label = result[0];
    const selected = selectedFacets.filter((selFacet) => selFacet[1] === result[0]).length > 0;
    const key = `${facetKey}-${label.replace(/\s/g, '')}-${Math.random() * 10}`;
    return (
      <li key={key}>
        <input
          type={type}
          name={facetKey}
          value={label}
          checked={selected}
          onChange={facetChangeFunc}
        />
        {label}
      </li>
    );
  });
  return (
    <ToggleBlock
      key={facetKey}
      title={facetKey}
    >
      <ShowMoreContainer
        container="ol"
        items={choices}
        limit={limit}
      />
    </ToggleBlock>
  );
};

SearchFacetList.defaultProps = {
  limit: 10,
};

SearchFacetList.propTypes = {
  facetKey: PropTypes.string.isRequired,
  selectedFacets: PropTypes.arrayOf(PropTypes.array).isRequired,
  facetResults: PropTypes.objectOf(PropTypes.array).isRequired,
  limit: PropTypes.number,
  facetChangeFunc: PropTypes.func.isRequired,
};

export default SearchFacetList;
