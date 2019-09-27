import React from 'react';
import { Redirect } from "react-router-dom";
import { Button, FormGroup, Label, Input  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from './Form';


class SearchInput extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.handleString = this.handleString.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      navigate: false,
      query: null,
      textEntered: false,
      value: ''
    };
  }

  

  handleClick(e) {
    e.preventDefault();
    this.setState({ navigate: true })
  }
  handleString(e) {
    e.preventDefault();
    this.setState({ 
      textEntered: e.target.value ? true : false,
      value: e.target.value,
      query: e.target.value
    });
  }
  handleReset(e) {
    e.preventDefault();
    this.setState({ 
      query: null,
      textEntered: false,
      value: ''
    });
  }

  render() {

    const {query} = this.state;
    const placeholder = this.props.placeholder ? this.props.placeholder : "Search the Data";
    const className = this.props.className ? this.props.className : "";
    const search = this.props.component ? this.props.component : null;
    
    let reset = this.state.textEntered 
      ? <Button type="reset" id="reset" onClick={ this.handleReset }>
          <FontAwesomeIcon icon="times" color="#666666" size="2x"/>
        </Button> 
      : false;

    if (this.state.navigate === true) {
      return <Redirect to={`/search?q=${query}`} component={search} />
    }

    return (

      <Form className={className} onSubmit={this.handleClick}>
        <FormGroup>
          <Label for="search" className="sr-only" >Search</Label>
          <Input type="text" name="search" id="search" placeholder={placeholder} value={this.state.value} onChange={ this.handleString } bsSize="lg"/>
          {reset}
          <Button type="submit" id="submit">GO</Button>
        </FormGroup>
      </Form>

    );
  }
}
export default SearchInput;
