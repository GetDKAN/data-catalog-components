import React from "react";
import PropTypes from "prop-types";
import DataTablePageResults from "./DataTablePageResults";
import DataTableDensity from "./DataTableDensity";
import DataTablePageSizer from "./DataTablePageSizer";
import AdvancedOptions from "./AdvancedOptions";
import Wrapper from "./Wrapper";
import FullScreenResource from "./FullScreenResource";

const DataTableHeader = ({
  dataPreview,
  id,
  dataFunctions,
  className,
  options,
  FullScreenComponent,
  fullScreenMode
}) => {
  const {
    pageSizer,
    pageResults,
    advancedOptions,
    tableDensity,
    fullScreen
  } = options;
  const { className: pageResultsClass, hidePageResults } = pageResults;
  const {
    label,
    selectOptions,
    className: pageSizerClass,
    hidePageSizer,
    selectClassName
  } = pageSizer;
  const {
    items,
    className: densityClass,
    screenReaderClass,
    title,
    hideDisplayDensity
  } = tableDensity;
  const {
    titleText,
    actionsClassNames,
    actionText,
    showAction,
    appNode,
    closeModalBtnText,
    modalOpenBtnText,
    actionButtonClassNames,
    hideAdvancedOptions,
    underlayClass,
    includeDefaultStyles,
    dialogClass,
    modalClass,
    itemClasses,
    headerClass,
    closeModalClasses
  } = advancedOptions;
  const {
    modalOpenBtnText: fsModalOpenBtnText,
    dialogClass: fsDialogClass,
    headerClass: fsHeaderClass,
    modalClass: fsModalClass,
    closeModalBtnText: fsCloseModalBtnText,
    closeModalClasses: fsCloseModalClasses,
    titleText: fsTitleText,
    appNode: fsAppNode,
    includeDefaultStyles: fsIncludeDefaultStyles,
    underlayClass: fsUnderlayClass,
    hideFullScreen
  } = fullScreen;
  return (
    <Wrapper>
      <div className={className}>
        {!hidePageResults && (
          <DataTablePageResults
            total={parseInt(dataPreview.rowsTotal, 10)}
            pageSize={dataPreview.pageSize}
            currentPage={dataPreview.currentPage}
            className={pageResultsClass}
          />
        )}
        {!hidePageSizer && (
          <DataTablePageSizer
            pageSizeChange={dataFunctions.pageSizeChange}
            currentOption={dataPreview.pageSize.toString()}
            label={label}
            options={selectOptions}
            selectClassName={selectClassName}
            className={pageSizerClass}
            id={id}
          />
        )}
        {!hideDisplayDensity && (
          <DataTableDensity
            densityChange={dataFunctions.densityChange}
            items={items}
            className={densityClass}
            screenReaderClass={screenReaderClass}
            title={title}
          />
        )}
        {!hideAdvancedOptions && (
          <AdvancedOptions
            columns={dataPreview.columns}
            excludedColumns={dataPreview.excludedColumns}
            columnOrder={dataPreview.columnOrder}
            toggleColumns={dataFunctions.toggleColumns}
            reorderColumns={dataFunctions.reorderColumns}
            modalClass={modalClass}
            className={dialogClass}
            titleText={titleText}
            itemClasses={itemClasses}
            headerClass={headerClass}
            closeModalClasses={closeModalClasses}
            includeDefaultStyles={includeDefaultStyles}
            underlayClass={underlayClass}
            actionButtonClassNames={actionButtonClassNames}
            modalOpenBtnText={modalOpenBtnText}
            closeModalBtnText={closeModalBtnText}
            appNode={appNode}
            showAction={showAction}
            actionText={actionText}
            actionsClassNames={actionsClassNames}
          />
        )}
        {((!hideFullScreen && !fullScreenMode) || !fullScreenMode) && (
          <FullScreenResource
            modalOpenBtnText={fsModalOpenBtnText}
            className={fsDialogClass}
            headerClass={fsHeaderClass}
            modalClass={fsModalClass}
            closeModalBtnText={fsCloseModalBtnText}
            closeModalClasses={fsCloseModalClasses}
            titleText={fsTitleText}
            appNode={fsAppNode}
            includeDefaultStyles={fsIncludeDefaultStyles}
            underlayClass={fsUnderlayClass}
          >
            <FullScreenComponent />
          </FullScreenResource>
        )}
      </div>
    </Wrapper>
  );
};

DataTableHeader.defaultProps = {
  className: "data-table-header",
  options: {
    pageResults: {
      hidePageResults: false,
      className: "data-table-results"
    },
    pageSizer: {
      hidePageSizer: false,
      label: "Rows per page",
      selectOptions: [
        { defaultChecked: true, label: "20", value: "20" },
        { label: "50", value: "50" },
        { label: "100", value: "100" }
      ],
      className: "page-size-options"
    },
    tableDensity: {
      hideDisplayDensity: false,
      items: [
        { icon: null, text: "expanded" },
        { icon: null, text: "normal" },
        { icon: null, text: "tight" }
      ],
      className: "data-table-density",
      screenReaderClass: "sr-only sr-only-focusable",
      title: "Display Density"
    },
    advancedOptions: {
      hideAdvancedOptions: false
    },
    fullscreen: {
      hideFullScreen: false
    }
  },
  FullScreenComponent: null,
  fullScreenMode: false
};

DataTableHeader.propTypes = {
  className: PropTypes.string,
  dataPreview: PropTypes.shape({
    columnOrder: PropTypes.array,
    columns: PropTypes.array,
    currentPage: PropTypes.number,
    density: PropTypes.string,
    excludedColumns: PropTypes.objectOf(PropTypes.bool),
    filters: PropTypes.array,
    pageSize: PropTypes.number,
    rowsTotal: PropTypes.string,
    sort: PropTypes.array,
    values: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
  options: PropTypes.shape({
    pageResultsOptions: PropTypes.shape({
      className: PropTypes.string
    }),
    pageSizerOptions: PropTypes.shape({
      label: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.object),
      className: PropTypes.string
    }),
    displayDensityOptions: PropTypes.shape({
      screenReaderClass: PropTypes.string,
      className: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.node,
          text: PropTypes.string
        })
      ),
      title: PropTypes.string
    })
  }),
  id: PropTypes.string.isRequired,
  dataFunctions: PropTypes.objectOf(PropTypes.func).isRequired,
  FullScreenComponent: PropTypes.node,
  fullScreenMode: PropTypes.bool
};

export default DataTableHeader;
