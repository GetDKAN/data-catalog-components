import axios from 'axios';

const datastore = {
  create: function(rootUrl, id) {
    const entity = Object.create(this);
    entity.rootUrl = rootUrl;
    entity.id = id;
    entity.columns = null;
    return entity;
  },
  getDatastoreInfo: async function() {
    return await axios.get(`${this.rootUrl}/datastore/imports/${this.id}`)
      .then((data) => {
        if (data) {
          return data.data;
        }
        return null;
      })
      .catch((error) => console.error(error));
  },
  query: async function(q = null, fields = null, facets = null, range = null, page = null, sort = null, count = false, showDBColumnNames) {
    this.showDBColumnNames = showDBColumnNames;
    if (sort === null) { sort = [] };
    let new_q = [];
    if (q !== null) { new_q = JSON.parse(JSON.stringify(q)) };
    new_q.map((v) => {
      v.value = `%25${v.value}%25`;
      return v;
    });
    return this.fetch(range, page * range, new_q, sort[0], count);
  },
  fetch: async function(limit, offset, where, sort, count, showDBColumnNames) {
    let query = '';
    let where_string = '';

    if (where.length !== 0){
      const where_clauses = [];
      where.forEach((v, i) => {
        where_clauses[i] = `${v.id} = "${v.value.replace('"', '')}"`;
      });
      where_string = `[WHERE ${where_clauses.join(' AND ')}]`;
    }

    let sort_string = '';
    if(typeof(sort) === 'object') {
      sort_string = `[ORDER BY ${sort.id}]`;
      if(sort.desc) {
        sort_string += 'DESC]';
      }
      else {
        sort_string += 'ASC]';
      }
    }

    let fields = '';
    let limit_string = '';
    if(count) {
      fields = 'COUNT(*)';
    } else {
      fields = '*';
      limit_string = `[LIMIT ${limit} OFFSET ${offset}]`;
    }

    const dbColumns = showDBColumnNames ? '$show-db-columns' : '';
    query = `/datastore/sql/?query=[SELECT ${fields} FROM ${this.id}]${where_string}${sort_string}${limit_string};${dbColumns}`;
    return await axios.get(this.rootUrl + query)
      .then((res) => {
        this.data = response.data;
        return ({data: this.data, count: this.data.length});
      })
      .catch((error) => {
        this.data = [];
        console.error(error);
        return this.data;
      });
  }
}

export default datastore;
