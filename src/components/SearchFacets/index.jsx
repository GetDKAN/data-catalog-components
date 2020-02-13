import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';
import ToggleBlock from '../ToggleBlock';
import ShowMoreContainer from '../ShowMoreContainer';
import { setSelectedFacets, resetSelectedFacets } from '../../services/search/search_functions';

const SearchFacets = ({
  defaultFacets,
  dispatch,
  selectedFacets,
  facetsResults,
  className,
  toggleClasses,
  InputComponent,
  totalItems,
  fulltext,
}) => {
  const facetList = Object.entries(defaultFacets);

  function buildSearchFacet(facet) {
    const facetKey = facet[0];
    const { label, showAll } = facet[1];
    const hasSelection = selectedFacets.filter((facet) => facet[0].toLowerCase() === facetKey.toLowerCase()) || [];
    let results = [];
    if (facetsResults && facetsResults.length) {
      results = facetsResults.filter(
        (result) => result.type.toLowerCase() === facetKey.toLowerCase(),
      );
    }
    if (!showAll) {
      results = results.filter((result) => parseInt(result.total, 10) > 0);
    }

    if (
      (facet[1].facetType === 'radio')
      && (
        results[0] !== (`All ${facet[1].label.toLowerCase()}`
        || `All matched ${facet[1].label.toLowerCase()}`))
    ) {
      const newName = (fulltext.length || selectedFacets.length) ? `All matched ${facet[1].label.toLowerCase()}` : `All ${facet[1].label.toLowerCase()}`
      results.unshift({
        type: facetKey.toLowerCase(),
        name: newName,
        total: totalItems
      });
    }

    const choices = results.map((item, index) => {
      const type = facet[1].facetType ? facet[1].facetType : 'checkbox';
      const key = `${facetKey.toLowerCase()}-${item.name.replace(/\s/g, '')}-${Math.random() * 100}`;
      let selected = selectedFacets.filter(
        (selectedFacet) => selectedFacet[1] === item.name,
      ).length > 0 || false;
      let onChangeFunction = (e) => { dispatch(setSelectedFacets(e.target, selectedFacets, facet[1].showAll)); };

      if (index === 0 && type === 'radio') {
        onChangeFunction = () => { dispatch(resetSelectedFacets(selectedFacets, facetKey)); };
        selected = hasSelection.length === 0;
      }


      if (InputComponent) {
        return (
          <InputComponent
            key={key}
            checked={selected}
            name={facetKey.toLowerCase()}
            type={type}
            value={item.name}
            onChange={onChangeFunction}
          >
            {`${item.name} (${item.total})`}
          </InputComponent>
        );
      }
      return (
        <Label key={key}>
          <Input
            checked={selected}
            name={facetKey.toLowerCase()}
            type={type}
            value={item.name}
            onChange={onChangeFunction}
          />
          {`${item.name} (${item.total})`}
        </Label>
      );
    });
    return (
      <ToggleBlock
        key={facetKey}
        // TODO: Fix this so it's adjustable
        title={(
          <span>
            <i className="fa fa-chevron-down" />
            {label}
          </span>
        )}
        headingClasses={`facet-block-${label.toLowerCase()}-inner ${toggleClasses}`}
        innerClasses={`inner-${label.toLowerCase()}-facets`}
      >
        {(facet[1].reset.active && hasSelection.length)
        ? <button onClick={() => dispatch(resetSelectedFacets(selectedFacets, facetKey))} className='facet-reset-button'>
            {facet[1].reset.icon
              && (
                <span className="undo-icon">
                  {facet[1].reset.icon}
                </span>
                )
            }
            Reset
          </button>
        : null
      }
        <ShowMoreContainer
          container="div"
          items={choices}
          limit={facet[1].limit}
        />
      </ToggleBlock>
    );
  }

  return (
    <div className={className}>
      {facetList.map((facet) => buildSearchFacet(facet))}
    </div>
  );
};

SearchFacets.defaultProps = {
  className: '',
  toggleClasses: '',
  InputComponent: null,
};

SearchFacets.propTypes = {
  defaultFacets: PropTypes.objectOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  selectedFacets: PropTypes.arrayOf(PropTypes.array).isRequired,
  facetsResults: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
  toggleClasses: PropTypes.string,
  InputComponent: PropTypes.func,
};

export default SearchFacets;
