import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Announcement = ({
  icon, heading, children, role, variation,
}) => {
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
    default:
      icon = 'info-cirlce';
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
  icon: '',
  heading: 'Announcement',
  role: 'alert',
  variation: '',
};

Announcement.propTypes = {
  icon: PropTypes.string,
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
  role: PropTypes.oneOf(['alert', 'alertdialog']),
  variation: PropTypes.oneOf(['error', 'warn', 'success', 'info']),
};

export default Announcement;
