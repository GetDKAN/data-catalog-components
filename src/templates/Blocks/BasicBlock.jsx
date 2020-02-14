/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../components/Text';
import Wrapper from './Wrapper';

class BasicBlock extends React.PureComponent {
  render() {
    const { content } = this.props;

    return (
      <Wrapper key={content.ref} className="basic-block">
        <h2>{content.title}</h2>
        <Text value={content.content} />
      </Wrapper>
    )
  }
}

BasicBlock.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any,
};

export default BasicBlock
