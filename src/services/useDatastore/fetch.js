import axios from "axios";
import qs from "qs";

export async function fetchDataFromQuery(
  id,
  rootUrl,
  options,
  additionalParams
) {
  const {
    keys,
    limit,
    offset,
    conditions,
    sort,
    groupings,
    prepareColumns,
    properties,
    setValues,
    setCount,
    setColumns,
    setLoading,
    setSchema,
  } = options;
  if (!id) {
    // TODO: Throw error
    return false;
  }
  if (typeof setLoading === "function") {
    setLoading(true);
  }
  return await axios({
    method: "GET",
    url: `${rootUrl}/datastore/query/${id}`,
    params: {
      keys: keys,
      limit: limit,
      offset: offset,
      conditions: conditions,
      sorts: sort,
      properties: properties,
      groupings: groupings,
      ...additionalParams,
    },
    paramsSerializer: {
      serialize: qs.stringify
    },
    // paramsSerializer: (params) => {
    //   return qs.stringify(params);
    // },
  }).then((res) => {
    const { data } = res;
    const propertyKeys =
      data.schema[id] && data.schema[id].fields
        ? Object.keys(data.schema[id].fields)
        : [];
    setValues(data.results), setCount(data.count);
    if (propertyKeys.length) {
      setColumns(prepareColumns ? prepareColumns(propertyKeys) : propertyKeys);
    }
    setSchema(data.schema);
    if (typeof setLoading === "function") {
      setLoading(false);
    }
    return data;
  });
}
