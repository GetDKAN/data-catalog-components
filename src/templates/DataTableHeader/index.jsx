import React from 'react';
import { ResourceDispatch } from '../../services/resource/resource_tools';
import ManageColumns from '../../components/DataTable/ManageColumns';

const DataTableHeader = ({}) => {
  const { reactTable } = React.useContext(ResourceDispatch);
  return (
    <div className="dc-datatable-header">
      {reactTable.allColumns
        && <ManageColumns /> }
    </div>
  );
};

export default DataTableHeader;
