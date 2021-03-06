import React from 'react';
import PropTypes from 'prop-types';
import Organization from '../Organization';

function PublisherList(props) {
  const {
    items, className, organizationEndpoint
  } = props;
  let content = (<div />);

  if (items) {
    content = props.items.map((item) => (
      <Organization
        name={item.name}
        key={item.identifier}
        imageUrl={item.imageUrl}
        description={item.description}
        organizationEndpoint={organizationEndpoint}
        searchUrl={item.searchUrl}
        alignment={item.alignment}
      />
    ));
  }

  return (
    <ul className={`dc-publisher-list ${className}`}>
      {content}
    </ul>
  );
}

PublisherList.defaultProps = {
  className: '',
};

PublisherList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    alignment: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    identifier: PropTypes.string,
    imageUrl: PropTypes.string,
    searchUrl: PropTypes.string,
    organizationEndpoint: PropTypes.string,
  })).isRequired,
  className: PropTypes.string,
};

export default PublisherList;
