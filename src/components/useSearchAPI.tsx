import React, { useState, useEffect } from "react";
import qs from "qs";
import { useQuery } from "@tanstack/react-query"

type SearchAPIFacet = {
  name: string;
  total: string;
  type: string;
}

type UseSearchAPIResult = {
  status: any;
  data: {
    facets: SearchAPIFacet[];
    results: Object;
    total: string;
  };
  error: any;
  searchParams: {
    value: UseSearchAPIOptions,
    set: Function,
    defaultParams: Object,
  },
  facets: {
    value: any,
    set: Function,
  }
}

type UseSearchAPIOptions = {
  pageSize?: number;
  page?: number;
  fulltext?: string;
  sortOrder?: string;
  sort?: string;
}

function setInitialFacets(params, facetKeys) {
  let initialFacets = {};
  facetKeys.forEach((key) => {
    if(params[key]) {
      initialFacets[key] = params[key].split(",");
    }
  });
  return initialFacets;
}



const useSearchAPI = (
  rootUrl: string,
  queryKey: string,
  options: UseSearchAPIOptions,
  defaultOptions: Object
): UseSearchAPIResult => {
  const [facets, setFacets] = useState(setInitialFacets({}, []));
  const [searchParams, setSearchParams] = useState<UseSearchAPIOptions>(defaultOptions);
  const [defaultParams, setDefaultParams] = useState<Object>(defaultOptions);
  const [fetchParams, setFetchParams] = useState("");
  const [enabled, setEnabled] = useState(false);
  const fetchUrl: string = `${rootUrl}/search?${fetchParams}`;
  const {status, data, error} = useQuery({
    queryKey: [queryKey, fetchParams],
    queryFn: (): Promise<any> => {
      return fetch(fetchUrl).then(res => res.json());
    },
    enabled: enabled,
  });


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

  function search() {
    const newParams = {...searchParams};
    const facetKeys = Object.keys(facets);
    if (facetKeys.length > 0) {
      facetKeys.forEach((key) => {
        if(facets[key].length > 0) {
          newParams[key] = facets[key].join(",");
        }
      })
    }

    const newParamString: string = qs.stringify(newParams)
    setFetchParams(newParamString);
    
    if(!enabled) {
      setEnabled(true);
    }
  }

  useEffect(() => {
    search();
  }, [searchParams, facets])

  return {
    status,
    data,
    error,
    searchParams: {
      value: searchParams,
      set: setSearchParams,
      defaultParams: defaultParams,
    },
    facets: {
      value: facets,
      set: updateFacets
    },
  }
}

export default useSearchAPI;
