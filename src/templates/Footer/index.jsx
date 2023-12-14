import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Menu from '../../components/Menu';

library.add(fab);

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
            Powered by <a href="https://github.com/getdkan">DKAN</a>
            <a href="https://github.com/getdkan" className="social">
              <FontAwesomeIcon
                icon={['fab', 'github']}
                size="1x"
                aria-hidden="true"
                role="presentation"
              />
              <span className="sr-only">Github</span>
            </a>
          </p>
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

const footerPropType = PropTypes.arrayOf(PropTypes.shape({
  label: PropTypes.string,
  url: PropTypes.string,
  target: PropTypes.string,
}));

Footer.propTypes = {
  customClasses: PropTypes.string,
  links: PropTypes.shape({
    main: footerPropType,
    footer1: footerPropType,
    footer2: footerPropType
  })
};

export default Footer;
