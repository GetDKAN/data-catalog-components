import React from 'react';
import PropTypes from 'prop-types';

// TODO // use classes conditionally, and as props. See the Same component in uswds-react.
const NavList = ({
  items
}) => {
  return (
      <ul className="usa-nav__primary usa-accordion">
      {items.map((item, index) => (
          <li key={index} className="usa-nav__primary-item">
          <a href={item.url}>{item.label}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;

NavList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};
