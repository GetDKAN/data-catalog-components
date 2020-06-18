import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const Logo = ({ image }) => (
  <Link to="/" className="dc-logo">
    <img src={image} alt="Open Data Catalog" />
  </Link>
);

Logo.defaultProps = {
  image: 'https://dkan-default-content-files.s3.amazonaws.com/files/logo.svg'
};

Logo.propTypes = {
  image: PropTypes.string,
};

export default Logo;
