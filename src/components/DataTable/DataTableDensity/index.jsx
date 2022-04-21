import React from 'react';
import PropTypes from 'prop-types';
import DataIcon from '../../DataIcon';

/**
 * This component is the 'density' option selector for allowing the user to adjust the vertical spacing between the rows of data.
 */
const DataTableDensity = ({
  active,
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
          <button
            type="button"
            key={item.text}
            onClick={() => densityChange(item.value)}
            title={item.text}
            className={active === item.text ? 'active' : ''}
          >
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
    { icon: <DataIcon name="density-1" height={20} width={20} icon={'density-1'} fill="#666666" />, text: 'expanded' },
    { icon: <DataIcon name="density-2" height={20} width={20} icon={'density-2'} fill="#666666" />, text: 'normal' },
    { icon: <DataIcon name="density-3" height={20} width={20} icon={'density-3'} fill="#666666" />, text: 'tight' },
  ],
  className: 'data-table-density',
  screenReaderClass: 'sr-only sr-only-focusable',
  title: 'Display Density',
};

DataTableDensity.propTypes = {
  active: PropTypes.string,
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
