import React, { useState , useReducer} from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';

import FileDownload from "../FileDownload";
import DataTable from '../../templates/DataTable';

import { prepareColumns, prepareFilterParams } from '../../services/resource/resource_functions';

import resourceReducer from '../../services/resource/resource_reducer';
import {
  ResourceDispatch,
  defaultResourceState,
} from '../../services/resource/resource_defaults';

const Resource = ({
  apiURL,
  id,
  format,
  downloadURL,
  accessURL
}) => {

  const [resourceState, dispatch] = useReducer(
    resourceReducer,
    defaultResourceState,
  );
  const filterParams = prepareFilterParams(resourceState.filters);
  const sort = resourceState.sort.length ? `&sorts[0][property]=${resourceState.sort[0].id}&sorts[0][order]=${resourceState.sort[0].desc ? 'desc' : 'asc'}` : '';

  const {data} = useQuery({
    queryKey: ['datastore', id + filterParams + resourceState.currentPage + resourceState.pageSize + sort],
    queryFn: () => {
      return fetch(`${apiURL}/datastore/query/${id}?limit=${resourceState.pageSize}&offset=${resourceState.currentPage * resourceState.pageSize}${filterParams}${sort}`).then(
        (res) => res.json(),
      )
    }
  });

  const columns = data && data.schema ? Object.keys(data.schema[id].fields) : [];

  return (
    <div id="resource">
      {data && data.results ? (
        <ResourceDispatch.Provider value={{dispatch, resourceState}}>
          <FileDownload
            title={"test"}
            label={downloadURL}
            format={format}
            downloadURL={downloadURL ? downloadURL : accessURL}
          />
          <DataTable data={data} columns={prepareColumns(columns)} />
        </ ResourceDispatch.Provider>
      ) : ('')
    }
    </div>
  );
};

Resource.defaultProps = {
  showDBColumnNames: false,
};

Resource.propTypes = {
  apiURL: PropTypes.string.isRequired,
  showDBColumnNames: PropTypes.bool,
};

export default Resource;
