import React from 'react';
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

export default TopicWrapper;
