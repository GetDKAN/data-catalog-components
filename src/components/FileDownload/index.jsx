import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import FormatIcon from '../FormatIcon';

function FileDownload(props) {

  const { label, format, downloadURL, title } = props;

  const item =
    <div className="resource">
      <FormatIcon format={format} />
      <a href={downloadURL} title={format}>
        <span
          data-toggle='tooltip'
          data-placement='top'
          data-original-title={format}
          data-format={format}
          className='format-label'
          >
            {format}
          </span>
          {title}
      </a>
    </div>
    
  return (
    <Wrapper className="file-download">
      {label} {item}
    </Wrapper>
  );
}

FileDownload.propTypes = {
  title: PropTypes.string,
  format: PropTypes.string,
  downloadURL: PropTypes.string
};

export default FileDownload;
