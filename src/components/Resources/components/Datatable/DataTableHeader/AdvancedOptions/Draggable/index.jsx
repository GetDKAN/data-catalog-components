import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';
import DraggableArea from '../DraggableArea';

const Draggable = ({onchange, excludedColumns, children, movecard, ondrop}) => (
  <div>
    <DraggableArea
      onchange={onchange}
      excludedColumns={excludedColumns}
      items={children}
      moveCard={movecard}
      onDrop={ondrop}
    />
  </div>
);

Draggable.propTypes = {
  onchange: PropTypes.func.isRequired,
  movecard: PropTypes.func.isRequired,
  ondrop: PropTypes.func.isRequired,
  excludedColumns: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}


export default DragDropContext(MultiBackend(HTML5toTouch))(Draggable);
