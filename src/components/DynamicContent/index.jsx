import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { navigate } from '@reach/router';
import DynamicContext from '../../services/dynamic_content/dynamic_content';

const DynamicContent = ({
  children,
  item,
  apiPrefix,
  apiSuffix,
  id,
  dynamicCallback,
  updateContent,
  nodeType,
  buildDate,
}) => {
  const [content, setContent] = useState(item);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const apiUrl = `${apiPrefix}/${id}/${apiSuffix}`;
  const jsonApiUrl = `${process.env.DRUPAL_API_URL}/node/${nodeType}/${id}`;

  useEffect(() => {
    async function getDynamicContent() {
      await axios.get(apiUrl)
        .then((response) => {
          setContent(response.data);
          setLoading(false);
          dynamicCallback(response.data);
        })
        .catch(() => {
          setNotFound(true);
          setLoading(false);
          navigate('/404');
        });
    }

    async function checkForNewContent() {
      await axios.get(jsonApiUrl)
        .then((response) => {
          if (response.data.data) {
            const lastUpdated = new Date(response.data.data.attributes.changed);
            const originalBuild = new Date(buildDate);
            if (lastUpdated > originalBuild) {
              getDynamicContent();
            } else {
              setLoading(false);
            }
          }
        })
        .catch(() => {
          // console.error(error);
          setLoading(false);
        });
    }

    if (!item) {
      getDynamicContent();
    } else if (updateContent) {
      checkForNewContent();
    } else {
      setLoading(false);
    }
  }, [item, dynamicCallback, apiUrl]);

  return (
    <>
      {(!notFound && content && !loading)
        && (
          <DynamicContext.Provider value={{ item: content }}>
            { children }
          </DynamicContext.Provider>
        )}
    </>
  );
};

DynamicContent.defaultProps = {
  item: null,
  apiSuffix: '',
  dynamicCallback: null,
  updateContent: false,
  nodeType: 'data',
  buildDate: '',
};

DynamicContent.propTypes = {
  children: PropTypes.node.isRequired,
  item: PropTypes.objectOf(PropTypes.any),
  apiPrefix: PropTypes.string.isRequired,
  apiSuffix: PropTypes.string,
  id: PropTypes.string.isRequired,
  dynamicCallback: PropTypes.func,
  updateContent: PropTypes.bool,
  nodeType: PropTypes.string,
  buildDate: PropTypes.string,
};
export default DynamicContent;
