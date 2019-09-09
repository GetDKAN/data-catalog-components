import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem } from "reactstrap";
import Wrapper from './Wrapper';



const NavBar = ({navItems, expand, defaultStyling, customClasses}) => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <Wrapper className={`${customClasses} ${defaultStyling ? 'container-fluid main-navigation base-styles' : ''}`}>
      {expand && 
        <Navbar expand="md navbar-dark">
          <NavbarToggler onClick={() => toggleOpen(!isOpen)} />
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
        <Navbar expand={false} className="container">
          <ul>
            {navItems.map((item, index) => (
              <NavItem key={index}>
                {item}
              </NavItem>
            ))}
          </ul>
        </Navbar>
      }
    </Wrapper>
  );
}

NavBar.defaultProps = {
  defaultStyling: true,
  expand: true,
  customClasses: ""
}

export default NavBar;
