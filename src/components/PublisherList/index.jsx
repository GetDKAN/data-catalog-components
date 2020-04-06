import React from 'react';
import PropTypes from 'prop-types';
import Organization from "../Organization";

function PublisherList(props) {
  let content = (<div></div>);

  if (props.items) {
    content = props.items.map((item) => (
        <Organization
          name={item.name}
          key={item.identifier}
          imageUrl={item.image}
          description={item.description}
        />
    ));
  }

  return (
    <ul className={`dc-publisher-list ${className}`}>
      {content}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.array,
  className: PropTypes.string,
};

export default PublisherList;
