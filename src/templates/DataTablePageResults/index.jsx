import React from "react";
import PropTypes from "prop-types";
import calcDatatablePageResults from "../../utils/calcDatatablePageResults";

const DataTablePageResults = ({ totalRows, limit, offset, className }) => {
  // If there are no totalRows, just show 0s and skip the function overhead.
  if (totalRows === 0) {
    return <p className={className}>{`0 - 0 of 0 rows`}</p>;
  }

  const { startTotal, ofTotal, numTotalRows } = calcDatatablePageResults(
    totalRows,
    limit,
    offset,
    true
  );
  return (
    <p className={className}>
      {`${startTotal} - ${ofTotal} of ${numTotalRows} rows`}
    </p>
  );
};

DataTablePageResults.defaultProps = {
  className: "data-table-results",
};

DataTablePageResults.propTypes = {
  className: PropTypes.string,
  totalRows: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
};

export default DataTablePageResults;
