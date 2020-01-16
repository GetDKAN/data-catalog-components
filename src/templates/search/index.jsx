import React, { useEffect, useReducer } from "react";
import SearchListItem from "../../components/SearchListItem";
import SearchInput from "../../components/SearchInput";
import Pagination from "react-js-pagination";
import { searchReducer, defaultSearchState, SearchDispatch } from "../../services/search/search_tools";

const Search = () => {

  defaultSearchState.pageSize = 2;
  // Initialize the useReducer hook using the imported searchState and reducer.
  const [searchState, dispatch] = useReducer(searchReducer, defaultSearchState);
  const { items, totalItems, query, page, pageSize } = searchState;

  // Fetch data on mount and when query changes.
  useEffect(() => {
    let info = getData(query, page, pageSize);
    
    dispatch({
      type: 'GET_SEARCH_DATA',
      data: {
        totalItems: info.total,
        items: info.items,
        facetsResults: {}
      }});

  }, [query, page, pageSize]);

  function getData(query, page, pageSize) {
    let items = [
      {title: "Hello", description: "Goodbye"},
      {title: "Hola", description: "Chao"},
      {title: "Bonjour", description: "Au revoir"},
    ]

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