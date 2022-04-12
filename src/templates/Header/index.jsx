import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';

const Header = ({
  link, logo, site, slogan, customClasses, navItems,
}) => (
  <div className="dc-header">
    <div className={customClasses}>
      <div className="branding">
        <Link to={link} className="dc-logo">
          <img src={logo} alt="Open Data Catalog" />
        </Link>
        <div className="dc-site-name">
          {site
                && <Link to={link}>{site}</Link>}
          {slogan
                && (
                <div className="dc-slogan">
                  {slogan}
                </div>
                )}
        </div>
      </div>
    </div>
    {navItems
          && <NavBar navItems={navItems} className={customClasses} />}
  </div>
);

Header.defaultProps = {
  customClasses: null,
  link: '/',
  logo: 'https://dkan-default-content-files.s3.amazonaws.com/files/logo.svg',
  site: '',
  slogan: '',
};

Header.propTypes = {
  customClasses: PropTypes.string,
  link: PropTypes.string,
  logo: PropTypes.string,
  site: PropTypes.string,
  slogan: PropTypes.string,
  navItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

export default Header;
