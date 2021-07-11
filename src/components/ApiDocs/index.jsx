import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const ApiDocs = ({ endpoint, uuid }) => {
  const url = uuid ? `${endpoint}/${uuid}` : endpoint;
  return typeof window === 'undefined'
    ? null
    : <SwaggerUI url={url} docExpansion="list" defaultModelsExpandDepth="-1" />;
};

ApiDocs.defaultProps = {
  uuid: '',
};

ApiDocs.propTypes = {
  endpoint: PropTypes.string.isRequired,
  uuid: PropTypes.string,
};

export default ApiDocs;
