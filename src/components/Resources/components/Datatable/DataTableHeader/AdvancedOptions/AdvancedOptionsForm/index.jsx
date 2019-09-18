import React from 'react';
import _ from 'lodash';
import Draggable from '../Draggable';

class AdvancedOptionsForm extends React.Component {
  constructor(props) {
    super(props);
    let {excludedColumns, columnOrder} = props;

    if (Object.keys(excludedColumns).length === 0 && excludedColumns.constructor === Object) {
      this.props.columns.map(column => {
        const columnKey = column.accessor;
        excludedColumns[columnKey] = true;
        return excludedColumns;
      })
    }

    if (columnOrder.length === 0) {
      columnOrder = this.props.columns
    }
    this.state = {
      excludedColumns: excludedColumns,
      columnOrder: columnOrder
    }

    this.onDrop = this.onDrop.bind(this);
    this.moveCard = this.moveCard.bind(this);
    this.handleColumnChange = this.handleColumnChange.bind(this);
  }

  onDrop(draggableItem){
    const columnOrder = _.concat([], this.state.columnOrder, draggableItem)
    this.setState(prevState => {
      return ({
        columnOrder: columnOrder
      })
    }, () => this.props.reorderColumns(this.state.columnOrder));
  }

  moveCard(oldIndex, newIndex){
    const columnOrder = _.concat([], this.state.columnOrder)
    _.remove(columnOrder, function(n,index) {
      if(index === oldIndex){
        return true
      }
      return false
    });
    const componentToMove = this.state.columnOrder[oldIndex];
    if(oldIndex < newIndex){
      // 2 to 4
      const modifiedNewIndex = newIndex;
      columnOrder.splice(modifiedNewIndex,0,componentToMove)
    }else if(oldIndex > newIndex){
      // 4 to 2
      columnOrder.splice(newIndex,0,componentToMove)
    }else if(oldIndex === newIndex){
      return;
    }
    this.setState(prevState => {
      return ({
        columnOrder: columnOrder
      })
    }, () => this.props.reorderColumns(this.state.columnOrder));
  }

  handleColumnChange(event) {
    const target = event.target;
    const value = target.value;
    this.setState(prevState => {
      return ({
        excludedColumns: {
          ...prevState.excludedColumns,
          [value]: !prevState.excludedColumns[value]
        }
      })
    }, () => this.props.toggleColumns(this.state.excludedColumns));
    
  }

  render() {
    const { excludedColumns, columnOrder } = this.state;
    return(
      <div className={`advanced_table_setting_modal`}>
        {this.props.columns &&
          <form>
            <Draggable 
              ondrop={this.onDrop}
              movecard={this.moveCard}
              onchange={this.handleColumnChange}
              excludedColumns={excludedColumns}
            >
              {columnOrder}
            </Draggable>
          </form>
        }
    </div>
    );
  }
}

export default AdvancedOptionsForm;
