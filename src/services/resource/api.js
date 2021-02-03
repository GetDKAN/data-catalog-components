import axios from 'axios';

export const getDatastoreInfo = async (rootUrl, id) => {
    const { data } = await axios({
        method: 'GET',
        operationId: 'getDatastoreInfo',
        baseURL: rootUrl,
        url: `/datastore/imports/${id}`
    })

    return data
}

export const runSqlQuery = async (rootUrl, query) => {
  const { data } = await axios({
    method: 'GET',
    operationId: 'runSqlQuery',
    baseURL: rootUrl,
    url: `/datastore/sql/?query=${query}`
  })

  return data
}
