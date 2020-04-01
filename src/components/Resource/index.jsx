import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  ResourceDispatch,
  defaultResourceState,
  resourceReducer,
  queryResourceData,
  queryAllResourceData,
  getDKANDatastore,
} from '../../services/resource/resource_tools';

const Resource = ({
  apiURL,
  children,
  resource,
}) => {
  const [resourceState, dispatch] = useReducer(
    resourceReducer,
    defaultResourceState,
  );
  useEffect(() => {
    async function getStore() {
      if (resourceState.store === null) {
        dispatch(await getDKANDatastore(apiURL, resource));
      }
    }
    async function queryStore() {
      if (resourceState.queryAll) {
        dispatch(await queryAllResourceData(resourceState.store));
      } else {
        dispatch(await queryResourceData(resourceState));
      }
    }
    dispatch({ type: 'GET_STORE' });
    if (resourceState.store !== null) {
      queryStore();
    } else {
      getStore();
    }
  }, [
    resourceState.store,
    resourceState.storeType,
    resourceState.currentPage,
    resourceState.filters,
    resourceState.pageSize,
    resourceState.sort,
  ]);

  return (
    <ResourceDispatch.Provider value={{ resourceState, dispatch }}>
      {children}
    </ResourceDispatch.Provider>
  );
};

Resource.propTypes = {
  apiURL: PropTypes.string.isRequired,
};

export default Resource;
