/* eslint-disable */

import React, { Component } from 'react';
import { Link } from "@reach/router";

class Logo extends Component {

    render() {
      let logo = this.props.image;

      return (
        <Link to="/" className="dc-logo">
          <img src={logo} alt="Open Data Catalog" />
        </Link>
      );
    }

}

Logo.defaultProps = {
    image: 'https://dkan-default-content-files.s3.amazonaws.com/files/logo.svg'
};

export default Logo;
