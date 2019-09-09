import React from "react";
import PropTypes from "prop-types";

const Copyright = ({ copyright, link, clickable }) => (
  <div className="copyright">
    {`${copyright} `}
    <a href={link}>{clickable}</a>
  </div>
);

Copyright.defaultProps = {
  copyright: "Powered by ",
  clickable: "DKAN",
  link: "http://getdkan.com"
};

Copyright.propTypes = {
  copyright: PropTypes.string,
  clickable: PropTypes.string,
  link: PropTypes.string
};

export default Copyright;



