import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ToggleBlock({
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
        <button type="button" onClick={() => toggleShow(!show)}>
          {title}
        </button>
      </h2>
    );
  }
  return (
    <div className={`${className} ${show ? 'open' : 'closed'}`}>
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
  allowToggle: true,
  headingClasses: 'toggle-block-title',
  innerClasses: 'toggle-block-inner',
  className: 'toggle-block',
  defaultClosed: false,
};

ToggleBlock.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  headingClasses: PropTypes.string,
  innerClasses: PropTypes.string,
  allowToggle: PropTypes.bool,
  className: PropTypes.string,
  defaultClosed: PropTypes.bool,
};
