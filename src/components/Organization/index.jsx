import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, navigate } from "@reach/router";
import Card from "../Card";

const Organization = ({
  buttonText,
  className,
  org,
  isCard,
  headingClassName,
}) => {
  const { name, description, searchUrl, imageUrl } = org;
  const defaultImage =
    "https://s3.amazonaws.com/dkan-default-content-files/files/group.png";
  const image = (
    <img src={imageUrl ? imageUrl : defaultImage} alt={`${name} Logo`} />
  );
  if (isCard) {
    return (
      <Card
        className="usa-card"
        headingText={name}
        bodyText={description}
        buttonText={buttonText ? buttonText : `Search ${name}`}
        buttonAction={() => navigate(searchUrl)}
        media={image}
      />
    );
  }
  return (
    <div className={className}>
      <Link to={searchUrl} title={buttonText ? buttonText : `Search ${name}`}>
        {image}
        <h2 className={headingClassName}>{name}</h2>
      </Link>
      {description && <div>{description}</div>}
    </div>
  );
};

export const countDatasetsByName = (publisher, datasets) => {
  const publishers = datasets.map((data, index, arr) => {
    return data.publisher;
  });
  const result = publishers.filter((p) => {
    return p.name === publisher;
  });
  if (typeof result !== "undefined" && result.length) {
    return result.length;
  }
  return null;
};

Organization.defaultProps = {
  description: "",
  isCard: false,
  className:
    "grid-col radius-md border-2px border-base-lighter padding-2 bg-white",
  headingClassName: "font-heading-lg",
  buttonText: null,
};

Organization.propTypes = {
  /**
   * The classes used on non card versions. Card versions are set with USWDS classes.
   */
  className: PropTypes.string,
  /**
   * The class for the h2 wrapper.
   */
  headingClassName: PropTypes.string,
  /**
   * Setting true will return a list item card version of the org with a button, false will return just a div that has a clickable icon.
   */
  isCard: PropTypes.bool,
  /**
   * This is the content of the component. imageUrl are not required, but most organizations will have an icon to use. The search url should be a relative link starting with /.
   */
  org: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.node.isRequired,
    searchUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
  }).isRequired,
  /**
   * The content of the button.
   */
  buttonText: PropTypes.node,
};

export default Organization;
