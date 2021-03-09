import React from 'react';
import PropTypes from 'prop-types';
import DynamicLink from '../DynamicLink/index';
import NavList from '../NavList/NavList.jsx';

const PrimaryNav = ({
  name,
  items
}) => {
  return (
    <nav className="usa-nav" title={name}>
        <NavList items={items} type="primary" />
    </nav>
  );
};

export default PrimaryNav;

PrimaryNav.propTypes = {
  name: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}
