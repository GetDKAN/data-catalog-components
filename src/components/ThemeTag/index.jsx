/* eslint-disable */
import React from "react";
import styled from "styled-components";

function ThemeTag(props) {
  const Wrapper = styled.div`
    margin: 20px 0;
  `;

  //const label = props.label ? <strong>{props.label}:</strong> : '';
  console.log(props);
  return (
    <Wrapper
      className="theme-tag-wrapper"
      key={`dist-${topic.identifier}-${i}`}
    >
      <TopicImage title={topic.title} height="16" width="16" fill="#A7AAAC" />
      {topic.title}
    </Wrapper>
  );
}

export default Tags;
