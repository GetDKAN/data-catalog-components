/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../../components/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends React.Component {

  render() {
    const menu1 = this.props.links ? <Menu items={this.props.links.footer1} menuId="leftnav"/> : null;
    const menu2 = this.props.links ? <Menu items={this.props.links.footer2} menuId="rightnav"/> : null;
    const customClasses = this.props.customClasses;

    return (
      <div className={`${customClasses} dc-footer`}>
        <div className="page-footer">
          
            <div className="branding">
              <h2>Open Source Open Data</h2>
              <p>
                We can only realize the full power of open data when the tools used for its collection, publishing and analysis are also open and transparent.
              </p>
              <p>
                Powered by <a href="http://getdkan.com">DKAN</a>
              </p>
              <div className="social">
                <a href="https://www.facebook.com/GetDKAN/">
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    size="1x"
                    aria-hidden="true"
                    role="presentation"
                  />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="https://twitter.com/getdkan">
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    size="1x"
                    aria-hidden="true"
                    role="presentation"
                  />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="https://dkan.slack.com/">
                  <FontAwesomeIcon
                    icon={['fab', 'slack']}
                    size="1x"
                    aria-hidden="true"
                    role="presentation"
                  />
                  <span className="sr-only">Slack</span>
                </a>
                <a href="https://github.com/getdkan">
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    size="1x"
                    aria-hidden="true"
                    role="presentation"
                  />
                  <span className="sr-only">Github</span>
                </a>
              </div>
            </div>

            {menu1}

            {menu2}
        </div>
      </div>
    );
  }
}

Footer.defaultProps = {
    state: "loading",
};

Footer.propTypes = {
    state: PropTypes.string,
    item: PropTypes.any,
    links: PropTypes.object
};

export default Footer;
