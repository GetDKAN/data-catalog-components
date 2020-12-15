import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import Text from '../../components/Text';

class BasicBlock extends React.PureComponent {
  render() {
    const { content } = this.props;
    const img = content.image ? <div><img alt="" src={content.image} /></div> : null;

    return (
      <div key={content.ref} className="basic-block">
        <h2>
          <Link to={content.ref}>
            {img}
            {content.title}
          </Link>
        </h2>
        <Text value={content.content} />
      </div>
    );
  }
}

BasicBlock.defaultProps = {
  title: '',
  content: '',
  image: '',
};

BasicBlock.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
};

export default BasicBlock;
