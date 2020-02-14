/* eslint-disable */

import React from 'react';
import { Form, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';

class InputLarge extends React.Component {

  onFieldChange(event) {
    // for a regular input field, read field name and value from the event
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    this.props.onChange(fieldName, fieldValue);
  }

  onReset(event) {
    window.location = '/search';
  }

  onGo(event) {
    if (this.props.facets || this.props.value) {
      let location = "/search?";
      for (let i in this.props.facets) {
        location = location + this.props.facets[i][0] + "=" + this.props.facets[i][1] + '&';
        if (i === (this.props.facets.length - 1)) {
          console.log(i);
        }
      }
      if (this.props.value) {
        location = location + "q=" + this.props.value;
      }
      else {
        // Remove last &.
        location = location.slice(0, -1);
      }
      window.location = location;
    }
  }

  render () {
    return (
      <FormGroup>
        <Label for="search" className="sr-only" >Search</Label>
        <input type="text" name="search" id="search" className="form-control form-text" placeholder="Search for..."
          onChange={this.onFieldChange.bind(this)} value={this.props.value} />
        <span className="input-group-btn">
          <button type="submit" id="submit" name="op" className="dc-button btn btn-primary" onClick={this.onGo.bind(this)} type="button">Go!</button>
          <button className="dc-button btn btn-primary" onClick={this.onReset.bind(this)} type="button">Reset</button>
        </span>
      </FormGroup>
    )
  }
}

InputLarge.propTypes = {
  onChange: PropTypes.func.isRequired,
  items: PropTypes.array,
  className: PropTypes.string,
};

export default InputLarge;
