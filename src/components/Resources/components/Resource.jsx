import React, { useState, useEffect } from 'react';
import Loader from "react-loader-advanced";
import LoadingSpin from "react-loading-spin";
import { FileDownload } from '@civicactions/data-catalog-components';
import withResource from './';
import DataTable from './DataTable';
import DataTableHeader from './DataTable/DataTableHeader';
import ResourceInfoTable from './ResourceInfoTable';

const Resource = ({
  dataPreview,
  dataInfo,
  dataFunctions,
  includeInfoTable,
  infoTableTitle,
  hideHeader,
  headerOptions
}) => {
  const [show, toggleShow] = useState(true);
  useEffect(() => {
    if(dataPreview.values.length > 0) {
      toggleShow(false)
    }
  }, [dataPreview.values.length])

  const values = 'values' in dataPreview ? dataPreview.values : [];
  const columns = 'columns' in dataPreview ? dataPreview.columns : [];
  const dataKey = dataInfo.indentifier;
  const pageSize = 'pageSize' in dataPreview ? dataPreview.pageSize : 20;
  const pages = Math.ceil(dataPreview.rowsTotal / pageSize);
  const statistics = 'datastore_statistics' in dataInfo ? dataInfo.datastore_statistics : {rows: dataPreview.rowsTotal, columns: columns.length};
  return(
    <div>
      <Loader backgroundStyle={{backgroundColor: "#f9fafb"}} foregroundStyle={{backgroundColor: "#f9fafb"}} show={show} message={<LoadingSpin width={"3px"} primaryColor={"#007BBC"}/>}>
        {dataInfo.data &&
          <FileDownload resource={dataInfo.data} key={dataKey} />
        }
        {!hideHeader &&
          <DataTableHeader
            dataPreview={dataPreview}
            options={headerOptions}
            dataFunctions={dataFunctions}
          />
        }
        {hideHeader &&
          <>
            <strong>Rows:</strong> {dataPreview.rowsTotal}
          </>
        }
        <DataTable
          index={1}
          key={dataKey}
          loading={show}
          pageSize={pageSize}
          pages={pages}
          data={values}
          columns={dataFunctions.activeColumns(dataPreview.columns)}
          density={dataPreview.density}
          sortedChange={dataFunctions.sortChange}
          filterChange={dataFunctions.filterChange}
          pageChange={dataFunctions.pageChange}
        />
        {includeInfoTable &&
          <ResourceInfoTable
          statistics={statistics}
          title={infoTableTitle}
        />
        }
      </Loader>
    </div>
  );
}

export default withResource(Resource);
