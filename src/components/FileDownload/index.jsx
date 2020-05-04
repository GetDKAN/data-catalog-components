import React from 'react';
import PropTypes from 'prop-types';
import FormatIcon from '../FormatIcon';
import Text from '../Text';

const FileDownload = ({
  title, format, downloadURL, description,
}) => {
  const label = title || format;
  const item = (
    <div className="dc-resource">
      <FormatIcon format={format} />
      <a href={downloadURL} title={label}>
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
};

FileDownload.propTypes = {
  title: PropTypes.string,
  format: PropTypes.string.isRequired,
  downloadURL: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default FileDownload;
