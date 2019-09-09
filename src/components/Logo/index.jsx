/* eslint-disable */

import React, { Component } from 'react';
import Wrapper from './Wrapper';

class Logo extends Component {

    render() {
      let logo = this.props.image ? this.props.image : {image}

      return (
        <Wrapper href="/" className="logo">
          <img src={logo} alt="Open Data Catalog" />
        </Wrapper>
      );
    }

}

Logo.defaultProps = {
    image: 'http://demo.getdkan.com/profiles/dkan/themes/nuboot_radix/logo.svg'
};

export default Logo;
