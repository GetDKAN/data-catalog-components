/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';

class StatBlock extends React.PureComponent {

  render() {
    const { content } = this.props;
    return (
      <div key={content.ref} className="stat-block">
        <i className={content.icon}
          aria-hidden="true"
          role="presentation"
        />
        <h2>{content.title}</h2>
        <p>{content.content}</p>
      </div>
    )

  }
}

StatBlock.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any,
};

export default StatBlock
