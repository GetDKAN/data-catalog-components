import React from 'react';
import PropTypes from 'prop-types';
import FormatIcon from '../FormatIcon';
import Text from '../Text';

function FileDownload(props) {

  const { format, downloadURL, title, description } = props;
  const label = title ? title : format;
  const item =
    <div className="dc-resource">
      <FormatIcon format={format} />
      <a href={downloadURL} title={label}>
        {label}
      </a>
      {description && (
        <Text value={description} wrapper="p"/>
      )}
    </div>
    
  return (
    <div className="dc-file-download">
      {item}
    </div>
  );
}

FileDownload.propTypes = {
  title: PropTypes.string,
  format: PropTypes.string,
  downloadURL: PropTypes.string,
  description: PropTypes.string
};

export default FileDownload;
