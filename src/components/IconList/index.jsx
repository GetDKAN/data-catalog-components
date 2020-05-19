import React from 'react';
import PropTypes from 'prop-types';

function IconList({
  items, component, containerClass, listClass, paneTitle, titleAlign,
}) {
  const ComponentToRender = component;
  let content = (<div />);
  const styles = {
    textAlign: titleAlign,
  };

  // If we have items, render them
  if (items) {
    content = items.map((item, i) => (
      <ComponentToRender
        key={i}
        title={item.title}
        image={item.image}
        link={item.ref}
        color={item.color}
        size={item.size}
        index={i}
      />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  if (paneTitle) {
    return (
      <div className={`dc-icon-list  ${containerClass}`}>
        <h2 className="pane-title" style={styles}>{paneTitle}</h2>
        <ul className={listClass}>
          {content}
        </ul>
      </div>
    );
  }
  return (
    <div className={'dc-icon-list  {containerClass}'}>
      <ul className={listClass}>
        {content}
      </ul>
    </div>
  );
}

IconList.defaultProps = {
  listClass: 'dc-list',
  containerClass: 'container',
  paneTitle: '',
  titleAlign: '',
};

IconList.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    image: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    identifier: PropTypes.string,
  })).isRequired,
  listClass: PropTypes.string,
  containerClass: PropTypes.string,
  paneTitle: PropTypes.string,
  titleAlign: PropTypes.string,
};

export default IconList;
