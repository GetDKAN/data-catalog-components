import React from "react";
import PropTypes from "prop-types";
import { Parser } from "html-to-react";

const Text = ({ label, value, children, wrapper }) => {
  const parser = new Parser();
  const { tag, classes } = wrapper;
  const TextWrapper = () => {
    if (tag) {
      const TagElement = `${tag}`;
      return (
        <TagElement className={classes}>
          {label && <strong>{`${label}: `}</strong>}
          {value ? parser.parse(value) : children}
        </TagElement>
      );
    }
    return (
      <>
        {label && <strong>{`${label}: `}</strong>}
        {value ? parser.parse(value) : children}
      </>
    );
  };
  return <TextWrapper />;
};

Text.defaultProps = {
  label: ``,
  value: ``,
  children: ``,
  wrapper: {}
};

Text.propTypes = {
  // Text in strong tag followed by semi colon.
  label: PropTypes.string,
  // The content of the Text component after the label.
  // Will be required in future versions.
  children: PropTypes.node,
  // If classes are added, will wrap text in div with classes.
  wrapper: PropTypes.shape({
    tag: PropTypes.string,
    classes: PropTypes.string
  }),
  // Deprecated way to pass markup to the Text component.
  value: PropTypes.string
};

export default Text;