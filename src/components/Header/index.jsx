/* eslint-disable */

import React, { Component } from "react";

import Logo from "../Logo";
import NavBar from "../NavBar";
import Wrapper from "./Wrapper";

class Header extends Component {
  render() {
    const siteName = this.props.site ? (
      <a href={this.props.link}>{this.props.site}</a>
    ) : null;
    const slogan = this.props.slogan ? (
      <div className="slogan">{this.props.slogan}</div>
    ) : null;

    return (
      <Wrapper>
        <div className="container-fluid">
          <div className="branding">
            <Logo />
            <div className="site-name">
              {siteName}
              {slogan}
            </div>
          </div>
        </div>
        {this.props.navItems && <NavBar navItems={this.props.navItems} />}
      </Wrapper>
    );
  }
}

Header.defaultProps = {
  link: "/"
};

export default Header;
