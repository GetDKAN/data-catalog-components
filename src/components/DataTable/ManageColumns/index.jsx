import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import Card from './Card';

import { ResourceDispatch } from '../../../services/resource/resource_defaults';
import Modal from '../../Modal';

const defaultCard = (card, index, moveCard) => (
  <Card
    key={card.id}
    index={index}
    id={card.id}
    column={card}
    moveCard={moveCard}
  >
    <label htmlFor={card.id}>
      <input
        id={card.id}
        type="checkbox"
        {...card.getToggleHiddenProps()}
      />
      {' '}
      {card.Header}
    </label>
  </Card>
);

const ManageColumns = ({
  renderCard,
}) => {
  const { reactTable } = useContext(ResourceDispatch);
  const [cards, setCards] = useState(null);
  React.useEffect(() => {
    if (reactTable.allColumns.length && cards === null) {
      setCards(reactTable.allColumns);
    }
  }, [reactTable.allColumns]);
  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = reactTable.allColumns[dragIndex];

      setCards(update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      }));
    },
    [cards, reactTable.allColumns],
  );
  useEffect(() => {
    if (cards) {
      reactTable.setColumnOrder(cards.map((d) => d.id));
    }
  }, [cards]);

  return (
    <div>
      <Modal
        title="Manage Columns"
        nodeId="___gatsby"
        openText="Manage Columns"
      >
        <DndProvider backend={Backend}>
          {reactTable.allColumns
            && reactTable.allColumns.map((column, i) => renderCard(column, i, moveCard))}
        </DndProvider>
      </Modal>
    </div>
  );
};

ManageColumns.defaultProps = {
  renderCard: defaultCard,
};

ManageColumns.propTypes = {
  renderCard: PropTypes.func,
};

export default ManageColumns;

// Manage Columns - holds code
// -- Modal is launched from Manage Columns with cards
// -- -- Cards take children and Cards only adds the dnd feature
