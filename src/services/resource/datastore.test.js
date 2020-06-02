import axios from 'axios';
import { dkan } from './datastore';

jest.mock('axios');
const datastoreImports = {
  numOfColumns: 4,
  columns: ['dkan', 'drupal', 'react', 'open_data'],
  numOfRows: 45,
};
const datastoreCount = [{ expression: 45 }];
const datastoreItems = [
  {
    dkan: 2,
    drupal: 8,
    react: 'javascript',
    open_data: 'foss',
  },
  {
    dkan: 2,
    drupal: 8,
    react: 'javascript',
    open_data: 'foss',
  },
  {
    dkan: 2,
    drupal: 7,
    react: 'gatsby',
    open_data: 'foss',
  },
  {
    dkan: 4,
    drupal: 9,
    react: 'ecmascript',
    open_data: 'foss',
  },
  {
    dkan: 2,
    drupal: 8,
    react: 'javascript',
    open_data: 'foss',
  },
];


const identifier = '1234-abcd';
const rootUrl = 'http://dkan';
const store = new dkan(identifier, datastoreImports.columns, rootUrl);

describe('DKAN Datastore', () => {
  it('builds a new store', () => {
    expect(store).toEqual({
      id: identifier,
      columns: datastoreImports.columns,
      rootUrl,
    });
  });


  it('returns datastore info', async () => {
    axios.get.mockResolvedValue({
      data: datastoreImports,
    });
    const datastore = await store.getDatastoreInfo();
    expect(datastore).toEqual(datastoreImports);
  });

  it('returns columns', async () => {
    const columns = await store.getColumns();
    expect(columns).toEqual(datastoreImports.columns);
  });

  it('returns datastore info count', async () => {
    axios.get.mockResolvedValue({
      data: datastoreCount,
    });
    const datastore = await store.query(null, null, null, null, null, null, true, false);
    expect(datastore).toEqual({
      count: 1,
      data: [{
        expression: 45,
      }],
    });
  });

  it('returns datastore info', async () => {
  // with limit, with offset, with sort
  // q = null, fields = null, facets = null, range = null, page = null, sort = null, count = false, showDBColumnNames
    axios.get.mockResolvedValue({
      data: [{
        dkan: 4,
        drupal: 9,
        react: 'ecmascript',
        open_data: 'foss',
      }],
    });
    const datastore = await store.query(
      [{ id: 'react', value: 'ecmascript' }], null, null, null, null, null, true, false,
    );
    expect(datastore).toEqual({
      count: 1,
      data: [{
        dkan: 4,
        drupal: 9,
        react: 'ecmascript',
        open_data: 'foss',
      }],
    });
  });

  // it('returns datastore info with db columns', async () => {
  //   axios.get.mockResolvedValue({
  //     data: datastoreImports,
  //   });
  //   const datastore = await store.getDatastoreInfo();
  //   expect(datastore).toEqual(datastoreImports);
  // });
});
