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

import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  createColumnHelper,
  getSortedRowModel,
  getPaginationRowModel
} from '@tanstack/react-table';

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

  const columnHelper = createColumnHelper();

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

  const table_columns = columns.map((col) => {
    if (col.cell) {
      return (
        columnHelper.accessor(col.accessor, {
          header: col.header,
          cell: col.cell,
          minSize: 215
        })
      )
    }
    return (
      columnHelper.accessor(col.accessor, {
        header: col.header,
        minSize: 215
      })
    )
  });

  const reactTable = useReactTable(
    {
      data: data,
      columns: table_columns,
      manualSorting: true,
      manualFiltering: true,
      columnResizeMode: 'onChange',
      initialState: {
        pagination: {
          pageSize: 20,
        },
      },
      pageCount: Number(Math.ceil(resourceState.rowsTotal / resourceState.pageSize)),
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      debugTable: false,
      autoResetPageIndex: false,
    }
  );

  return (
    <div id="resource">
      {data.length ? (
        <ResourceDispatch.Provider value={{dispatch, reactTable, resourceState}}>
          <FileDownload
            title={"test"}
            label={downloadURL}
            format={format}
            downloadURL={downloadURL ? downloadURL : accessURL}
          />
          <DataTable />
        </ResourceDispatch.Provider>
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
