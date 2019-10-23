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
  const { hideTable } = infoTableOptions;
  const values = 'values' in dataPreview ? dataPreview.values : [];
  const columns = 'columns' in dataPreview ? dataPreview.columns : [];
  const dataKey = dataInfo.indentifier;
  const pageSize = 'pageSize' in dataPreview ? dataPreview.pageSize : 20;
  const pages = Math.ceil(dataPreview.rowsTotal / pageSize);
  const statistics = 'datastore_statistics' in dataInfo ? dataInfo.datastore_statistics : { rows: dataPreview.rowsTotal, columns: columns.length };
  return (
    <div>
      <Loader backgroundStyle={{ backgroundColor: '#f9fafb' }} foregroundStyle={{ backgroundColor: '#f9fafb' }} show={show} message={<LoadingSpin width="3px" primaryColor="#007BBC" />}>
        {dataInfo.data
          && <FileDownload resource={dataInfo.data} key={dataKey} /> }
        {headerOptions.hideHeader
          ? (
            <>
              <strong>Rows:</strong>
              {' '}
              {dataPreview.rowsTotal}
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
        {!hideTable
          && (
            <ResourceInfoTable
              statistics={statistics}
              title={infoTableOptions.title}
              th1={infoTableOptions.th1}
              th2={infoTableOptions.th2}
              tableclass={infoTableOptions.tableclass}
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
    th1: 'Rows',
    th2: 'Columns',
    tableclass: 'table-one',
  },
  dataInfo: {},
};

Resource.propTypes = {
  headerOptions: PropTypes.shape({
    hideHeader: PropTypes.bool,
  }),
  dataFunctions: PropTypes.objectOf(PropTypes.func).isRequired,
  infoTableOptions: PropTypes.shape({
    hideTable: PropTypes.bool,
    title: PropTypes.string,
    th1: PropTypes.string,
    th2: PropTypes.string,
    tableclass: PropTypes.string,
  }),
  dataPreview: PropTypes.shape({
    columnOrder: PropTypes.array,
    columns: PropTypes.array,
    currentPage: PropTypes.number,
    density: PropTypes.string,
    excludedColumns: PropTypes.object,
    filters: PropTypes.array,
    pageSize: PropTypes.number,
    rowsTotal: PropTypes.string,
    sort: PropTypes.array,
    values: PropTypes.array,
  }).isRequired,
  dataInfo: PropTypes.shape({
    columns: PropTypes.array,
    data: PropTypes.object,
    datastore_statistics: PropTypes.object,
    indentifier: PropTypes.string,
  }),
};

export default withResource(Resource);
