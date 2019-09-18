import Papa from 'papaparse';
import _ from 'lodash';
import axios from 'axios';

class Datastore {

  // async query(query = null, fields = null, facets = null, range = null, page = null, sort = null) {}

  // async update() {}

  // async remove() {}
}

export class file extends Datastore {
  constructor(uri) {
    super();
    this.uri = uri;
    this.columns = null;
  }

  async getColumns() {
    return new Promise((resolve, reject) => {
      if (this.columns !== null) {
        resolve(this.columns);
      }

      Papa.parse(this.uri, {
        complete: (data) => {
          this.columns = Object.keys(data.data[0]);
          resolve(this.columns);
        },
        download: true,
        preview: 1,
        header: true,
      });
    });
  }

  /**
   * Queries the records.
   *
   * @param {string | array} query - Query item to search with. Can be a string
   * to search through all records or an array of objects [{field: X, value: Y}]
   * to search through.
   */
  async query(query = null, fields = null, facets = null, range = null, page = null, sort = null, count = false) {
    return new Promise((resolve) => {
      this._fetch().then(
        (data) => {
          data = this._query(data, query);
          if (count) {
            let count = data.length;
            if (count < 100) {
              // we get an empty record at the end, if less than a hundred.
              count -= - 1;
            }
            resolve(count);
          }

          data = this.sort(data, sort);

          data = this.page(data, page, range);

          resolve(data);
        },
      );
    });
  }

  async update() {}

  async remove() {}

  async _fetch () {
    return new Promise((resolve, reject) => {

      if (typeof this.data !== 'undefined') {
        resolve(this.data);
      }

      Papa.parse(this.uri, {
        complete: (data) => {
          this.data = data.data;
          resolve(this.data);
        },
        download: true,
        preview: 100,
        header: true,
      });
    });
  }

  _query(data, query) {
    let queried = data;
    if (query) {
      // Searches across fields.
      if (Array.isArray(query)) {
        queried = query.reduce((filteredSoFar, nextFilter) => {
          return filteredSoFar.filter(row => {
            return (row[nextFilter.id] + "").includes(nextFilter.value);
          });
        }, queried);
      } else { // Searches across all data.
        queried = queried.reduce((acc, doc) => {
          const haystack = JSON.stringify(doc);
          const needleRegExp = new RegExp(query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&'), 'i');
          const result = needleRegExp.test(haystack);
          if (result) {
            acc.push(doc);
          }
          return acc;
        }, []);
      }
    }
    return queried;
  }

  page(data, page, range) {
    let paged = data;
    if (page !== null && range !== null) {
      paged = paged.slice(range * page, range * page + range);
    }
    return paged;
  }

  sort(data, sort) {
    let sorted = data;
    if (sort) {
      sorted = _.orderBy(
        sorted,
        sort.map((srt) => {
          return row => {
            if (row[srt.id] === null || row[srt.id] === undefined) {
              return -Infinity;
            }
            return typeof row[srt.id] === 'string'
              ? row[srt.id]// .toLowerCase()
              : row[srt.id];
          };
        }),
        sort.map((d) => (d.desc ? 'desc' : 'asc')),
      );
    }
    return sorted;
  }
}

export class dkan extends Datastore {
  constructor(id, columns) {
    super();
    this.id = id;
    this.columns = columns;
  }

  async getColumns() {
    return new Promise((resolve) => {
      resolve(this.columns);
    });
  }

  async query(q = null, fields = null, facets = null, range = 0, page = null, sort = null, count = false) {
    if (sort === null) {
      sort = [];
    }

    let newQ = [];
    if (q !== null) {
      newQ = JSON.parse(JSON.stringify(q));
    }

    newQ.map((v) => {
      v.value = `%25${v.value}%25`;
      return v;
    });

    return this.fetch(range, page * range, newQ, sort[0], count);
  }

  // async update() {}

  // async remove() {}

  async fetch(limit, offset, where, sort, count) {
    let query = '';

    let whereString = '';

    if (where.length !== 0) {
      const whereClauses = [];

      where.forEach((v, i) => {
        whereClauses[i] = `${v.id} = '${v.value}'`;
      });

      whereString = `[WHERE ${whereClauses.join(' AND ')}]`;
    }

    let sortString = '';

    if (typeof (sort) === 'object') {
      sortString = `[ORDER BY ${sort.id}`;
      if (sort.desc === false) {
        sortString += ' ASC]';
      } else {
        sortString += ' DESC]';
      }
    }
    let fields = '';
    let limitString = '';

    if (count) {
      fields = 'COUNT(*)';
    } else {
      fields = '*';
      limitString = `[LIMIT ${limit} OFFSET ${offset}]`;
    }
    query = `/sql/[SELECT ${fields} FROM ${this.id}] ${whereString} ${sortString} ${limitString};`;
    return new Promise((resolve) => {
      axios.get(`http://dkan/api/v1${query}`).then(
        (response) => {
          if (count && response.data[0]) {
            resolve(response.data[0].expression);
          } else {
            this.data = response.data;
            resolve(this.data);
          }
        },
        (error) => {
          this.data = [];
          resolve(error);
        },
      );
    });
  }
}

const datastore = {
  file,
  dkan,
};

export default datastore;
