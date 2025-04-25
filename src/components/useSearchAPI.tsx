import { useState, useEffect } from "react";
import qs from "qs";
import { useQuery, UseQueryResult } from "@tanstack/react-query"

type SearchAPIFacet = { name: string; total: string; type: string; }
type SearchAPIResults = { facets: SearchAPIFacet[]; results: Object; total: string; }

type UseSearchAPIResult = UseQueryResult<SearchAPIResults> & {
  searchParams: {
    value: UseSearchAPIOptions,
    set: Function,
    urlString: string;
  },
  facets: {
    value: any,
    set: Function,
  },
}

interface UseSearchFacets extends Record<string, string[]> {}
interface UseSearchAPIOptions extends Record<string, string | number> {}

function setInitialFacets(params: UseSearchAPIOptions, facetKeys: string[]) {
  let initialFacets: UseSearchFacets = {};
  facetKeys.forEach((key) => {
    // Check to see if there is a param matching facet key.
    if(params[key] && typeof params[key] === "string") {
      // Param value is comma separated string which needs to be an array.
      initialFacets[key] = params[key].split(",");
    }
  });
  return initialFacets;
}

const useSearchAPI = (
  rootUrl: string,
  queryKey: string,
  options: UseSearchAPIOptions,
  facetKeys: Array<string>,
): UseSearchAPIResult => {
  const [facets, setFacets] = useState<UseSearchFacets>(setInitialFacets(options, facetKeys));
  const [searchParams, setSearchParams] = useState<UseSearchAPIOptions>(options);
  const [fetchParams, setFetchParams] = useState("");
  const [enabled, setEnabled] = useState(false);
  const fetchUrl: string = `${rootUrl}/search?${fetchParams}`;
  const results = useQuery({
    queryKey: [queryKey, fetchParams],
    queryFn: (): Promise<any> => {
      return fetch(fetchUrl).then(res => res.json());
    },
    enabled: enabled,
  });

  function updateFacets(type: string, name: string, checked: boolean): void {
    // Duplicate current facets.
    const copiedFacets = {...facets};
    // Build an array of facet keys.
    const facetKeys = Object.keys(copiedFacets);
    // If type is already in copied facets.
    if (facetKeys.includes(type)) {
      const facetType = copiedFacets[type];
      if (checked) {
        // Add to array for type.
        facetType.push(name)
      } else {
        // Remove from array for type. 
        const nameIndex = facetType.indexOf(name);
        if (nameIndex !== -1) {
          facetType.splice(nameIndex, 1);
        }
        // If type has no facets left, remove key.
        if (facetType.length === 0) {
          delete copiedFacets[type]
        }
      }
    } else {
      // Add new key and value.
      copiedFacets[type] = [name]
    }
    // Update facet state.
    setFacets(copiedFacets)
  }

  function search() {
    const newParams = {...searchParams};
    const facetKeys = Object.keys(facets);
    if (facetKeys.length > 0) {
      facetKeys.forEach((key) => {
        if(facets[key].length > 0) {
          // Turn array of keys into single comma separated string.
          newParams[key] = facets[key].join(",");
        }
      })
    }
    const newParamString: string = qs.stringify(newParams)
    setFetchParams(newParamString);
    // Prevents extra request during first pass.
    if(!enabled) {
      setEnabled(true);
    }
  }

  useEffect(() => {
    search();
  }, [searchParams, facets])

  return {
    ...results,
    searchParams: {
      value: searchParams,
      set: setSearchParams,
      urlString: fetchParams
    },
    facets: {
      value: facets,
      set: updateFacets
    },
  }
}

export default useSearchAPI;
