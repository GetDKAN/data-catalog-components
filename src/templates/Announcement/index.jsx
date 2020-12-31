import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Announcement = ({
  heading, children, role, variation,
}) => {
  let icon;
  switch (variation) {
    case 'success':
      icon = 'check-circle';
      break;
    case 'warn':
      icon = 'exclamation-circle';
      break;
    case 'error':
      icon = 'times-circle';
      break;
    case 'info':
      icon = 'info-circle';
      break;
    default:
      icon = 'info-circle';
  }
  return (
    <div
      className={`dc-alert dc-alert--${variation}`}
      role={role}
    >
      {heading
        && (
        <h3>
          <FontAwesomeIcon
            icon={['fas', `${icon}`]}
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
