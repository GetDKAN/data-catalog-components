import React from 'react';
import PropTypes from 'prop-types';
import Organization from "../Organization";

function PublisherList(props) {
  let content = (<div></div>);
  const custom = 'className' in props ? props.className : "";

  if (props.items) {
    content = props.items.map((item) => (
      <Organization
        name={item.name}
        identifier={item.identifier}
        imageUrl={item.imageUrl}
        description={item.description}
        searchUrl={item.searchUrl}
      />
    ));
  }

  return (
    <ul className={`dc-publisher-list ${custom}`}>
      {content}
    </ul>
  );
}

PublisherList.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
};

export default PublisherList;
