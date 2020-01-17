import React, { useContext } from "react";
import { SearchDispatch } from "../../services/search/search_tools";

const SearchFacetBlock = ({ facetType }) => {
  const { searchState, dispatch } = useContext(SearchDispatch);
  const { facets, selectedFacets } = searchState;

  const myFacets = facets.filter(facet => {
    if (facet.type == facetType) {
      return true;
    }
    return false;
  });

  const choices = myFacets.map(facet => {
    let checked = selectedFacets.find(element => element.name === facet.name)
      ? true
      : false;
    let disabled = facet.total === 0;

    return (
      <li>
        <input
          type="checkbox"
          name={facet.name}
          value={facet.name}
          disabled={disabled}
          checked={checked}
          onChange={e => {
            updateSelectedFacets(e, facetType, selectedFacets);
          }}
        />
        {facet.name} ({facet.total})
      </li>
    );
  });

  function updateSelectedFacets(event, facetType, selectedFacets) {
    let selected = [...selectedFacets];
    if (event.target.checked) {
      selected.push({ type: facetType, name: event.target.value });
    } else {
      selected = selected.filter(facet => {
        if (facet.name === event.target.value) {
          return false;
        }
        return true;
      });
    }
    dispatch({
      type: "UPDATE_SELECTED_FACETS",
      data: { selectedFacets: selected }
    });
  }

  return (
    <div>
      <h2>{facetType}</h2>
      <ul>{choices}</ul>
    </div>
  );
};

export default SearchFacetBlock;
