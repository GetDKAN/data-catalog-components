/* eslint-disable */
import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Text from '../Text';


class Table extends Component {

    render() {

        const { data, configuration, title, th1, th2, tableclass } = this.props;

        const fields = Object.keys(configuration);

        if (fields.length == 0) {
            return (<div></div>)
        }

        const mapped = fields.map((field, index) =>
          {
            const Component = String;
            const label = 'label' in configuration[field] ? configuration[field].label : '';
            const value = data[field];
            return {label: label, value: value};
          }
        );


          const rows = mapped.map((row, index) => {
            return (<tr key={row.label}><td>{row.label}</td><td><Text value={row.value}/></td></tr>);
          });

          if (rows.length) {
            return (
              <Wrapper className={tableclass}>
                <h3>{title}</h3>
                <table className="table table-bordered table-hover table-striped">
                  <thead>
                  <tr>
                    <th>{th1}</th>
                    <th>{th2}</th>
                  </tr>
                  </thead>
                  <tbody>
                  {rows}
                  </tbody>
                </table>
              </Wrapper>
            );
          } else {
            return (<span></span>);
          }

        }
}

Table.defaultProps = {
    title: "Additional Information",
    th1: "Field",
    th2: "Value"
};

export default Table;
