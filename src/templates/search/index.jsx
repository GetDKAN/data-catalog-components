import React, { useEffect, useReducer } from "react";
import SearchListItem from "../../components/SearchListItem";
import SearchInput from "../../components/SearchInput";
import Pagination from "react-js-pagination";
import SearchSort from "../../components/SearchSort";
import SearchFacetBlock from "../../components/SearchFacetBlock";
import {
  searchReducer,
  defaultSearchState,
  SearchDispatch
} from "../../services/search/search_tools";

const Search = () => {
  defaultSearchState.pageSize = 2;

  // Initialize the useReducer hook using the imported searchState and reducer.
  const [searchState, dispatch] = useReducer(searchReducer, defaultSearchState);
  const {
    items,
    totalItems,
    query,
    page,
    pageSize,
    sort,
    selectedFacets
  } = searchState;

  // Fetch data on mount and when query changes.
  useEffect(() => {
    console.log(selectedFacets, "use effect");

    let info = getData(query, page, pageSize, sort, selectedFacets);

    dispatch({
      type: "GET_SEARCH_DATA",
      data: {
        totalItems: info.total,
        items: info.items
      }
    });

    dispatch({
      type: "UPDATE_FACETS",
      data: {
        facets: info.facets
      }
    });
  }, [query, page, pageSize, sort, selectedFacets]);

  function getData(query, page, pageSize, sort, selectedFacets) {
    let items = [
      { title: "Hello", description: "Goodbye", date: 1, language: "English" },
      { title: "Hola", description: "Chao", date: 3, language: "Spanish" },
      {
        title: "Bonjour",
        description: "Au revoir",
        date: 2,
        language: "French"
      }
    ];

    items.sort((a, b) => {
      let comparison = 0;
      if (a[sort] > b[sort]) {
        comparison = 1;
      } else if (a[sort] < b[sort]) {
        comparison = -1;
      }
      return comparison;
    });

    if (query) {
      items = items.filter(item => {
        return item.title == query || item.description == query;
      });
    }

    if (selectedFacets.length > 0) {
      let selectedFacet = selectedFacets[0];

      items = items.filter(item => {
        if (item.language === selectedFacet.name) {
          return true;
        }
        return false;
      });
    }

    let facets = getFacets(items);

    const total = items.length;

    const start = page * pageSize - pageSize;
    items = items.splice(start, pageSize);
    return { total: total, items: items, facets };
  }

  function getFacets(items) {
    let facets = {
      English: { type: "Language", name: "English", total: 0 },
      Spanish: { type: "Language", name: "Spanish", total: 0 },
      French: { type: "Language", name: "French", total: 0 }
    };

    items.forEach(item => {
      if (facets.hasOwnProperty(item.language)) {
        facets[item.language].total++;
      } else {
        facets[item.language] = {
          type: "Language",
          name: item.language,
          total: 1
        };
      }
    });

    return Object.values(facets);
  }

  return (
    <SearchDispatch.Provider value={{ searchState, dispatch }}>
      <SearchInput
        onChangeFunction={e =>
          dispatch({ type: "UPDATE_QUERY", data: { query: e.target.value } })
        }
        onResetFunction={() => dispatch({ type: "RESET_QUERY" })}
        showSubmit={false}
        value={query}
        resetContent={"Clear text"}
      />
      <SearchSort
        sortFunc={e =>
          dispatch({ type: "UPDATE_SORT", data: { sort: e.target.value } })
        }
        options={[
          { value: "date", label: "Date" },
          { value: "title", label: "Alphabetical" }
        ]}
        currentValue={searchState.sort}
      />
      <SearchFacetBlock facetType={"Language"} />
      <ol>
        {items.map(item => (
          <SearchListItem key={item.identifier} item={item} />
        ))}
      </ol>
      <Pagination
        hideDisabled
        activePage={page}
        itemsCountPerPage={pageSize}
        totalItemsCount={totalItems}
        pageRangeDisplayed={5}
        onChange={e =>
          dispatch({ type: "UPDATE_CURRENT_PAGE", data: { page: e } })
        }
      />
    </SearchDispatch.Provider>
  );
};

export default Search;
