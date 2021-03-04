import React from "react";
import PropTypes from "prop-types";

const DataTablePageResults = ({ totalRows, limit, offset, className }) => {
  const ofTotal = () => {
    if (limit >= totalRows) {
      return totalRows;
    }
    if (offset === 0) {
      return limit;
    }
    return offset + limit;
  };
  const page = offset / limit;
  const startTotal = () => page * limit + 1;
  return (
    <p
      className={className}
    >{`${startTotal()} - ${ofTotal()} of ${totalRows} rows`}</p>
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
