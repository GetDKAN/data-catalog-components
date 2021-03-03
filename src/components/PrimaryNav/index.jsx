import React from 'react';
import PropTypes from 'prop-types';
import DynamicLink from '../DynamicLink/index';

const PrimaryNav = ({
  navLinks,
  name,
  items
}) => {
  return (
    <nav className="usa-nav is-visible" title={name}>
      {items.map((item, index) => (
        <a href={item.url} key={index}>
          {item.label}
         </a>
        // TODO: Check for why "expected string but received undefined."
        //   <DynamicLink
      //     key={index}
      //     url={item.url}
      //     content={item.label}
      // />
      ))}
    </nav>
  );
}

export default PrimaryNav

PrimaryNav.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}
