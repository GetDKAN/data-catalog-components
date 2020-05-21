import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import TopicIcon from '../../templates/TopicIcon';

function IconListItem({
  image, link, title, size, color, identifier,
}) {
  let content = '';

  if (image) {
    // Image provided as a url.
    content = (
      <Link to={link} className="dc-icon-link">
        <img src={image} alt={title} />
        <div>{title}</div>
      </Link>
    );
  } else {
    // Image provided by custom component.
    content = (
      <Link to={link} className="dc-icon-link">
        <TopicIcon
          title={title}
          size={size}
          fill={color}
        />
        <div>{title}</div>
      </Link>
    );
  }

  return (
    <li key={identifier}>{content}</li>
  );
}

IconListItem.defaultProps = {
  link: '',
  image: '',
  size: '',
  color: '',
  identifier: '',
};

IconListItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  identifier: PropTypes.string,
};

export default IconListItem;
