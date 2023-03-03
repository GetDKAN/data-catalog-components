import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ToggleBlock({
  customId,
  className,
  title,
  children,
  headingClasses,
  innerClasses,
  allowToggle,
  defaultClosed,
}) {
  const [show, toggleShow] = useState(!defaultClosed);
  let toggleBlockHeading = <h2 className={headingClasses}>{title}</h2>;
  if (allowToggle) {
    toggleBlockHeading = (
      <h2 className={headingClasses}>
        <button type="button" onClick={() => toggleShow(!show)} aria-expanded={show}>
          <FontAwesomeIcon
              icon={['fas', show ? 'chevron-down' : 'chevron-right' ]}
              size="1x"
              aria-hidden="true"
              role="presentation"
          />
          {title}
        </button>
      </h2>
    );
  }
  return (
    <div id={customId} className={`${className} ${show ? 'open' : 'closed'}`}>
      {toggleBlockHeading}
      {show
        && (
          <div className={innerClasses}>
            {children}
          </div>
        )}
    </div>
  );
}

ToggleBlock.defaultProps = {
  customId: undefined,
  allowToggle: true,
  headingClasses: 'toggle-block-title',
  innerClasses: 'toggle-block-inner',
  className: 'toggle-block',
  defaultClosed: false,
};

ToggleBlock.propTypes = {
  customId: PropTypes.string,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  headingClasses: PropTypes.string,
  innerClasses: PropTypes.string,
  allowToggle: PropTypes.bool,
  className: PropTypes.string,
  defaultClosed: PropTypes.bool,
};
