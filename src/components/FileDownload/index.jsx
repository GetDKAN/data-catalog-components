/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import FormatIcon from '../FormatIcon';

function FileDownload(props) {

  const { label, resource } = props;
  let format = resource.format.toUpperCase();

  const item =
    <div className="resource">
      <FormatIcon format={format} />
      <a href={resource.downloadURL} title={resource.format}>
        <span
          data-toggle='tooltip'
          data-placement='top'
          data-original-title={resource.format}
          data-format={resource.format}
          className='format-label'
          >
            {resource.format}
          </span>
          {resource.title}
      </a>
    </div>
    
  return (
    <Wrapper className="file-download">
      {label} {item}
    </Wrapper>
  );
}

FileDownload.propTypes = {
  item: PropTypes.any,
  field: PropTypes.any,
};

export default FileDownload;
