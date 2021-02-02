import _ from 'lodash';
import axios from 'axios';

class Datastore {
  async query(query = null, fields = null, facets = null, range = null, page = null, sort = null) {}

  async update() {}

  async remove() {}
}
export class dkan extends Datastore {
  id = null

  columns = null

  labelToColumn = null;

  constructor(id, columns, rootUrl) {
    super();
    this.id = id;
    this.columns = columns;
    this.rootUrl = rootUrl;
    this.labelToColumn = [];
  }

  async getDatastoreInfo() {
    return await axios.get(`${this.rootUrl}datastore/imports/${this.id}`)
      .then((data) => {
        if (data) {
          return data.data;
        }
        return null;
      })
      .catch((error) => {
      // handle error
        console.log(error);
      });
  }

  async getColumns() {
    return new Promise((resolve, reject) => {
      resolve(this.columns);
    });
  }

  /**
   * Translate a column to the 'real' column name.
   *
   * The frontend could be displaying the real column namd or a label.
   * This function returns the correct value needed for querying.
   *
   * If we can't determine what the real column name is, we return an empty
   * string.
   */
  getRealColumnName(column) {

    const machineNames = Object.keys(this.labelToColumn);

    if (machineNames.includes(column)) {
      return column;
    }

    const realColumn = machineNames.reduce((accumulator, currentValue) => {
      const info = this.labelToColumn[currentValue]

      if (info.hasOwnProperty('description') &&
          info.description === column) {
        accumulator += currentValue;
      }
      return accumulator;
    }, "");

    if (realColumn.length > 0) {
      return realColumn;
    }

    return ""
  }

  async query(q = null, fields = null, facets = null, range = null, page = null, sort = null, count = false, showDBColumnNames) {

    if (this.labelToColumn.length === 0) {
      const info = await this.getDatastoreInfo();
      this.labelToColumn = info.columns
    }

    if (sort === null) {
      sort = [];
    }

    let sort_object = sort[0]

    if (typeof (sort_object) === 'object') {
      sort_object = JSON.parse(JSON.stringify(sort_object));
      const id = this.getRealColumnName(sort_object.id)
      sort_object.id = id
    }

    let new_q = [];
    if (q !== null) {
      new_q = JSON.parse(JSON.stringify(q));
    }

    new_q.map((v) => {
      v.id = this.getRealColumnName(v.id);
      v.value = `%25${v.value}%25`;
      return v;
    });

    return this._fetch(range, page * range, new_q, sort_object, count, showDBColumnNames);
  }

  async update() {}

  async remove() {}

  async _fetch(limit, offset, where, sort, count, showDBColumnNames) {
    let query = '';
    let where_string = '';

    if (where.length !== 0) {
      const where_clauses = [];

      where.forEach((v, i) => {
        // Switch delimiter to, and strip any double-quote for Dkan2's sql query.
        where_clauses[i] = `${v.id} = "${v.value.replace('"', '')}"`;
      });

      where_string = `[WHERE ${where_clauses.join(' AND ')}]`;
    }

    let sort_string = '';

    if (typeof (sort) === 'object') {
      const id = this.getRealColumnName(sort.id)
      sort_string = `[ORDER BY ${id}`;
      if (sort.desc === false) {
        sort_string += ' ASC]';
      } else {
        sort_string += ' DESC]';
      }
    }

    let fields = '';
    let limit_string = '';

    if (count) {
      fields = 'COUNT(*)';
    } else {
      fields = '*';
      limit_string = `[LIMIT ${limit} OFFSET ${offset}]`;
    }
    const dbColumns = showDBColumnNames ? '&show-db-columns' : '';
    query = `datastore/sql/?query=[SELECT ${fields} FROM ${this.id}]${where_string}${sort_string}${limit_string};${dbColumns}`;
    return new Promise((resolve, reject) => {
      axios.get(this.rootUrl + query).then(
        (response) => {
          this.data = response.data;
          resolve({ data: this.data, count: this.data.length });
        },
        (error) => {
          this.data = [];
          resolve(this.data);
        },
      );
    });
  }
}

const datastore = {
  dkan,
};

export default datastore;
