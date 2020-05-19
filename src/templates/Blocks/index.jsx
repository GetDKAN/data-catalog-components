import React from 'react';
import PropTypes from 'prop-types';

function Blocks({
  items, component, paneTitle, containerClass, blockClass,
}) {
  const Block = component;

  if (paneTitle) {
    return (
      <div className={`${containerClass} ${blockClass}`}>
        <h2>{paneTitle}</h2>
        <div className="dc-block-content">
          {
            items.map((item, index) => {
              return <Block content={item} key={index} />;
            })
          }
        </div>
      </div>
    );
  }
  return (
    <div className={`${containerClass} ${blockClass}`}>
      <div className="dc-block-content">
        {
          items.map((item, index) => {
            return <Block content={item} key={index} />;
          })
        }
      </div>
    </div>
  );
}

Blocks.defaultProps = {
  containerClass: 'container',
  blockClass: 'BasicBlock',
  paneTitle: '',
};

Blocks.propTypes = {
  items: PropTypes.isRequired,
  component: PropTypes.func.isRequired,
  containerClass: PropTypes.string,
  blockClass: PropTypes.string,
  paneTitle: PropTypes.string,
};

export default Blocks;
