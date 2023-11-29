/* eslint-disable */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import validator from 'validator';

class Menu extends Component {
  
  render() {
    const heading = this.props.title ? this.props.title : "";
    const direction = this.props.horizontal ? "nav-horizontal" : "";
    const classes = `dc-menu ${this.props.className} ${direction}`

    return (
      <div 
        className={classes}
        aria-label={this.props.menuId}
        id={this.props.menuId} 
      >
        { heading ? <h3>{heading}</h3> : '' }
        <ul>
        {
          this.props.items.map(function(item, i) {
            return validator.isURL(item.url) ?
              <li key={i}>
                <a
                  href={item.url}
                  target={item.target} 
                  className="dc-menu-item"
                >
                  {item.label}
                </a>
              </li>
              :
              <li key={i}>
                <Link 
                  to={item.url} 
                  target={item.target} 
                  className="dc-menu-item">
                    {item.label}
                </Link>
              </li>;
          })
        }
        </ul>
      </div>
    )
  }
}

Menu.defaultProps = {
  items: [],
  className: "navigation-menu",
  target: "_top",
  menuId: "menu"
};

Menu.propTypes = {
  items: PropTypes.any,
  className: PropTypes.any,
  title: PropTypes.string,
  horizontal: PropTypes.bool,
  menuId: PropTypes.string
};

export default Menu
