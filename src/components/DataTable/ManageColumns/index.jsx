import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
      />
      {' '}
      {card.columnDef.header}
    </label>
  </Card>
);

const ManageColumns = ({
  renderCard,
}) => {
  const { reactTable } = useContext(ResourceDispatch);
  const [cards, setCards] = useState(null);
  React.useEffect(() => {
    if (reactTable.getAllColumns().length && cards === null) {
      setCards(reactTable.getAllColumns());
    }
  }, [reactTable.getAllColumns()]);
  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
      const newCards = cards.toSpliced(hoverIndex, 0, cards.splice(dragIndex,1)[0]);

      setCards(newCards);
    },
    [cards, reactTable.getAllColumns()],
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
        <DndProvider backend={HTML5Backend}>
          {cards
            && cards.map((column, i) => renderCard(column, i, moveCard))}
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
