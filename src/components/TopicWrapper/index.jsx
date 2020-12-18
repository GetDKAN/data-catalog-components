import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const TopicWrapper = ({ component, topic }) => {
  const ComponentToRender = component;
  return (
    <Link
      className="dc-topic-wrapper"
      key={`dist-${topic}-${Math.random() * 10}`}
      to={`search?theme=${topic}`}
    >
      <ComponentToRender title={topic} height="16" width="16" />
      {topic}
    </Link>
  );
};

TopicWrapper.propTypes = {
  component: PropTypes.func.isRequired,
  topic: PropTypes.string.isRequired,
};
export default TopicWrapper;
