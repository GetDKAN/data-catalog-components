/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';

class StepsBlock extends React.PureComponent {

  render() {
    const { content } = this.props;
    return (
      <div key={content.ref} className={"steps-block"}>
        <div className="steps-step">{content.step}</div>
        <h3>{content.title}</h3>
        <p>{content.content}</p>
      </div>
    )
  }
}

StepsBlock.propTypes = {
  step: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
};

export default StepsBlock
