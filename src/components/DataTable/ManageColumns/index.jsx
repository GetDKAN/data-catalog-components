import React, { useContext, useEffect, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import Backend from 'react-dnd-html5-backend'
import update from 'immutability-helper'
import Card from './Card';

import { ResourceDispatch } from '../../../services/resource/resource_tools';
import Modal from '../../Modal';

const ManageColumns = () => {
  const { reactTable } = useContext(ResourceDispatch);
  const [cards, setCards] = React.useState(null);
  
  React.useEffect(() => {
    if(reactTable.allColumns.length && cards === null) {
      setCards(reactTable.allColumns)
    }
    console.log('eh', reactTable.allColumns)
  }, [reactTable.allColumns])
  console.log('fpp', cards)
  // const [cards, setCards] = React.useState(reactTable.allColumns);
  const moveCard = React.useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = reactTable.allColumns[dragIndex]

      setCards(update(cards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragCard],
        ],
      }));
    },
    [cards, reactTable.allColumns],
  );
  // reactTable.setColumnOrder(cards.map((d) => d.id));
  useEffect(() => {
    if (cards) {
      reactTable.setColumnOrder(cards.map((d) => d.id));
    }
  }, [cards]);
  const renderCard = (card, index) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        column={card}
        moveCard={moveCard}
      />
    );
  };
  return (
    <div>
      <Modal
        title="Manage Columns"
        nodeId="___gatsby"
      >
        <DndProvider backend={Backend}>
          <p>cards</p>
          {cards //renderCard(column, i))
            && cards.map((column, i) => renderCard(column, i))}
        </DndProvider>
      </Modal>
    </div>
  );
};

export default ManageColumns;
