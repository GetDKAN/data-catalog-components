/* eslint-disable */
import React from 'react';

function Tags(props) {
  const label = props.label ? <h3>{props.label}</h3> : '';
  const tags = props.tags.map((tag) => {
    const ref = `{${props.path}${tag.data}`;
    return (
      <div className="dc-tag" key={tag.identifier}>
        <a href={ref}> {tag.data} </a>
      </div>
    );
  }, '<div></div>');

  return (
    <div className="dc-tag-wrapper">
      {label} {tags}
    </div>
  );
}

export default Tags;
