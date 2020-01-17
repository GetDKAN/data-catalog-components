import React from "react";
import PropTypes from "prop-types";
import { DropTarget } from "react-dnd";
import DraggableItem from "../DraggableItem";

const DraggableArea = ({
  onchange,
  items,
  excludedColumns,
  connectDropTarget,
  moveCard,
  itemClasses
}) =>
  connectDropTarget(
    <fieldset className="target">
      {items.map((item, index) => (
        <DraggableItem
          moveCard={moveCard}
          key={item.accessor}
          index={index}
          item={item}
          onchange={onchange}
          isVisible={!!excludedColumns[item.accessor]}
          labelClass={itemClasses.label}
          inputClass={itemClasses.input}
        />
      ))}
    </fieldset>
  );

const spec = {
  drop(props, monitor) {
    const item = monitor.getItem();
    props.onDrop(item);
    return item;
  }
};
const collect = connect => ({
  connectDropTarget: connect.dropTarget()
});

DraggableArea.propTypes = {
  onchange: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  excludedColumns: PropTypes.objectOf(PropTypes.bool).isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  itemClasses: PropTypes.shape({
    input: PropTypes.string,
    label: PropTypes.string
  }).isRequired
};

export default DropTarget("form-elements", spec, collect)(DraggableArea);
