import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import FileDownload from "../FileDownload";
import DataTable from '../../templates/DataTable';

import resourceReducer from '../../services/resource/resource_reducer';

import {
  queryResourceData,
  getDKANDatastore,
} from '../../services/resource/resource_functions';
import useDatastore from '../../services/useDatastore';

import {
  ResourceDispatch,
  defaultResourceState,
} from '../../services/resource/resource_defaults';

const Resource = ({
  apiURL,
  id,
  showDBColumnNames,
  transformQueryData: handleTransformQueryData,
  format,
  downloadURL,
  accessURL
}) => {
  const [resourceState, dispatch] = useReducer(
    resourceReducer,
    defaultResourceState,
  );

  useEffect(() => {
    dispatch({ type: 'GET_STORE' });
    async function getStore() {
      if (resourceState.store === null) {
        dispatch(await getDKANDatastore(apiURL, id, resourceState.pageSize, showDBColumnNames));
      }
    }
    getStore();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_STORE' });

    async function queryStore() {
      let resourceData;

      if (handleTransformQueryData) {
        resourceData = handleTransformQueryData({
          ...resourceState,
        });
      } else {
        resourceData = resourceState;
      }

      dispatch(await queryResourceData(resourceData, showDBColumnNames));
    }
    if (resourceState.updateQuery) {
      queryStore();
    }
  
  }, [
    resourceState.updateQuery,
    resourceState.currentPage,
    resourceState.filters,
    resourceState.pageSize,
    resourceState.sort,
  ]);

  const { columns } = resourceState;
  const data = resourceState.values;

  // Define a default UI for filtering
  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter, Header },
  }) {
    const count = preFilteredRows ? preFilteredRows.length : 0;

    return (
      <input
        aria-label={Header}
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    );
  }


  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      // fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => (
        rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
              .toLowerCase()
              .startsWith(String(filterValue).toLowerCase())
            : true;
        })
      ),
    }),
    [],
  );

  return (
    <div id="resource">
      {data.length ? (
        <div>
          <FileDownload
            title={"test"}
            label={downloadURL}
            format={format}
            downloadURL={downloadURL ? downloadURL : accessURL}
          />
          <DataTable
            resource={resourceState}
          />
        </div>
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
