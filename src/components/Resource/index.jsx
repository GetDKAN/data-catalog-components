import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-advanced';
import LoadingSpin from 'react-loading-spin';
import FileDownload from '../FileDownload';
import withResource from './withResource';
import DataTable from './DataTable';
import DataTableHeader from './DataTableHeader';
import ResourceInfoTable from './InfoTable';
import useDatasetUrl from '../../services/hooks/useDatasetUrl';

const Resource = ({
  data,
  dataPreview,
  dataInfo,
  dataFunctions,
  infoTableOptions,
  headerOptions,
  datasetId,
  showFileDownload,
}) => {
  const [show, toggleShow] = useState(true);
  useEffect(() => {
    if (dataPreview.values.length > 0) {
      toggleShow(false);
    }
  }, [dataPreview.values.length]);

  const datasetURL = useDatasetUrl(data.data);

  const { hideTable } = infoTableOptions;
  const { hideHeader } = headerOptions;
  const values = 'values' in dataPreview ? dataPreview.values : [];
  const columns = 'columns' in dataPreview ? dataPreview.columns : [];
  const dataKey = dataInfo.indentifier;
  const pageSize = 'pageSize' in dataPreview ? dataPreview.pageSize : 20;
  const pages = Math.ceil(parseInt(dataPreview.rowsTotal, 10) / pageSize);
  const statistics = 'datastore_statistics' in dataInfo ? dataInfo.datastore_statistics : { rows: parseInt(dataPreview.rowsTotal, 10), columns: columns.length };
  
  const type = data.data && data.data.mediaType ? data.data.mediaType.split("/") : '';
  const backup = type ? type[1] : '';
  const format = data.data && data.data.format ? data.data.format : backup;

  const FullScreenModal = () => {
    if (dataKey) {
      return (
        <>
          <DataTableHeader
            dataPreview={dataPreview}
            options={headerOptions}
            dataFunctions={dataFunctions}
            id={datasetId}
            fullScreenMode
          />
          <DataTable
            index={1}
            key={dataKey}
            loading={show}
            pageSize={pageSize}
            pages={pages}
            data={values}
            filtered={dataPreview.filters}
            columns={dataFunctions.activeColumns(dataPreview.columns)}
            density={dataPreview.density}
            sortedChange={dataFunctions.sortChange}
            filterChange={dataFunctions.filterChange}
            pageChange={dataFunctions.pageChange}
          />
        </>
      );
    }
    return null;
  };
  return (
    <div className="resource-container">

      {dataKey
        ? (
          <Loader backgroundStyle={{ backgroundColor: '#f9fafb' }} foregroundStyle={{ backgroundColor: '#f9fafb' }} show={show} message={<LoadingSpin width="3px" primaryColor="#007BBC" />}>
            {(dataInfo.data && showFileDownload)
              && (
              <FileDownload
                format={format}
                downloadURL={datasetURL}
                title={dataInfo.data.title}
                key={`${dataKey}-file-download`}
              />
              ) }
            {hideHeader
              ? (
                <div className="row-results">
                  <strong>Rows:</strong>
                  {' '}
                  {dataPreview.rowsTotal}
                </div>
              )
              : (
                <DataTableHeader
                  dataPreview={dataPreview}
                  options={headerOptions}
                  dataFunctions={dataFunctions}
                  id={datasetId}
                  FullScreenComponent={FullScreenModal}
                />
              )}
            <DataTable
              index={1}
              key={dataKey}
              loading={show}
              pageSize={pageSize}
              pages={pages}
              data={values}
              filtered={dataPreview.filters}
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
        )
        : (
          <div>
            {data.data
              && (
                <FileDownload
                  format={format}
                  downloadURL={datasetURL}
                  title={data.data.title}
                  key={`${data.indentifier}-file-download`}
                />
              )}
          </div>
        )}
    </div>
  );
};

Resource.defaultProps = {
  headerOptions: {
    hideHeader: false,
    pageSizer: {},
    pageResults: {},
    advancedOptions: {},
    tableDensity: {},
    fullScreen: {},
  },
  infoTableOptions: {
    hideTable: false,
    title: 'What\'s in this Dataset?',
    th1: 'Rows',
    th2: 'Columns',
    tableclass: 'table-one',
  },
  dataInfo: {},
  showFileDownload: true,
};

Resource.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.objectOf(PropTypes.string),
    indentifier: PropTypes.string,
  }).isRequired,
  headerOptions: PropTypes.shape({
    hideHeader: PropTypes.bool,
    options: PropTypes.objectOf(PropTypes.object),
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
  datasetId: PropTypes.string.isRequired,
  showFileDownload: PropTypes.bool,
};

export default withResource(Resource);
