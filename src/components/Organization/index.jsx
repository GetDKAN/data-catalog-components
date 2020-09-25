import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

function Organization(props) {
  const {
      name, description, key, imageUrl, searchUrl, alignment,
  } = props;
  const image = <img alt={name || 'Organization Image'} src={imageUrl} />;
  const link = searchUrl ? searchUrl : `search/?publisher__name=${name}`;

  return (
    <div className="dc-org-block" style={{ textAlign: alignment }}>
      <Link to={link} className="dc-org-image" alt="Organization Logo">
        {image}
        <h3 className="dc-org-name">
          {name}
        </h3>
      </Link>
      {description && (
        <div className="dc-org-description">
          {description}
        </div>
      )}
    </div>
  );
}

Organization.defaultProps = {
  alignment: 'center',
  name: '',
  description: '',
  key: '',
  imageUrl:
    'https://s3.amazonaws.com/dkan-default-content-files/files/group.png',
};

Organization.propTypes = {
  alignment: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  key: PropTypes.string,
  imageUrl: PropTypes.string,
  searchUrl: PropTypes.string,
};

export default Organization;
