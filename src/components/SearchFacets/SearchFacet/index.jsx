import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import ToggleBlock from '../../ToggleBlock';
import ShowMoreContainer from '../../ShowMoreContainer';

library.add(fas);

const SearchFacet = ({
  facetType,
  label,
  facets,
  dispatch,
  selected,
  toggleClasses,
  InputComponent,
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

    if (InputComponent) {
      return (
        <InputComponent
          key={key}
          checked={checked}
          name={facetType}
          type="checkbox"
          value={itemName}
          onChange={onChangeFunction}
        >
          {`${itemName} (${itemTotal})`}
        </InputComponent>
      );
    }

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
      headingClasses={`facet-block-${facetType}-inner${toggleClasses ? ` ${toggleClasses}` : ''}`}
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
  toggleClasses: null,
  InputComponent: null,
};

SearchFacet.propTypes = {
  facetType: PropTypes.string.isRequired,
  facets: PropTypes.arrayOf(PropTypes.arrayOf).isRequired,
  dispatch: PropTypes.func.isRequired,
  label: PropTypes.string,
  selected: PropTypes.arrayOf(PropTypes.arrayOf),
  toggleClasses: PropTypes.string,
  InputComponent: PropTypes.func,
};

export default SearchFacet;
