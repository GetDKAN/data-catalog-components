import React from 'react';
import { ResourceDispatch } from '../../services/resource/resource_defaults';
import ManageColumns from '../../components/DataTable/ManageColumns';
import DataTablePageResults from '../../components/DataTable/DataTablePageResults';
import DataTableDensity from '../../components/DataTable/DataTableDensity';
import DataTablePageSizer from '../../components/DataTable/DataTablePageSizer';
import DataIcon from '../../components/DataIcon';

const DataTableHeader = () => {
  const { reactTable, resourceState, dispatch } = React.useContext(ResourceDispatch);
  return (
    <div className="dc-datatable-header">
      {resourceState.store
        && (
        <>
          <DataTablePageResults
            total={resourceState.count}
            pageSize={resourceState.pageSize}
            currentPage={resourceState.currentPage}
          />
          <DataTablePageSizer
            pageSizeChange={(event) => dispatch({
              type: 'UPDATE_PAGE_SIZE',
              data: { pageSize: event.target.value },
            })}
            id={resourceState.store.id}
          />
          <DataTableDensity
            densityChange={(density) => dispatch({ type: 'UPDATE_DENSITY', data: { density } })}
            items={[
              {
                icon: (
                  <DataIcon
                    icon="density-1"
                    name="density-1"
                    fill="#666666"
                    height={20}
                    width={20}
                  />
                ),
                text: 'expanded',
                value: 'density-1',
              },
              {
                icon: (
                  <DataIcon
                    icon="density-2"
                    name="density-2"
                    fill="#666666"
                    height={20}
                    width={20}
                  />
                ),
                text: 'normal',
                value: 'density-2',
              },
              {
                icon: (
                  <DataIcon
                    icon="density-3"
                    name="density-3"
                    fill="#666666"
                    height={20}
                    width={20}
                  />
                ),
                text: 'tight',
                value: 'density-3',
              },
            ]}
          />
          {reactTable.allColumns
            && <ManageColumns /> }
        </>
        )}
    </div>
  );
};

export default DataTableHeader;
