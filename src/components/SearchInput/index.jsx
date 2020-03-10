import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button, FormGroup, Label, Input,
} from 'reactstrap';

const SearchInput = ({
  className,
  labelContent,
  onChangeFunction,
  placeholder,
  value,
  bsSize,
  labelClassName,
  srOnly,
  resetContent,
  submitContent,
  showSubmit,
  showReset,
}) => {
  const [searchQuery, setSearchQuery] = useState(value);

  useEffect(() => {
    if (value === '') {
      setSearchQuery(value);
    }
  }, [value]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChangeFunction({ type: 'UPDATE_FULLTEXT', data: { fulltext: searchQuery } });
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery, onChangeFunction]);

  const reset = (
    <Button
      type="reset"
      id="inputReset"
      onClick={() => { setSearchQuery(''); }}
    >
      {resetContent}
    </Button>
  );
  const labelClass = srOnly ? 'sr-only' : '';

  return (
    <FormGroup className={className}>
      <Label for="inputSearch" className={`${labelClass} ${labelClassName}`}>{labelContent}</Label>
      <Input
        type="text"
        name="inputSearch"
        id="inputSearch"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => { setSearchQuery(e.target.value); }}
        bsSize={bsSize}
      />
      {searchQuery.length ? reset : null}
      {showSubmit
        && <Button type="submit" id="inputSubmit">{submitContent}</Button>}
    </FormGroup>
  );
};

SearchInput.defaultProps = {
  placeholder: 'Search the Data',
  labelContent: 'Search',
  value: '',
  bsSize: 'lg',
  labelClassName: '',
  srOnly: true,
  className: '',
  resetContent: 'Reset',
  submitContent: 'Submit',
  showSubmit: true,
  showReset: true,
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  bsSize: PropTypes.string,
  labelClassName: PropTypes.string,
  srOnly: PropTypes.bool,
  className: PropTypes.string,
  resetContent: PropTypes.node,
  submitContent: PropTypes.node,
  onChangeFunction: PropTypes.func.isRequired,
  showSubmit: PropTypes.bool,
  showReset: PropTypes.bool,
  labelContent: PropTypes.string,
};

export default SearchInput;
