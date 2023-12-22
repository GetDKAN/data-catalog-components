import React from 'react';
import ManageColumns from '../../components/DataTable/ManageColumns';
import DataTablePageResults from '../../components/DataTable/DataTablePageResults';
import DataTableDensity from '../../components/DataTable/DataTableDensity';
import DataTablePageSizer from '../../components/DataTable/DataTablePageSizer';
import DataIcon from '../../components/DataIcon';

const DataTableHeader = ({reactTable, total, setDensity}) => {
  const columns = reactTable.getAllColumns();

  return (
    <div className="dc-datatable-header">
      {reactTable
        && (
        <>
          <DataTablePageResults
            total={total}
            pageSize={reactTable.getState().pagination.pageSize}
            currentPage={reactTable.getState().pagination.pageIndex}
          />
          <DataTablePageSizer
            pageSizeChange={(value) => {
              reactTable.setPageSize(value);
              reactTable.resetPageIndex();
            }}
            id={""} //todo
            initSize={reactTable.getS}
          />
          <DataTableDensity
            densityChange={(density) => setDensity(density)}
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
          {columns ? 
             <ManageColumns reactTable={reactTable} />: ""}
        </>
        )}
    </div>
  );
};

export default DataTableHeader;
