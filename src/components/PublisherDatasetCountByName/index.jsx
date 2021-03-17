import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "@reach/router";

const PublisherDatasetCountByName = (props) => {
  const { name, searchUrl, datasetCount} = props;
  const link = searchUrl ? searchUrl : `search/?publisher__name=${name}`;
  let str;
  if (datasetCount) {
    str = (datasetCount === 1) ? '1 dataset' : `${datasetCount}x datasets`;
  } else {
    str = 'datasets';
  }
  return (
    <Link to={link} className="publisher-datasets-link" alt="Publisher datasets">
      {str}
    </Link>
  );
};


export default PublisherDatasetCountByName;

PublisherDatasetCountByName.propTypes = {
  name: PropTypes.string,
  searchUrl: PropTypes.string,
  datasetCount: PropTypes.string
};
