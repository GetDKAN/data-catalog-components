import React from 'react';
import PropTypes from 'prop-types';
import BasicBlock from './BasicBlock';

function Blocks({
  items, component, paneTitle, containerClass, blockClass,
}) {
  const Block = component || BasicBlock;

  if (paneTitle && items) {
    return (
      <div className={`${containerClass} ${blockClass}`}>
        <h2>{paneTitle}</h2>
        <div className="dc-block-content">
          {
            items.map((item) => {
              return <Block content={item} key={item.id} />;
            })
          }
        </div>
      </div>
    );
  }
  return (
    <div className={`${containerClass} ${blockClass}`}>
      <div className="dc-block-content">
        { items
          && items.map((item) => <Block content={item} key={item.id} />)}
      </div>
    </div>
  );
}

Blocks.defaultProps = {
  component: 'BasicBlock',
  containerClass: 'container',
  blockClass: 'BasicBlock',
  paneTitle: '',
};

Blocks.propTypes = {
  items: PropTypes.isRequired,
  component: PropTypes.string,
  containerClass: PropTypes.string,
  blockClass: PropTypes.string,
  paneTitle: PropTypes.string,
};

export default Blocks;
