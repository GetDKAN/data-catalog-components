import React from 'react';

const DatasetSearchFacetBlock = ({facets, title, clickFn}) => {
  const [open, setOpen] = React.useState(true)
  if(!facets) {
    return (<p>loading</p>)
  }
  return (
    <fieldset className="usa-fieldset">
      <legend className="usa-legend">
        <button
          onClick={(e) => {e.preventDefault(); setOpen(!open);}}
          className="usa-button usa-button--unstyled"
        >
          {title}
        </button>
      </legend>
      {open
        &&(
          <div>
          {facets.map((facet) => (
            <div className="usa-checkbox" key={facet.name}>
              <input
                className="usa-checkbox__input"
                id={`check-${facet.type}-${facet.name}`}
                type="checkbox"
                name={facet.type}
                value={facet.name}
                onClick={() => clickFn({key: facet.type, value: facet.name})}
              />
              <label
                className="usa-checkbox__label"
                htmlFor={`check-${facet.type}-${facet.name}`}
              >
                {facet.name} ({facet.total})
              </label>
            </div>
          ))}
          </div>
        )
      }
    </fieldset>
  );
}

export default DatasetSearchFacetBlock;
