import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import DraggableItem from '../DraggableItem';

const DraggableArea = ({
  onchange,
  items,
  excludedColumns,
  connectDropTarget,
  moveCard,
  onDrop
}) => (
  connectDropTarget(
    <fieldset className="target">
      {items.map((item, index) => {
        return (
          <DraggableItem
            moveCard={moveCard}
            onDrop={onDrop}
            key={item.accessor}
            index={index}
            item={item}
            onchange={onchange}
            isVisible={!!excludedColumns[item.accessor]}
          />
        )
      })}
    </fieldset>
  )
  
);

const spec = {
  drop(props, monitor, component){
    const item = monitor.getItem()
    props.onDrop(item)
    return item;
  }
}
const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

DraggableArea.propTypes = {
  onchange: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  excludedColumns: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  connectDropTarget: PropTypes.func.isRequired
}

export default DropTarget('form-elements', spec, collect)(DraggableArea);
