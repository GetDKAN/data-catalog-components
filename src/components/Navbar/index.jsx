import React from 'react';
import PropTypes from 'prop-types';
import PrimaryNav from '../PrimaryNav';


const Navbar = ({navLinks, items}) => {
  return (
    <PrimaryNav
      navItems={navLinks}
      items={items}
    />
  )
}

Navbar.defaultProps = {

      }

Navbar.propTypes = {

      }

export default Navbar;
