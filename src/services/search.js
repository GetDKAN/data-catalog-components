/* eslint-disable max-classes-per-file */
import lunr from 'lunr';

class Search {
  async init() {
    return {};
  }

  /**
   * Queries the records.
   *
   * @param {string} term - Query string to search with.
   * @param {array | string} fields - Array of arrays, [field, value] to
   * search through or a single string.
   * facets.
   * @param {number} pageSize - Number of results to return.
   * @param {number} page - The offset of results to return.
   * @param {array} sort - An array of sorts [field, sortType].
   *
   * @return {object}
   *  Object with {
   *    time: query time (number)
   *    total: total number of results (number)
   *    error: errors (boolean)
   *    errorMessage: error message (string)
   *    results: array of results (array)
   *  Array of object results.
   */
  async query(term = null, fields = null, pageSize = null, page = null, sort = null) {}

  /**
   * Validates methods for funcitons.
   */
  static validate(items, types) {}

  static querObjDefaults () {
    return {
      time: null,
      total: null,
      error: false,
      errorMessage: '',
      results: [],
    };
  }

  static error(message) {
    return { errorMessage: `Error ${message}`, error: true };
  }

  async loadFacets(items, facets) {
    const that = this;
    const pageSizeFacets = 1000;
    const facetsTotal = that.getFacetInitialTotal(facets, items);

    const facetsResults = {};

    for (var facet in this.facets) {
      facetsResults[facet] = {};
      if (facetsTotal[facet]) {
        facetsTotal[facet].forEach((i) => { // eslint-disable-line no-loop-func
          facetsResults[facet][i] = (facetsResults[facet][i]||0)+1;
        });
      }
    };

    // TODO: separate into func.
    const facetsSorted = {};
    for (var fact in this.facets) {
      facetsSorted[fact] = [];
      facetsSorted[fact] = Object.entries(facetsResults[fact]).sort((a,b) => {
        return (a[1] > b[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0)
      });
    };

    // TODO:
    const facetsPaged = {};
    for (var fac in facets) {
      facetsPaged[fac] = facetsSorted[fac].slice(0, pageSizeFacets);
    };
    return facetsPaged;
  }

  getFacetValueHelper(doc, field) {
    if (doc == null) {
      return [];
    }
    if ((typeof doc) == 'object') {
      const pieces = field.split('.');
      const current = pieces.shift();
      if (current === '*') {
        if (Array.isArray(doc)) {
          let values = [];
          let i;

          const join = pieces.join('.');

          for (i = 0; i < doc.length; i += 1) {
            values = values.concat(this.getFacetValueHelper(doc, i + "." + join));
          }
          return values;
        } else {
          return [];
        }
      }

      if (doc[current] !== undefined) {
        // This is the property no need to recurse further.
        if (pieces.length === 0) {
          if (doc == null) {
          }
          const value = doc[current];
          return [value];
        } else {
          return [].concat(this.getFacetValueHelper(doc[current], pieces.join('.')))
        }
      } else {
        return [];
      }
    } else {
      return [];
    }
  }

  getFacetValue(doc, facet, facets) {
    const value = this.getFacetValueHelper(doc, facets[facet].field);
    return value
  }

  getFacetInitialTotal(facets, results) {

    const that = this;
    const facetsTotal = [];
    results.forEach((result) => {
      for (var facet in facets) {
        const doc = that.getFacetValue(result, facet, facets);
        facetsTotal[facet] = !facetsTotal[facet] ? [] : facetsTotal[facet];
        // We want to flatten the results so there is one big array instead of a
        // combo of array results.
        if (Array.isArray(doc)) {
          doc.forEach((item, x) => { // eslint-disable-line no-loop-func
            facetsTotal[facet].push(item);
          });
        }
        else {
          if (doc && Object.keys(doc).length !== 0 ) {
            facetsTotal[facet].push(doc);
          }
        }
      }
    });
    return facetsTotal;
  }


  sort(sort, items) {
    const that = this;
    if (sort === 'date') {
      return items.sort(that.dateCompare);
    } else if (sort === 'alpha') {
      return items.sort(that.alphaCompare);
    } else if (sort === 'relevance') {
      return items;
    }
    return items;
  }

  dateCompare(a,b) {
    if (a.modified > b.modified)
      return -1;
    if (a.modified < b.modified)
      return 1;
    return 0;
  }

  alphaCompare(a,b) {
    if (a.title < b.title)
      return -1;
    if (a.title > b.title)
      return 1;
    return 0;
  }

}

export class Lunr extends Search {
  async init(data, facets = null) {
    this.facets = facets;
    this.index = lunr.Index.load(data.index);
    this.docs = data.docs;
  }

