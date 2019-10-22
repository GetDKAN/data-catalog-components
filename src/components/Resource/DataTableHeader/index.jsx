import React from 'react';
import PropTypes from 'prop-types';
import DataTablePageResults from './DataTablePageResults';
import DataTableDensity from './DataTableDensity';
import DataTablePageSizer from './DataTablePageSizer';
import AdvancedOptions from './AdvancedOptions';
import Wrapper from './Wrapper';

const DataTableHeader = ({
  dataPreview,
  dataFunctions,
  className,
  hideDisplayDensity,
  hidePageResults,
  hidePageSizer,
  hideAdvancedOptions,
  pageResultsOptions,
  pageSizerOptions,
  displayDensity
}) => {
  // const {
  //   displayDensity, pageResults, pageSizer, advancedOptions,
  // } = options;
  // const hideDisplayDensity = !(displayDensity && displayDensity.hide);
  // const hidePageResults = !(pageResults && pageResults.hide);
  // const hidePageSizer = !(pageSizer && pageSizer.hide);
  // const hideAdvancedOptions = !(advancedOptions && advancedOptions.hide);

  return (
    <Wrapper>
      <div className={className}>
        { hidePageResults
          && (
            <DataTablePageResults
              total={parseInt(dataPreview.rowsTotal, 10)}
              pageSize={dataPreview.pageSize}
              currentPage={dataPreview.currentPage}
              className={pageResultsOptions.className}
            />
          )}
        { hidePageSizer
          && (
            <DataTablePageSizer
              pageSizeChange={dataFunctions.pageSizeChange}
              currentOption={dataPreview.pageSize}
              label={pageSizerOptions.label}
              options={pageSizerOptions.options}
              className={pageSizerOptions.className}
              id={pageSizerOptions.id}
            />
          )}
        { hideDisplayDensity
        && (
          <DataTableDensity
            densityChange={dataFunctions.densityChange}
            items={displayDensity.items}
            className={displayDensity.className}
            screenReaderClass={displayDensity.screenReaderClass}
            title={displayDensity.title}
          />
        )}
        { hideAdvancedOptions
        && (
          <AdvancedOptions
            columns={dataPreview.columns}
            excludedColumns={dataPreview.excludedColumns}
            columnOrder={dataPreview.columnOrder}
            toggleColumns={dataFunctions.toggleColumns}
            reorderColumns={dataFunctions.reorderColumns}
          />
        )}
      </div>
    </Wrapper>
  );
};

DataTableHeader.defaultProps = {
  className: 'data-table-header',
  hidePageResults: false,
};

DataTableHeader.propTypes = {
  hidePageResults: PropTypes.string,
  className: PropTypes.string,
  dataPreview: PropTypes.shape({
    columnOrder: PropTypes.array,
    columns: PropTypes.array,
    currentPage: PropTypes.number,
    density: PropTypes.string,
    excludedColumns: PropTypes.arrayOf(PropTypes.object),
    filters: PropTypes.array,
    pageSize: PropTypes.number,
    rowsTotal: PropTypes.string,
    sort: PropTypes.array,
    values: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  // dataFunctions: PropTypes.object.isRequired,
  // options: PropTypes.shape({
  //   displayDensity: PropTypes.object,
  //   pageResults: PropTypes.object,
  //   pageSizer: PropTypes.object,
  //   advancedOptions: PropTypes.object
  // })
};

export default DataTableHeader;
