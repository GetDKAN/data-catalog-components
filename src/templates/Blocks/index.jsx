/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import BasicBlock from './BasicBlock';

class Blocks extends React.PureComponent {

  render() {
    const { items } = this.props;
    const Block = this.props.component;
    let paneTitle = this.props.paneTitle;

    if (paneTitle) {
      return (
        <div className={'container-fluid ' + this.props.className}>
          <h2>{paneTitle}</h2>
          <div className="dc-block-content">
            {
              this.props.items.map(function(item, index){
                return <Block content={item} key={index} />;
              })
            }
          </div>
        </div>
      );
    }
    else {
      return (
        <div className={'container-fluid ' + this.props.className}>

          <div className="dc-block-content">
            {
              this.props.items.map(function(item, index){
                return <Block content={item} key={index} />;
              })
            }
          </div>
        </div>
      )
    }
  }
}

Blocks.defaultProps = {
  items: [],
  component: BasicBlock,
  className: 'BasicBlock'
};

Blocks.propTypes = {
  items: PropTypes.array,
  component: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default Blocks