  async query(
    term = null, fields = null, pageSize = null, page = null, sort = null,
  ) {
    const start = performance.now();
    let searchQuery = '';
    let where = [];
    let paged = [];
    let sorted = [];
    let keyword = [];
    let theme = [];
    fields.forEach((field) => {
      const key = field[0].toLowerCase();
      let value = field[1];
      // These are common words/characters not in search index.
      const replaceWords = ['-', '&', 'and', ' to'];
      replaceWords.map((word) => {
        const re = new RegExp(word, 'g');
        value = value.replace(re, '');
        return value;
      });

      if (key === 'tags') {
        keyword = keyword.concat(value.split(' '));
      }
      if (key === 'topics') {
        theme = theme.concat(value.toLowerCase().split(' '));
      }
    });
    // Add + to title and description to make sure it is required in the results
    // const searchString = term ? `title:${term}^10 description:${term}^10` : ``;
    const searchString = term ? `+*${term}* ` : '';
    const themeString = theme.length ? `+theme:${theme.join('* +theme:*')}* ` : '';
    const keywordString = keyword.length ? `+keyword:${keyword.join('* +keyword:*')}* ` : '';

    if (themeString) {
      theme.find((term) => {
        // If 'hospitals' only, add a -longterm to remove those from the results.
        if (term === 'hospitals' && theme.length === 1) {
          searchQuery += '+theme:hospitals* -theme:longterm ';
          return searchQuery;
        }
        searchQuery += themeString;
        return searchQuery;
      });
    }

    if (keywordString) {
      searchQuery += keywordString;
    }

    if (searchString) {
      searchQuery += `${searchString}`;
    }

    const searchResults = this.index.search(searchQuery);
    const items = await this.mapResults(searchResults);
    where = items;

    sorted = this.sort(sort, where);
    const offset = (page - 1) * pageSize;
    paged = paged && pageSize ? sorted.slice(offset, offset + pageSize) : sorted;

    const facetsResults = this.facets ? await this.loadFacets(items, this.facets) : [];
    const total = where.length;
    const results = paged;
    const end = performance.now();
    const time = end - start;
    const error = {};
    return {
      time,
      facetsResults,
      total,
      error,
      // TODO: Only return selected fields.
      fields: [],
      results,
    };
  }

  async mapResults(items) {
    return items.map((item) => {
      const result = this.docs.find((doc) => item.ref === doc.ref);
      const doc = Object.assign(result.doc, item);
      return doc;
    });
  }

  async resultCount(results) {
    return results.length;
  }


}

export class simpleSearch extends Search {

  async query(term = null, fields = null, pageSize = null, page = null, sort = null) {
    const start = performance.now();
    let fieldsToReturn = null;
    let where = [];
    let queried = [];
    let paged = [];
    let sorted = [];

    if (fields) {
      fieldsToReturn = Object.keys(fields).map(key => fields[key]);
    }
    if (fields && fields.length > 0) {
      fields.forEach((field) => {
        const key = field[0];
        const value = field[1];
        where = this.index.filter((item) => {
          const facetValue = this.getFacetValue(item, key, this.facets);
          if (facetValue === value) {
            return true;
          } else if (Array.isArray(facetValue) && facetValue.indexOf(value) > -1) {
            return true;
          }
          if (key in item) {
            if (item[key] === value) {
              return true;
            } else if (Array.isArray(item[key])) {
              if (item[key].indexOf(value) > -1) {
                return true;
              }
            }
          }
          return false;
        });
      });
    } else {
      where = this.index;
    }
    if (term) {
      queried = where.reduce((acc, doc) => {
        const haystack = JSON.stringify(doc);
        const needleRegExp = new RegExp(term.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), 'i');
        const result = needleRegExp.test(haystack);
        if (result) {
          acc.push(doc);
        }
        return acc;
      }, []);
    } else {
      queried = where;
    }
    const total = queried.length;

    const facetsResults = this.facets ? await this.loadFacets(queried, this.facets) : [];
    sorted = this.sort(sort, queried);
    const offset = (page - 1) * pageSize;
    paged = paged && pageSize ? sorted.slice(offset, offset + pageSize) : sorted;

    const results = paged;
    const end = performance.now();
    const time = end - start;
    const error = false;
    return {
      time,
      facetsResults,
      total,
      error,
      // TODO: Only return selected fields.
      fields: fieldsToReturn,
      results,
    };
  }

  async init(data, facets = null) {
    this.facets = facets;
    this.index = data.docs.map((item) => item.doc);
  }

  async getAll(index) {
    return index;
  }

  async resultCount(results) {
    return results.length;
  }

}

const search = {
  simpleSearch,
  Lunr,
};

export default search;
