import React from 'react';
import PropTypes from 'prop-types';

const Tags = ({ tags, label, path }) => {
  const heading = label ? <h3>{label}</h3> : '';
  const tagsList = tags.map((tag) => {
    const ref = `${path}${tag.data}`;
    return (
      <div className="dc-tag" key={tag.identifier}>
        <a href={ref}>
          {tag.data}
        </a>
      </div>
    );
  }, '<div></div>');

  return (
    <div className="dc-tag-wrapper">
      {heading}
      {' '}
      {tagsList}
    </div>
  );
};

Tags.defaultProps = {
  label: null,
};

Tags.propTypes = {
  label: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string.isRequired,
};

export default Tags;
