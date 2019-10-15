import React from 'react';
import PropTypes from 'prop-types';

const DataTableDensity = ({
  items, densityChange, wrapperClass, screenReaderClass,
}) => (
  <div className={wrapperClass}>
    Display density
    {items.map((item, index) => {
      let srClass = screenReaderClass;
      if (!item.icon) {
        srClass = '';
      }
      return (
        <button type="button" key={index} onClick={() => densityChange(index)}>
          {item.icon
            && (
              <>
                {item.icon}
              </>
            )}
          <span className={srClass}>{item.text}</span>
        </button>
      );
    })}
  </div>
);

DataTableDensity.defaultProps = {
  items: [
    { icon: null, text: 'expanded' },
    { icon: null, text: 'normal' },
    { icon: null, text: 'tight' },
  ],
  wrapperClass: 'dkan-data-table-density',
  screenReaderClass: 'sr-only sr-only-focusable',
}

DataTableDensity.propTypes = {
  densityChange: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    text: PropTypes.string
  })),
  screenReaderClass: PropTypes.string,
  wrapperClass: PropTypes.string,
  items: PropTypes.array,
}

export default DataTableDensity;
