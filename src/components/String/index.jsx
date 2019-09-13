/* eslint-disable */
/* Deprecated: use Text component */
import React from 'react';

function String(props) {
  const label = (props.label && props.label.length > 0) ? <strong>{props.label}:</strong> : '';
  return (
    <div>
    {label} {props.value}
    </div>
  );
}

export default String;
