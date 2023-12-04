import { useState, useEffect, useRef } from "react";
import { fetchDataFromQuery } from "./fetch";

const useDatastore = (
  resourceId,
  rootAPIUrl,
  options,
  additionalParams = {}
) => {
  const keys = options.keys ? options.keys : true;
  const { prepareColumns } = options;
  const [manual, setManual] = useState(options.manual ? options.manual : false);
  const [requireConditions, setRequireConditions] = useState(
    options.requireConditions ? options.requireConditions : false
  );
  const [values, setValues] = useState([]);
  const [id, setResource] = useState(resourceId);
  const [rootUrl, setRootUrl] = useState(rootAPIUrl);
  const [limit, setLimit] = useState(options.limit ? options.limit : 20);
  const [count, setCount] = useState(null);
  const [columns, setColumns] = useState([]);
  const [offset, setOffset] = useState(options.offset ? options.offset : 0);
  const [loading, setLoading] = useState(false);
  const [conditions, setConditions] = useState(
    options.conditions ? options.conditions : undefined
  );
  const [sort, setSort] = useState(options.sort ? options.sort : undefined);
  const [groupings, setGroupings] = useState(
    options.groupings ? options.groupings : undefined
  );
  const [schema, setSchema] = useState({});
  // const [joins, setJoins] = useState()
  const [properties, setProperties] = useState(
    options.properties ? options.properties : undefined
  );
  const prevLimitRef = useRef();
  const prevOffsetRef = useRef();

  useEffect(() => {
    prevLimitRef.current = limit;
    prevOffsetRef.current = offset;
  });
  const prevLimit = prevLimitRef.current;
  const prevOffset = prevOffsetRef.current;

  function fetchData() {
    let newOffset =
      prevLimit === limit ? (prevOffset !== offset ? offset : 0) : 0;
    setOffset(newOffset);
    fetchDataFromQuery(
      id,
      rootUrl,
      {
        keys,
        limit,
        offset: newOffset,
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
        setProperties,
      },
      additionalParams
    );
  }

  useEffect(() => {
    if (!loading && !manual) {
      if (!requireConditions) {
        fetchData();
      } else if (requireConditions) {
        if (conditions && conditions.length) {
          fetchData();
        } else {
          setCount(null);
          setValues([]);
        }
      }
    }
  }, [id, rootUrl, offset, conditions, sort, limit, requireConditions]);

  return {
    loading,
    values,
    count,
    columns,
    limit,
    offset,
    schema,
    conditions,
    properties,
    setProperties,
    setGroupings,
    setResource,
    setRootUrl,
    setLimit,
    setOffset,
    setConditions,
    setSort,
    setManual,
    setRequireConditions,
    fetchData,
  };
};

export default useDatastore;
