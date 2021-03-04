import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import validator from 'validator';

const DynamicLink = ({url, content, cue}) => {
  if(validator.isURL(url, { require_protocol: true })) {
    return (
      <a
        className={''}
        href={url}
      >
        {content}
        {cue
          && (
            cue
          )
        }
      </a>
    )
  }
  return(
    <Link
      className={''}
      to={url}
    >
      {content}
    </Link>
  );
}

DynamicLink.defaultProps = {
  cue: undefined,
}

DynamicLink.propTypes = {
  url: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  cue: PropTypes.node,
}

export default DynamicLink;