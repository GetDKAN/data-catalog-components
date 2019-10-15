import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-advanced';
import LoadingSpin from 'react-loading-spin';
import FileDownload from '../FileDownload';
import withResource from './withResource';
import DataTable from './DataTable';
import DataTableHeader from './DataTableHeader';
import ResourceInfoTable from './InfoTable';

const Resource = ({
  dataPreview,
  dataInfo,
  dataFunctions,
  infoTableOptions,
  headerOptions,
}) => {
  const [show, toggleShow] = useState(true);
  useEffect(() => {
    if (dataPreview.values.length > 0) {
      toggleShow(false);
    }
  }, [dataPreview.values.length]);

  const values = 'values' in dataPreview ? dataPreview.values : [];
  const columns = 'columns' in dataPreview ? dataPreview.columns : [];
  const dataKey = dataInfo.indentifier;
  const pageSize = 'pageSize' in dataPreview ? dataPreview.pageSize : 20;
  const pages = Math.ceil(dataPreview.rowsTotal / pageSize);
  const statistics = 'datastore_statistics' in dataInfo ? dataInfo.datastore_statistics : {rows: dataPreview.rowsTotal, columns: columns.length};
  return (
    <div>
      <Loader backgroundStyle={{ backgroundColor: '#f9fafb' }} foregroundStyle={{ backgroundColor: '#f9fafb' }} show={show} message={<LoadingSpin width="3px" primaryColor="#007BBC" />}>
        {dataInfo.data
          && <FileDownload resource={dataInfo.data} key={dataKey} /> }
        {headerOptions.hideHeader
          ? (
            <>
              <strong>Rows:</strong> {dataPreview.rowsTotal}
            </>
          )
          : (
            <DataTableHeader
              dataPreview={dataPreview}
              options={headerOptions}
              dataFunctions={dataFunctions}
            />
          )}
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
        {infoTableOptions.hideTable
          && (
            <ResourceInfoTable
              statistics={statistics}
              title={infoTableOptions.title}
            />
          )}
      </Loader>
    </div>
  );
};

Resource.defaultProps = {
  headerOptions: {
    hideHeader: false,
  },
  infoTableOptions: {
    hideTable: false,
    title: 'What\'s in this Dataset?',
  },
};

Resource.propTypes = {
  headerOptions: PropTypes.shape({
    hideHeader: PropTypes.bool,
  }),
  dataFunctions: PropTypes.objectOf(PropTypes.func).isRequired,
  infoTableOptions: PropTypes.shape({
    hideTable: PropTypes.bool,
    title: PropTypes.string,
  }),
};

export default withResource(Resource);
