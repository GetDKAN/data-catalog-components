import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DropTarget, DragSource } from 'react-dnd';
import styled from 'styled-components';

const ItemControl = styled.span`
  position: absolute;
  right: 25%;
  top: 0;
  &:after {
    content: "\\f0dc";
    color: ${props => props.theme.textColor};
    font-family: "FontAwesome";
    position: absolute;
    top: 0;
    right: 24px;
    }
`;

class DraggableItem extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      onHover: false,
    }
  }

  componentDidMount() {
    this.props.connectDragPreview(this.myRef.current)
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.isOver && this.props.isOver) {
      // You can use this as enter handler
      this.setState({
        onHover: true
      })
    }

    if (prevProps.isOver && !this.props.isOver) {
      // You can use this as leave handler
      this.setState({
        onHover: false
      })
    }
  }

  render() {
    const { item, onchange, isVisible, onHoverBGColor, onHoverBoxShadow } = this.props;
    return(
      this.props.connectDropTarget(
        this.props.connectDragSource(
          <div style={{
            borderBottom: "1px solid #ccc",
            boxShadow: this.props.isDragging === true ? onHoverBoxShadow : "none",
            position: 'relative',
            cursor: this.props.isDragging === true ? "grabbing" : "grab",
            background: this.state.onHover ?  onHoverBGColor : 'transparent',
            display: 'block',
            height: '100%',
            padding: '8px 24px'
          }} >
          <span style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '10px',
            width: '20px',
            height: '20px',
            display: 'block',
            zIndex: '5'
          }}>
            <ItemControl />
          </span>
          <label>
            <input
              defaultChecked={isVisible}
              type='checkbox'
              value={item.accessor}
              onChange={onchange}
            />
            <span ref={this.myRef}>{item.Header}</span>
          </label>
        </div>
    )));
  }
}

DraggableItem.defaultProps = {
  onHoverBGColor: 'rgba(0,0,0,0.3)',
  onHoverBoxShadow: '2px 2px 2px rgba(0,0,0,.5)'
}

DraggableItem.propTypes = {
  onHoverBGColor: PropTypes.string,
  onHoverBoxShadow: PropTypes.string,
  onchange: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  moveCard: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  isOver: PropTypes.bool.isRequired,
  isDragging: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  connectDragPreview: PropTypes.func,
  connectDragSource: PropTypes.func,
  connectDragTarget: PropTypes.func,
}

export default DropTarget(
  'ITEM', 
  {
    drop(props, monitor, component){
        const item = monitor.getItem()
        const newIndex = props.index;
        const oldIndex = item.index;
        props.moveCard(oldIndex, newIndex)
        return item;
    },
    
  },
  (connect, monitor)=>{
  return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver()
    };
  }
  )(
    DragSource(
      'ITEM',
      {
        beginDrag(props, monitor, collect){
          const item = {
            ...props
          }
          return item;
        }
      },
      (connect, monitor) => {
        return {
          connectDragSource: connect.dragSource(),
          connectDragPreview: connect.dragPreview(),
          isDragging: monitor.isDragging(),
        };
      }
    )(DraggableItem)
  )
  