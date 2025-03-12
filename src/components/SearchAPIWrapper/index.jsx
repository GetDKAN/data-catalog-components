import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useSearchParams } from "react-router-dom";
import { useQuery, useMutation } from '@tanstack/react-query';
import qs from "qs";
import SearchAPIContext from './SearchAPIContext';

function getSortOrder(sort) {
  return sort === "title" ? "asc" : "desc";
}


const defaultOptions = {
  fulltext: "",
  page: 1,
  pageSize: 10,
  sort: "modified",
  facetKeys: [],
  getSortOrder: getSortOrder,
}


// fulltext=
// &keyword=election,economy 
// &page=1
// &page-size=10
// &publisher__name=National%20Health%20Council
// &sort=modified
// &sort-order=desc
// &theme=City%20Planning
// &facets=keyword

function setInitialFacets(params, facetKeys) {
  let initialFacets = {};
  facetKeys.forEach((key) => {
    if(params[key]) {
      initialFacets[key] = params[key].split(",");
    }
  });
  return initialFacets;
}


const SearchAPIWrapper = ({CustomContext, customQueryKey, rootUrl, children, options}) => {
  const joinedOptions = {
    ...defaultOptions,
    ...options
  }
  const location = useLocation();
  const params = Object.fromEntries(new URLSearchParams(location.search));
  const paramsRef = useRef(params);
  const [fulltext, setFulltext] = useState(params.fulltext ? params.fulltext : joinedOptions.fulltext);
  const [sort, setSort] = useState(params.sort ? params.sort : joinedOptions.sort);
  const [pageSize, setPageSize] = useState(params["page-size"] ? params["page-size"] : joinedOptions.pageSize);
  const [page, setPage] = useState(params.page ? params.page : joinedOptions.page);
  const [facets, setFacets] = useState(setInitialFacets(params, joinedOptions.facetKeys));
  let [, setSearchParams] = useSearchParams();
  const [fetchParams, setFetchParams] = useState("");
  const [enabled, setEnabled] = useState(false);

  // Fetch data using state that has been set.
  function fetchData() {
    console.log("param: ", fetchParams)
    return fetch(`${rootUrl}/search?${fetchParams}`).then(
      (res) => res.json(),
    )
  }

  const {status, data, error} = useQuery({
    queryKey: [customQueryKey, fetchParams],
    queryFn: () => fetchData(),
    enabled: enabled,
  });

  
  function search() {
    // Set new search params.
    const newParams = {
      fulltext: fulltext,
      "page-size": pageSize,
      sort: options.customSort ? options.customSort(sort) : sort,
      "sort-order": options.getSortOrder(sort),
      page: page,
    };
    const facetKeys = Object.keys(facets);
    if (facetKeys.length > 0) {
      facetKeys.forEach((key) => {
        if(facets[key].length > 0) {
          newParams[key] = facets[key].join(",");
        }
      })
    }
    if (JSON.stringify(newParams) === JSON.stringify(paramsRef.current) && enabled) {
      return;
    }
    paramsRef.current = newParams;
    setSearchParams(newParams)
    setFetchParams(qs.stringify(newParams))
    if(!enabled) {
      setEnabled(true);
    }
  }

  useEffect(() => {
    search()
  }, [pageSize, sort, page, facets])

  function updateFacets(type, name, checked) {
    const copiedFacets = {...facets}
    const facetKeys = Object.keys(copiedFacets);
    if (facetKeys.includes(type)) {
      const facetType = copiedFacets[type];
      if (checked) {
        facetType.push(name)
      } else {
        const nameIndex = facetType.indexOf(name);
        if (nameIndex !== -1) {
          facetType.splice(nameIndex, 1);
        }
        if (facetType.length === 0) {
          delete copiedFacets[type]
        }
      }
    } else {
      copiedFacets[type] = [name]
    }
    setFacets(copiedFacets)
  }

  return(
    <CustomContext.Provider value={{
      status: status,
      data: data,
      search: search,
      fulltext: {
        value: fulltext,
        set: setFulltext,
      },
      pageSize: {
        value: pageSize,
        set: setPageSize,
      },
      sort: {
        value: sort,
        set: setSort
      },
      page: {
        value: page,
        set: setPage,
      },
      facets: {
        value: facets,
        set: updateFacets
      }
    }}>
      {children}
    </CustomContext.Provider>
  );
}

export default SearchAPIWrapper;
