import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import validator from "validator";

const DynamicLink = ({ url, content, cue, className }) => {
  if (validator.isURL(url, { require_protocol: true })) {
    return (
      <a className={className} href={url}>
        {content}
        {cue && cue}
      </a>
    );
  }
  return (
    <Link className={className} to={url}>
      {content}
    </Link>
  );
};

DynamicLink.defaultProps = {
  cue: undefined,
  className: "",
};

DynamicLink.propTypes = {
  url: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  cue: PropTypes.node,
  className: PropTypes.string,
};

export default DynamicLink;
