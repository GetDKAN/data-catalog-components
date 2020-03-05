/* eslint-disable */

import React, { Component } from 'react';

class Logo extends Component {

    render() {
      let logo = this.props.image ? this.props.image : {image}

      return (
        <div href="/" className="dc-logo">
          <img src={logo} alt="Open Data Catalog" />
        </div>
      );
    }

}

Logo.defaultProps = {
    image: 'http://demo.getdkan.com/profiles/dkan/themes/nuboot_radix/logo.svg'
};

export default Logo;
