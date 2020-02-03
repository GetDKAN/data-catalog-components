/* eslint-disable */

import React, { Component } from 'react';

import Logo from '../../components/Logo';
import NavBar from '../../templates/NavBar';

class Header extends Component {


    render() {
      const siteName = this.props.site ? <a href={this.props.link}>{this.props.site}</a> : null;
      const slogan = this.props.slogan ? <div className="slogan">{this.props.slogan}</div> : null;

      return (
        <div className="dc-header">
          <div className={this.props.customClasses}>
            <div className="branding">
              <Logo/>
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
