import React from 'react';
import PropTypes from 'prop-types';

const DataTableDensity = ({
  items,
  densityChange,
  className,
  screenReaderClass,
  title,
}) => (
  <div className={className}>
    <span className="density-buttons-title">{title}</span>
    <div className="density-buttons">
      {items.map((item) => {
        let srClass = screenReaderClass;
        if (!item.icon) {
          srClass = '';
        }
        return (
          <button type="button" key={item.text} onClick={() => densityChange(item.value)}>
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
  </div>
);

DataTableDensity.defaultProps = {
  items: [
    { icon: null, text: 'expanded', value: 'density-1' },
    { icon: null, text: 'normal', value: 'density-2' },
    { icon: null, text: 'tight', value: 'density-3' },
  ],
  className: 'data-table-density',
  screenReaderClass: 'sr-only sr-only-focusable',
  title: 'Display Density',
};

DataTableDensity.propTypes = {
  densityChange: PropTypes.func.isRequired,
  screenReaderClass: PropTypes.string,
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    text: PropTypes.string,
  })),
  title: PropTypes.string,
};

export default DataTableDensity;
