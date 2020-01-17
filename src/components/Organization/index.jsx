import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 1em;
  position: relative;
  text-align: center;
  border: 1px solid ${props => props.theme.borderColor};
  margin-bottom: 32px;
  background: #fff;
  img {
    max-width: 120px;
  }
  h3.org-name {
    margin: 15px 0;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.linkColor};
    &:hover {
      color: ${props => props.theme.linkHoverColor};
    }
  }
  img {
    max-width: 100%;
  }
`;

function Organization(props) {
  const { name, description, identifier, imageUrl } = props;
  const image = <img alt={name || "Organization Image"} src={imageUrl} />;

  const link = `search?publisher=${identifier}`;

  return (
    <Wrapper>
      <div className="org-image" alt="Organization Logo">
        {image}
      </div>
      <h3 className="org-name">{name}</h3>
      {description}
    </Wrapper>
  );
}

Organization.defaultProps = {
  name: "",
  description: "",
  identifier: "",
  imageUrl:
    "https://s3.amazonaws.com/dkan-default-content-files/files/group.png"
};

Organization.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  identifier: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Organization;
