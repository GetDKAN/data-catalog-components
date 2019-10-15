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
  headerClasses,
  options,
}) => {
  const {
    displayDensity, pageResults, pageSizer, advancedOptions,
  } = options;
  const hideDisplayDensity = !(displayDensity && displayDensity.hide);
  const hidePageResults = !(pageResults && pageResults.hide);
  const hidePageSizer = !(pageSizer && pageSizer.hide);
  const hideAdvancedOptions = !(advancedOptions && advancedOptions.hide);

  return (
    <Wrapper>
      <div className={headerClasses}>
        { hidePageResults
          && (
            <DataTablePageResults
              total={parseInt(dataPreview.rowsTotal, 10)}
              pageSize={dataPreview.pageSize}
              currentPage={dataPreview.currentPage}
              {...pageResults}
            />
          )}
        { hidePageSizer
          && (
            <DataTablePageSizer
              pageSizeChange={dataFunctions.pageSizeChange}
              currentOption={dataPreview.pageSize}
              {...pageSizer}
            />
          )}
        { hideDisplayDensity
        && (
          <DataTableDensity
            densityChange={dataFunctions.densityChange}
            {...displayDensity}
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
            {...advancedOptions}
          />
        )}
      </div>
    </Wrapper>
  );
};

DataTableHeader.defaultProps = {
  headerClasses: 'dkan-data-table-header',
};

DataTableHeader.propTypes = {
  headerClasses: PropTypes.string,
  dataPreview: PropTypes.object.isRequired,
  dataFunctions: PropTypes.object.isRequired,
  options: PropTypes.shape({
    displayDensity: PropTypes.object,
    pageResults: PropTypes.object,
    pageSizer: PropTypes.object,
    advancedOptions: PropTypes.object
  })
};

export default DataTableHeader;
