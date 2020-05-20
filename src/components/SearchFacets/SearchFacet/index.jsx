import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ToggleBlock from '../../ToggleBlock';
import ShowMoreContainer from '../../ShowMoreContainer';

const SearchFacet = ({
  facetType,
  label,
  facets,
  dispatch,
  selected,
}) => {
  if (facets.length === 0) {
    return '';
  }

  let myLabel = '';
  if (!label) {
    myLabel = facetType;
  } else {
    myLabel = label;
  }

  const choices = facets.map((item) => {
    const itemName = item.name;
    const itemTotal = item.total;

    const key = `${facetType.toLowerCase()}-${itemName.replace(/\s/g, '')}-${Math.random() * 100}`;

    const checked = selected.filter(
      (selectedFacet) => selectedFacet === itemName,
    ).length > 0 || false;

    const onChangeFunction = (e) => {
      const { value } = e.target;
      const found = selected.indexOf(value);
      if (found > -1) {
        selected.splice(found, 1);
      } else {
        selected.push(value);
      }

      const newFacet = [facetType, value];

      dispatch({
        type: 'UPDATE_FACETS',
        data: {
          newFacet,
        },
      });
    };

    return (
      <div className="dc-facet-option" key={key}>
        <Input
          checked={checked}
          id={key}
          name={facetType}
          type="checkbox"
          value={itemName}
          onChange={onChangeFunction}
        />
        <Label htmlFor={key}>
          <FontAwesomeIcon
            icon={['fas', checked ? 'check-square' : 'square']}
            size="1x"
            aria-hidden="true"
            role="presentation"
          />
          {`${itemName} (${itemTotal})`}
        </Label>
      </div>
    );
  });

  return (
    <ToggleBlock
      key={facetType}
      // TODO: Fix this so it's adjustable
      title={(
        <span>
          {myLabel}
        </span>
      )}
      headingClasses={`facet-block-${facetType}-inner`}
      innerClasses={`inner-${facetType}-facets`}
    >
      <ShowMoreContainer
        container="div"
        items={choices}
        limit={10}
      />
    </ToggleBlock>
  );
};

SearchFacet.defaultProps = {
  label: '',
  selected: [],
};

SearchFacet.propTypes = {
  facetType: PropTypes.string.isRequired,
  facets: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
  dispatch: PropTypes.func.isRequired,
  label: PropTypes.string,
  selected: PropTypes.arrayOf(PropTypes.arrayOf),
};

export default SearchFacet;
