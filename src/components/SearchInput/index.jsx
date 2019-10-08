import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Button, FormGroup, Label, Input,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './Form';

const SearchInput = ({
  className,
  onChangeFunction,
  onResetFunction,
  onSubmitFunction,
  placeholder,
  value,
  bsSize,
  labelClassName,
  srOnly,
  resetContent,
}) => {
  const [showReset, toggleShowReset] = useState(false);
  const inputValue = value;
  if (inputValue) {
    toggleShowReset(true);
  } else {
    toggleShowReset(false);
  }
  let Reset = (
    <Button
      type="reset"
      id="inputReset"
      onClick={onResetFunction}
    >
      Reset
    </Button>
  );
  if (resetContent) {
    Reset = (
      <Button
        type="reset"
        id="inputReset"
        onClick={onResetFunction}
      >
        {resetContent}
      </Button>
    );
  }


  const labelClass = srOnly ? 'sr-only' : '';

  return (
    <FormGroup className={className}>
      <Label for="inputSearch" className={`${labelClass} ${labelClassName}`}>Search</Label>
      <Input
        type="text"
        name="inputSearch"
        id="inputSearch"
        placeholder={placeholder}
        value={inputValue}
        onChange={onChangeFunction}
        bsSize={bsSize}
      />
      {showReset && <Reset />}
      <Button type="submit" id="submit">GO</Button>
    </FormGroup>
  );
};

SearchInput.defaultProps = {
  placeholder: 'Search the Data',
  value: '',
  bsSize: 'lg',
  labelClassName: '',
  srOnly: true,
  className: '',
  resetContent: null,
  onResetFunction: null,
  onChangeFunction: null,
};

SearchInput.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  bsSize: PropTypes.string,
  labelClassName: PropTypes.string,
  srOnly: PropTypes.bool,
  className: PropTypes.string,
  resetContent: PropTypes.node,
  onResetFunction: PropTypes.func,
  onChangeFunction: PropTypes.func,
};

// class SearchInput extends React.Component {

//   constructor(props, context) {
//     super(props, context);
//     this.handleClick = this.handleClick.bind(this);
//     this.handleString = this.handleString.bind(this);
//     this.handleReset = this.handleReset.bind(this);

//     this.state = {
//       navigate: false,
//       query: null,
//       textEntered: false,
//       value: ''
//     };
//   }

  

//   handleClick(e) {
//     e.preventDefault();
//     this.setState({ navigate: true })
//   }
//   handleString(e) {
//     e.preventDefault();
//     this.setState({ 
//       textEntered: e.target.value ? true : false,
//       value: e.target.value,
//       query: e.target.value
//     });
//   }
//   handleReset(e) {
//     e.preventDefault();
//     this.setState({ 
//       query: null,
//       textEntered: false,
//       value: ''
//     });
//   }

//   render() {

//     const {query} = this.state;
//     const placeholder = this.props.placeholder ? this.props.placeholder : "Search the Data";
//     const className = this.props.className ? this.props.className : "";
//     const search = this.props.component ? this.props.component : null;
    
//     let reset = this.state.textEntered 
//       ? <Button type="reset" id="reset" onClick={ this.handleReset }>
//           <FontAwesomeIcon icon="times" color="#666666" size="2x"/>
//         </Button> 
//       : false;

//     if (this.state.navigate === true) {
//       return <Redirect to={`/search?q=${query}`} component={search} />
//     }

//     );
//   }
// }
export default SearchInput;
