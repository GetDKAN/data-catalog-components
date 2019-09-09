import React from "react";
import PropTypes from "prop-types";

const Title = ({ headerLevel, title, classes }) => {
  const HeaderLevel = `${headerLevel}`;
  return <HeaderLevel className={classes}>{title}</HeaderLevel>;
};

Title.defaultProps = {
  headerLevel: `h1`
};

Title.propTypes = {
  // Defaults to h1, but any level can be passed to the component.
  headerLevel: PropTypes.oneOf([`h1`, `h2`, `h3`, `h4`, `h5`, `h6`]),
  // The text used in the header.
  title: PropTypes.string.isRequired,
  classes: PropTypes.string
};

export default Title;