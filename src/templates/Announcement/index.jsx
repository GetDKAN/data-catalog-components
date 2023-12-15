import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Announcement = ({
  heading, children, role, variation,
}) => {
  let iconCode;
  switch (variation) {
    case 'success':
      iconCode = 'check-circle';
      break;
    case 'warn':
      iconCode = 'exclamation-circle';
      break;
    case 'error':
      iconCode = 'circle-xmark';
      break;
    case 'info':
      iconCode = 'info-circle';
      break;
    default:
      iconCode = 'info-circle';
  }
  console.log(variation)
  return (
    <div
      className={`dc-alert dc-alert--${variation}`}
      role={role}
    >
      {heading
        && (
        <h3>
          <FontAwesomeIcon
            icon={icon({name: iconCode})}
            size="1x"
            aria-hidden="true"
            role="presentation"
          />
          {heading}
        </h3>
        )}
      {children}
    </div>
  );
};

Announcement.defaultProps = {
  heading: 'Announcement',
  role: 'alert',
  variation: null,
};

Announcement.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
  role: PropTypes.oneOf(['alert', 'alertdialog']),
  variation: PropTypes.oneOf(['error', 'warn', 'success', 'info']),
};

export default Announcement;
