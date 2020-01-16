import React, { useEffect, useReducer } from "react";
import SearchListItem from "../../components/SearchListItem";
import SearchInput from "../../components/SearchInput";
import Pagination from "react-js-pagination";
import SearchSort from "../../components/SearchSort";
import { searchReducer, defaultSearchState, SearchDispatch } from "../../services/search/search_tools";

const Search = () => {

  defaultSearchState.pageSize = 2;
  // Initialize the useReducer hook using the imported searchState and reducer.
  const [searchState, dispatch] = useReducer(searchReducer, defaultSearchState);
  const { items, totalItems, query, page, pageSize, sort } = searchState;

  // Fetch data on mount and when query changes.
  useEffect(() => {
    let info = getData(query, page, pageSize, sort);
    
    dispatch({
      type: 'GET_SEARCH_DATA',
      data: {
        totalItems: info.total,
        items: info.items,
        facetsResults: {}
      }});

  }, [query, page, pageSize, sort]);

  function getData(query, page, pageSize, sort) {
    let items = [
      {title: "Hello", description: "Goodbye", date: 1},
      {title: "Hola", description: "Chao", date: 3},
      {title: "Bonjour", description: "Au revoir", date: 2},
    ]

    items.sort((a, b) => {
      let comparison = 0;
      if (a[sort] > b[sort]) {
        comparison = 1;
      } else if (a[sort] < b[sort]) {
        comparison = -1;
      }
      return comparison;
    })

    if (query) {
      items = items.filter((item) => {
        return (item.title == query || item.description == query)
      });
    }

    const total = items.length;

    const start = (page * pageSize) - pageSize;
    items = items.splice(start, pageSize);
    return {total: total, items: items};
  }

  return (
    <SearchDispatch.Provider value={{ searchState, dispatch }}>
        <SearchInput
            onChangeFunction={(e) =>
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
          options={ [
            { value: 'date', label: 'Date' },
            { value: 'title', label: 'Alphabetical' },
          ] }
          currentValue={searchState.sort}
        />
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
          onChange={event =>
            dispatch({ type: "UPDATE_CURRENT_PAGE", data: { page: event } })
          }
        />
    </SearchDispatch.Provider>
  );
};

export default Search;