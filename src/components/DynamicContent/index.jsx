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
}) => {
  const [content, setContent] = useState(item);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);
  const apiUrl = `${apiPrefix}/${id}/${apiSuffix}`;

  useEffect(() => {
    async function getDynamicContent() {
      await axios.get(apiUrl)
        .then((response) => {
          // handle success
          setContent(response.data);
          setLoading(false);
          dynamicCallback(response.data);
        })
        .catch(() => {
          // handle error
          setNotFound(true);
          setLoading(false);
          navigate('/404');
        });
    }
    if (!item) {
      getDynamicContent();
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
};

DynamicContent.propTypes = {
  children: PropTypes.node.isRequired,
  item: PropTypes.objectOf(PropTypes.any),
  apiPrefix: PropTypes.string.isRequired,
  apiSuffix: PropTypes.string,
  id: PropTypes.string.isRequired,
  dynamicCallback: PropTypes.func,
};

export default DynamicContent;
