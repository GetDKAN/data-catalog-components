/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

class StatBlock extends React.PureComponent {

  render() {
    const { content } = this.props;
    return (
      <Wrapper key={content.ref} className="stat-block">
        <i className={content.icon}></i>
        <h2>{content.title}</h2>
        <p>{content.content}</p>
      </Wrapper>
    )

  }
}

StatBlock.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
};

export default StatBlock
