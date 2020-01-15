import React, { useEffect, useReducer } from "react";
import SearchListItem from "../../components/SearchListItem";
import SearchInput from "../../components/SearchInput";
import { searchReducer, defaultSearchState, SearchDispatch } from "../../services/search/search_tools";

const Search = () => {

  // Initialize the useReducer hook using the imported searchState and reducer.
  const [searchState, dispatch] = useReducer(searchReducer, defaultSearchState);
  const { items, query } = searchState;

  // Fetch data on mount and when query changes.
  useEffect(() => {
    dispatch({
        type: 'GET_SEARCH_DATA',
        data: {
            totalItems: 10,
            items: [{
                identifier: 1,
                title: "I am the title",
                description: "And this is the description."
            },
            {
                identifier: 2,
                title: query,
                description: "And this is the description 2."
            }],
            facetsResults: {}
    }});
    
  }, [query]);

  async function getData(query) {
    const axios = require('axios').default;
    const response = await axios.get('http://dkan/api/1/search?fulltext=' + query);
    return response.data;
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
    </SearchDispatch.Provider>
  );
};

export default Search;