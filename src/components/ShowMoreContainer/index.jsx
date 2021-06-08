import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ShowMoreContainer({
  container,
  items,
  limit,
  btnOpenText,
  btnClosedText,
  containerClasses,
  wrapperClasses,
  onMore,
  onLess
}) {
  const [showMore, toggleShowMore] = useState(false);

  let showMoreButton = (
    <button
      type="button"
      className="showmore-button"
      onClick={() => {
        if (onLess){
          onLess()
        }
        toggleShowMore(!showMore)
      }}
    >
      {btnOpenText || 'Show less'}
    </button>
  );
  const totalItems = items.length;

  const visibleItems = items.filter((item, index) => {
    if (!showMore && index >= limit) {
      return false;
    }
    return item;
  });
  const btnText = btnClosedText || `Show ${totalItems - visibleItems.length} more`;
  if (!showMore) {
    showMoreButton = (
      <button
        type="button"
        className="showmore-button"
        onClick={() => {
          if (onMore){
            onMore()
          }
          toggleShowMore(!showMore)
        }}
      >
        {btnText}
      </button>
    );
  }

  if ((totalItems - limit) <= 0) {
    showMoreButton = null;
  }

  switch (container) {
    case 'ol':
      return (
        <div className={wrapperClasses}>
          <ol className={containerClasses}>
            {visibleItems}
          </ol>
          {showMoreButton}
        </div>
      );
    case 'ul':
      return (
        <div className={wrapperClasses}>
          <ul className={containerClasses}>
            {visibleItems}
          </ul>
          {showMoreButton}
        </div>
      );
    case 'div':
    default:
      return (
        <div className={wrapperClasses}>
          <div className={containerClasses}>
            {visibleItems}
          </div>
          {showMoreButton}
        </div>
      );
  }
}

ShowMoreContainer.defaultProps = {
  btnOpenText: '',
  btnClosedText: '',
  limit: 10,
  container: 'div',
  containerClasses: 'show-more-container',
  wrapperClasses: 'show-more-wrapper',
};

ShowMoreContainer.propTypes = {
  container: PropTypes.oneOf(['div', 'ol', 'ul']),
  items: PropTypes.arrayOf(PropTypes.node).isRequired,
  limit: PropTypes.number,
  btnOpenText: PropTypes.string,
  btnClosedText: PropTypes.string,
  containerClasses: PropTypes.string,
  wrapperClasses: PropTypes.string,
};
