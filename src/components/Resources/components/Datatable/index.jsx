import React from 'react';
import ReactTable from 'react-table';
import Wrapper from './Wrapper';
import 'react-table/react-table.css'

class DataTable extends React.Component {
  render() {
    const { data, loading, columns, pageSize, pages, sortedChange, pageChange, filterChange, index } = this.props;
    let style = this.props.density ? `${this.props.density} -striped -highlight` : "-striped -highlight";
    return (
      <Wrapper>
        <ReactTable
          loading={loading}
          index={index}
          data={data}
          filterable
          pages={pages}
          pageSize={pageSize}
          manual
          showPageJump={false}
          showPageSizeOptions={false}
          onPageChange={pageChange}
          onSortedChange={sortedChange}
          onFilteredChange={filterChange}
          columns={columns}
          className={style}
        />
      </Wrapper>
    );
  }
}

export default DataTable;
