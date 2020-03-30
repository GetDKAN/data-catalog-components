/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StatBlock extends React.PureComponent {

  render() {
    const { content } = this.props;
    console.log(content.icon);
    return (
      <div key={content.ref} className="stat-block">
        <FontAwesomeIcon
          icon={content.icon}
          size="4x"
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
