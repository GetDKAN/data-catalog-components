import React, { useState } from 'react';
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
    <div className={`${customClasses} ${defaultStyling ? ' dc-main-navigation base-styles' : ''}`}>
      {expand && 
        <Navbar expand="md navbar-dark">
          <div className="dc-toggle">
            <NavbarToggler onClick={() => toggleOpen(!isOpen)}>
              <FontAwesomeIcon
                icon={['fas', 'bars']}
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
      }
      {!expand && 
        <Navbar expand={false} className={customClasses}>
          <ul>
            {navItems.map((item, index) => (
              <NavItem key={index}>
                {item}
              </NavItem>
            ))}
          </ul>
        </Navbar>
      }
    </div>
  );
}

NavBar.defaultProps = {
  defaultStyling: true,
  expand: true,
  customClasses: ""
}

export default NavBar;
