import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = ({
  navItems, expand, defaultStyling, customClasses,
}) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div className={` ${defaultStyling ? ' dc-main-navigation base-styles' : ''}`}>
      {expand && (
        <Navbar expand="md" className={customClasses} container={false}>
          <div className="dc-toggle">
            <NavbarToggler onClick={() => toggleOpen(!isOpen)}>
              <FontAwesomeIcon
                icon="fa-bars"
                aria-hidden="true"
                role="presentation"
              />
              <span className="sr-only">Menu</span>
            </NavbarToggler>
          </div>

          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto">
              {navItems.map((item, index) => (
                <NavItem key={index}>
                  {item}
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Navbar>
      )}
      {!expand && (
        <Navbar expand={false} className={customClasses}>
          <ul>
            {navItems.map((item, index) => (
              <NavItem key={index}>
                {item}
              </NavItem>
            ))}
          </ul>
        </Navbar>
      )}
    </div>
  );
};

NavBar.defaultProps = {
  defaultStyling: true,
  expand: true,
  customClasses: ""
};

NavBar.propTypes = {
  customClasses: PropTypes.string,
  defaultStyling: PropTypes.bool,
  expand: PropTypes.bool,
  navItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default NavBar;
