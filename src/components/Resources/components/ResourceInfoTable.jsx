import React from 'react';
import Table from '../../Table';

const ResourceInfoTable = ({statistics, title}) => {
  const numRows = 'rows' in statistics ? statistics.rows : "";
  const numColumns = 'columns' in statistics ? statistics.columns : "";
  const labelsT1 = {
    rows: {
      label: numRows.toString()
    }
  }
  const valuesT1 = {
    rows: numColumns.toString()
  }

  return(
    <Table
      configuration={labelsT1}
      data={valuesT1}
      title={title}
      th1="Rows"
      th2="Columns"
      tableclass="table-one"
    />
  );
}

export default ResourceInfoTable;