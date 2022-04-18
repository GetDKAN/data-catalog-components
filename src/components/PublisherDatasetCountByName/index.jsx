import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "@reach/router";
import '../../i18n';
import { useTranslation } from 'react-i18next';
import SearchPaginationResults from '../SearchPaginationResults';

const PublisherDatasetCountByName = (props) => {
  const { t, i18n } = useTranslation();
  const { name, searchUrl, datasetCount } = props;
  const link = searchUrl || `/search/?publisher__name=${name}`;
  let str;
  if (datasetCount) {
    str = (datasetCount === 1) ? `1 ${t('dataset')}` : `${datasetCount} ${t('datasets')}`;
  } else {
    str = `${t('datasets')}`;
  }
  return (
    <Link to={link} className="publisher-datasets-link" alt="Publisher datasets">
      {str}
    </Link>
  );
};

PublisherDatasetCountByName.propTypes = {
  name: PropTypes.string,
  searchUrl: PropTypes.string,
  datasetCount: PropTypes.number,
};

export default PublisherDatasetCountByName;
