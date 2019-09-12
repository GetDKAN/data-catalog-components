import React from 'react';
import axios from 'axios';
import datastore from './services/datastore';

export default function withResource(
  OriginalComponent,
  resourceDefaults
) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      // const { pageContext: {dataset} } = props;
      // ${props.location.origin}
      // this.url = `http://dkan/api/v1/dataset/${dataset.identifier}?values=both`;
      // this.distribution = dataset.distribution;
      // this.identifier = dataset.identifier;
      this.store = null;
      this.columns = [];

      this.state = {
        dataPreview: {
          values: [],
          pageSize: 5,
          rowsTotal: 0,
          currentPage: 0,
          filters: [],
          sort: [],
          columns: []
        },
        dataInfo: {},
        dataFunctions: {
          pageChange: (page) => this.pageChange(page),
          sortChange: (sort) => this.sortChange(sort),
          filterChange: (filters) => this.filterChange(filters)
        }
      }

      // this.fetchData = this.fetchData.bind(this);
      // this.getStore = this.getStore.bind(this);
      this.activeColumns = this.activeColumns.bind(this);
      this.prepareColumns = this.prepareColumns.bind(this);
      this.pageChange = this.pageChange.bind(this);
      this.filterChange = this.filterChange.bind(this);
      this.sortChange = this.sortChange.bind(this);
    }

    componentDidMount() {
      this.fetchData()
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          ident={this.identifier}
        />);
    }

    async fetchData() {
      const { dataPreview, dataInfo } = this.state;
      const { data } = this.props;
      let columns;
      
      let store = await this.getStore();


      if(data.identifier !== undefined) {
        await axios.get(`http://dkan/api/v1/datastore/${data.identifier}?values=both`)
        .then((response) => {
          console.log('datastore', response)
          columns = response.data.columns ? response.data.columns : store.getColumns();
          this.setState({dataInfo: response.data})
        })
        .catch(function (error) {
          console.log(error)
        })
      } else {
        columns = await store.getColumns();
      }
      // dataPreview.columns = this.activeColumns(this.prepareColumns(columns));
      dataPreview.columns = this.prepareColumns(columns);
      await this.getData(null, null, dataPreview.pageSize, dataPreview.currentPage, true);
      this.setState({dataPreview})
    }

    async getStore() {
      const { data } = this.props;
      const { dataPreview } = this.state;
      return new Promise((resolve, reject) => {
        if (this.store !== null) {
          resolve(this.store);
        } else {
          if(data.identifier) {
            let store = new datastore['dkan'](data.identifier, this.columns);
            store.query(null, null, null, 0, null, null, true)
            .then((data) => {
              this.store = store;
              resolve(store);
              })
            } else {
              let store = new datastore['file'](data.downloadURL);
              store.query(null, null, null, null, null, null, true)
              .then((data) => {
                if(data.length !== undefined && data.length !== 0) {
                  this.store = store;
                  this.setState({store: store})
                  resolve(store);
                }
                else {
                  reject("No datastore available.")
                }
              })
            }
        }
      })
    }

    async getData(fields = null, facets = null, range = null, page = null, count = false) {
      const { dataPreview } = this.state;
      const query = dataPreview.filters.length ? dataPreview.filters : null;
      const sort = dataPreview.sort
      if(count) {
        await this.store.query(query, fields, facets, range, page, sort, count).then((data) => {
          dataPreview.rowsTotal = data;
          console.log('rows', data)
        })
        await this.store.query(query, fields, facets, range, page, sort).then((data) => {
          dataPreview.values = data;
          console.log('values', data)
        })
      } else {
        await this.store.query(query, fields, facets, range, page, sort).then((data) => {
          dataPreview.values = data;
        })
      }


      this.setState({dataPreview})
    }

    async activeColumns() {

    }

    prepareColumns(columns) {
      return columns.map((column) => {
        return {
          Header: column,
          accessor: column
        }
      })
    }

    //TABLE FUNCTIONS
    async pageChange(page) {
      const { dataPreview } = this.state;
      dataPreview.currentPage = page;

      this.getData(null, null, dataPreview.pageSize, dataPreview.currentPage)
      
    }

    async filterChange(filters) {
      const { dataPreview } = this.state;
      dataPreview.filters = filters;
  
      // When filtering the pages gets reset.
      dataPreview.currentPage = 0;
      this.getData(null, null, dataPreview.pageSize, dataPreview.currentPage, true);
    }

    async sortChange(sort) {
      const { dataPreview } = this.state;
      dataPreview.sort = sort
  
      // When sorting the pages gets reset.
      dataPreview.currentPage = 0
      this.getData( null, null, dataPreview.pageSize, dataPreview.currentPage);
    }
  }

  
}
