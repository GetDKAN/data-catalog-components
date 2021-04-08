import React from 'react';
import PropTypes from 'prop-types';
import SwaggerUI from 'swagger-ui-react';

const ApiDocs = ({ endpoint, datasetID, authentication, expansion }) => {

  let url = `${endpoint}?authentication=${authentication}`
  if(datasetID) {
    url = `${endpoint}/metastore/schemas/dataset/items/${datasetID}/docs`
  }

  return <SwaggerUI url={url} docExpansion={expansion} />;
};

ApiDocs.defaultProps = {
  datasetID: '',
  authentication: false,
  expansion: 'list',
};

ApiDocs.propTypes = {
  endpoint: PropTypes.string.isRequired,
  authentication: PropTypes.bool,
  datasetID: PropTypes.string,
  expansion: PropTypes.oneOf(['list', 'full', 'none']),
};

export default ApiDocs;
