import React from 'react';
import { Link } from '@reach/router';

const DatasetSearchCards = ({items}) => {
  return(
    <ul className="usa-card-group">
      {items.map((item) => {
        const {description, title, identifier, distribution, publisher, theme} = item;
        return (
          <li 
            key={identifier}
            className="grid-col-12 usa-card"
          >
            <div className="usa-card__container">
              <header className="usa-card__header">
                <Link to={`/dataset/${identifier}`}>
                  <h2 className="usa-card__heading">
                    {title}
                  </h2>
                </Link>
              </header>
              <div className="usa-card__body">
                <span className="display-block">{publisher.name}</span>
                <ul className="display-flex add-list-reset">
                  {theme.map((t) =>(<li key={t}>{t}</li>))}
                </ul>
                <div>
                  {description}
                </div>
              </div>
              <div className="usa-card__footer">
                <ul className="display-flex add-list-reset">
                  {distribution.map((dist) => (
                    <li key={dist.title}>
                      <span className="usa-tag">{dist.format}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default DatasetSearchCards;
