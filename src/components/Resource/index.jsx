import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';

import FileDownload from "../FileDownload";
import DataTable from '../../templates/DataTable';

import { prepareColumns } from '../../services/resource/resource_functions';

const Resource = ({
  apiURL,
  id,
  resource,
  showDBColumnNames,
  transformQueryData: handleTransformQueryData,
  format,
  downloadURL,
  accessURL
}) => {

  const {loading, data} = useQuery({
    queryKey: ['datastore', id],
    queryFn: () => {
      return fetch(`${apiURL}/datastore/query/${id}`).then(
        (res) => res.json(),
      )
    }
  });

  const columns = data && data.schema ? Object.keys(data.schema[id].fields) : [];

  return (
    <div id="resource">
      {data && data.results ? (
        <>
          <FileDownload
            title={"test"}
            label={downloadURL}
            format={format}
            downloadURL={downloadURL ? downloadURL : accessURL}
          />
          <DataTable data={data} columns={prepareColumns(columns)} />
        </>
      ) : ('')
    }
    </div>
  );
};

Resource.defaultProps = {
  showDBColumnNames: false,
  transformQueryData: null,
};

Resource.propTypes = {
  apiURL: PropTypes.string.isRequired,
  showDBColumnNames: PropTypes.bool,
  transformQueryData: PropTypes.func,
};

export default Resource;
