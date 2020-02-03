import React from 'react';
import PropTypes from 'prop-types';

function IconList(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);
  let styles = {
    textAlign: props.titleAlign
  };
  
  // If we have items, render them
  if (props.items) {
      content = props.items.map((item, i) => (
          <ComponentToRender key={i} 
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

  if (props.paneTitle) {
    return (
      <div className={`dc-icon-list  {$props.containerClass}`}>
        <h2 className="pane-title" style={styles}>{ props.paneTitle }</h2>
        <ul className={ props.listClass }>
          {content}
        </ul>
      </div>
    );
  }
  else {
    return (
      <div className={`dc-icon-list  {$props.containerClass}`}>
        <ul className={ props.listClass }>
          {content}
        </ul>
      </div>
    );
  }
}

IconList.defaultProps = {
  items: [],
  className: "icon-list",
  paneTitle: "Icon List"
};

IconList.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
  listClass: PropTypes.string,
  containerClass: PropTypes.string,
  paneTitle: PropTypes.string,
  titleAlign: PropTypes.string
};

export default IconList;
