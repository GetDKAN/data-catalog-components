import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menu from '../../components/Menu';

function Footer({
  links, customClasses,
}) {
  const menu1 = links ? <Menu items={links.footer1} menuId="leftnav" /> : null;
  const menu2 = links ? <Menu items={links.footer2} menuId="rightnav" /> : null;

  return (
    <div className="dc-footer">
      <div className={`${customClasses} page-footer`}>
        <div className="branding">
          <h2>Open Source Open Data</h2>
          <p>
            We can only realize the full power of open data when the tools used for its collection,
            publishing and analysis are also open and transparent.
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

Footer.defaultProps = {
  customClasses: '',
  links: null,
};

Footer.propTypes = {
  customClasses: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
  })),
};

export default Footer;
