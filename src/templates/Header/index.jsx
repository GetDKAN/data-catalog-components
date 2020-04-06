/* eslint-disable */

import React, { Component } from 'react';
import NavBar from '../../templates/NavBar';
import { Link } from "@reach/router";

class Header extends Component {

    render() {
      const logo = this.props.logo ? this.props.logo : 'https://dkan-default-content-files.s3.amazonaws.com/files/logo.svg';
      const siteName = this.props.site ? <Link to={this.props.link}>{this.props.site}</Link> : null;
      const slogan = this.props.slogan ? <div className="slogan">{this.props.slogan}</div> : null;

      return (
        <div className="dc-header">
          <div className={this.props.customClasses}>
            <div className="branding">
              <Link to={this.props.link} className="dc-logo">
                <img src={logo} alt="Open Data Catalog" />
              </Link>
              <div className="site-name">
                {siteName}
                {slogan}
              </div>
            </div>
          </div>
          {this.props.navItems &&
            <NavBar navItems={this.props.navItems} className={this.props.customClasses} />
          }
        </div>
      );
    }
}

Header.defaultProps = {
  link: "/"
};

export default Header;
