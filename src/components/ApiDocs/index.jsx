import React from "react";
import PropTypes from 'prop-types';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const ApiDocs = ({endpoint, uuid}) => {

  const url = uuid ? endpoint + "/" + uuid : endpoint;

  return (
    <SwaggerUI url={url} docExpansion="list" />
  );
};

ApiDocs.defaultProps = {
  endpoint: '',
  uuid: '',
};

ApiDocs.propTypes = {
  endpoint: PropTypes.string.isRequired,
  uuid: PropTypes.string,
};

export default ApiDocs;
