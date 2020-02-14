import React from 'react';
import PropTypes from 'prop-types';
import FormatIcon from '../FormatIcon';

function FileDownload(props) {

  const { format, downloadURL, title } = props;
  const label = title ? title : format;
  const item =
    <div className="dc-resource">
      <FormatIcon format={format} />
      <a href={downloadURL} title={label}>
        {label}
      </a>
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
  downloadURL: PropTypes.string
};

export default FileDownload;
