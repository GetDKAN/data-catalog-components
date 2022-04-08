import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import TopicIcon from '../../templates/TopicIcon';

/**
 * This component imports another component called TopicIcon. TopicIcon will match the title value against the TopicIcon options and return an svg icon. To use a custom set of icons you can create a copy of this component that imports a different set of icons. Then call your custom component from the IconList component <IconList component={CustomComponent}. Or, if you rather use image files, use the "image" property to pass the url path to that image, it will be used as the src value in an <img/> element.
 */
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
  size: 22,
  color: '',
  identifier: '',
};

IconListItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  identifier: PropTypes.string,
};

export default IconListItem;
