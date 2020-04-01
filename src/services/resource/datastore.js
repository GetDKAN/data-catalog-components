import Papa from 'papaparse';
import _ from "lodash";
import axios from 'axios';

class Datastore {

  async query(query = null, fields = null, facets = null, range = null, page = null, sort = null) {}

  async update() {}

  async remove() {}
}
export class dkan extends Datastore {

  id = null
  columns = null

  constructor (id, columns, rootUrl) {
    super()
    this.id = id;
    this.columns = columns;
    this.rootUrl = rootUrl;
  }

  async getDatastoreInfo() {
    return await axios.get(`${this.rootUrl}datastore/imports/${this.id}`)
    .then(data => {
      if(data) {
        return data.data
      } else {
        return null
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  async getColumns() {
    return new Promise((resolve, reject) => {
      resolve(this.columns)
    })
  }

  async query(q = null, fields = null, facets = null, range = null, page = null, sort = null, count = false) {
   

    if (sort === null) {
      sort = []
    }

    let new_q = []
    if (q !== null) {
      new_q = JSON.parse(JSON.stringify(q));
    }

    new_q.map((v) => {
      v.value = "%25" + v.value + "%25"
      return v
    })

    return this._fetch(range, page * range, new_q, sort[0], count)
  }

  async update() {}

  async remove() {}

  async _fetch(limit, offset, where, sort, count) {
    let query  = ""
    let where_string = ''

    if (where.length !== 0) {
      let where_clauses = [];

      where.forEach((v, i) => {
        // Switch delimiter to, and strip any double-quote for Dkan2's sql query.
        where_clauses[i] = v.id + " = \"" + v.value.replace("\"", "") + "\""
      });

      where_string = "[WHERE " + where_clauses.join(" AND ") + "]";
    }

    let sort_string = ""

    if (typeof(sort) === 'object') {
      sort_string = "[ORDER BY " + sort.id;
      if (sort.desc === false) {
        sort_string += " ASC]"
      }
      else {
        sort_string += " DESC]"
      }
    }

    let fields = ""
    let limit_string = ""

    if (count) {
      fields = 'COUNT(*)'
    }
    else {
      fields = '*'
      limit_string = '[LIMIT '+ limit +' OFFSET '+ offset +']'
    }
    query = 'datastore/sql/?query=[SELECT ' + fields + ' FROM ' + this.id +']' + where_string + sort_string + limit_string + ';'
    return new Promise((resolve, reject) => {
      axios.get(this.rootUrl + query).then(
          (response) => {
            this.data = response.data;
            resolve({data: this.data, count: this.data.length})
          },
          (error) => {
            this.data = []
            resolve(this.data);
          }
      );
    });
  }
}

const datastore = {
  dkan,
};

export default datastore;
