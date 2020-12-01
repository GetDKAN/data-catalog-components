import React from 'react';
import PropTypes from 'prop-types';
import FormatIcon from '../FormatIcon';
import Text from '../Text';

const FileDownload = ({
  title, format, downloadURL, accessURL, description,
}) => {
  const label = title || format;
  const ref = downloadURL ? downloadURL : accessURL;
  const item = (
    <div className="dc-resource">
      <FormatIcon format={format} />
      <a href={ref} title={label}>
        {label}
      </a>
      {description && (
        <Text value={description} wrapper={{ tag: 'div', classes: 'dc-file-description' }} />
      )}
    </div>
  );

  return (
    <div className="dc-file-download">
      {item}
    </div>
  );
};

FileDownload.defaultProps = {
  description: '',
  title: '',
  downloadURL: '',
  accessURL: '',
};

FileDownload.propTypes = {
  title: PropTypes.string,
  format: PropTypes.string.isRequired,
  downloadURL: PropTypes.string,
  accessURL: PropTypes.string,
  description: PropTypes.string,
};

export default FileDownload;
