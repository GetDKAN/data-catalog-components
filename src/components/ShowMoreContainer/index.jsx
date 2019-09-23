import React from 'react';

export default function ShowMoreContainer({
  container, items, limit, btnOpenText, btnClosedText
}) {
  const [showMore, toggleShowMore] = useState(false);
  
  let showMoreButton = (
    <button 
      className="showmore-button"
      onClick={() => toggleShowMore(!showMore)}
    >
      {btnOpenText}
    </button>
  );
  const totalItems = items.length;

  const visibleItems = items.filter((item, index) => {
    if (!showMore && index >= limit) {
      return false;
    }
    return item;
  });
  const btnText = btnClosedText ? btnClosedText : `Show ${totalItems - visibleItems.length} more`;
  if (!showMore) {
    showMoreButton = (
      <button
        className="showmore-button"
        onClick={() => toggleShowMore(!showMore)}
      >
        {btnText}
      </button>
    );
  }

  if ((totalItems - limit) <= 0) {
    showMoreButton = null;
  }

  if (container === 'ol') {
    return (
      <ol>
        {visibleItems}
        {showMoreButton}
      </ol>
    );
  }

  if (container === 'ul') {
    return (
      <ul>
        {visibleItems}
        {showMoreButton}
      </ul>
    );
  }

  return (
    <div>
      {visibleItems}
      {showMoreButton}
    </div>
  );
}

ShowMoreContainer.defaultProps = {
  btnOpenText: 'Show less',
  btnClosedText: '',
};
