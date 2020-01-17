/* eslint-disable */

import React from "react";
import PropTypes from "prop-types";

import Ul from "./Ul";

function List(props) {
  const ComponentToRender = props.component;
  let content = <div></div>;

  // If we have items, render them
  if (props.items) {
    content = props.items.map(item => (
      <ComponentToRender key={`item-${item.ref}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return <Ul className={props.className}>{content}</Ul>;
}

List.propTypes = {
  component: PropTypes.func.isRequired,
  items: PropTypes.array,
  className: PropTypes.string
};

export default List;
