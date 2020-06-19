import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';

const PageHeader = ({ title }) => (
  <Wrapper>
    <h1>{title}</h1>
  </Wrapper>
);

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
