import React, { useContext } from 'react';
import Pagination from 'react-js-pagination';
import SearchResultsMessage from '../../components/SearchResultsMessage';
import SearchListItem from '../../components/SearchListItem';
import SearchInput from '../../components/SearchInput';
import SearchPaginationResults from '../../components/SearchPaginationResults';
import SearchPageSizer from '../../components/SearchPageSizer';
import { SearchDispatch } from '../../services/search/search_defaults';
import { List } from 'react-content-loader';

const SearchContent = () => {
  const { searchState, dispatch, defaultFacets } = useContext(SearchDispatch);
  const { items, fulltext, totalItems, selectedFacets, loading } = searchState;
  const facetTypes = Object.keys(defaultFacets);

  return (
    <div className="dc-results-list col-md-8 col-sm-12">
      {items
      && (
        <div>
          <SearchInput
            placeholder="Type your search term here"
            showSubmit={false}
            srOnly
            value={fulltext}
            onChangeFunction={dispatch}
            onResetFunction={() => dispatch({ type: 'RESET_FULLTEXT' })}
            resetContent="Clear text"
          />
          <SearchResultsMessage
            searchTerm={fulltext}
            total={parseInt(totalItems, 10)}
            selectedFacets={selectedFacets}
            facetTypes={facetTypes}
            defaultFacets={defaultFacets}
            facetLimit={100}
            facetDelimiter=", "
            facetSeparator=" &amp; "
          />

          {loading ?
           <div>
             <List/>
           </div>  :
           <ol>
             {items.map((item) => (
               <li key={item.identifier}>
                 <SearchListItem item={item} />
               </li>
             ))}
           </ol>}

          <div className="dc-pagination-container">
            <SearchPaginationResults
              total={Number(totalItems)}
              pageSize={Number(searchState['page-size'])}
              currentPage={Number(searchState.page)}
            />
            <SearchPageSizer
              currentValue={Number(searchState['page-size'])}
              resizeFunc={(e) => dispatch({
                type: 'UPDATE_PAGE_SIZE',
                data: { 'page-size': e.target.value },
              })}
            />
            <Pagination
              hideDisabled
              activePage={searchState.page}
              itemsCountPerPage={Number(searchState['page-size'])}
              totalItemsCount={Number(totalItems)}
              pageRangeDisplayed={5}
              onChange={(e) => dispatch({
                type: 'UPDATE_CURRENT_PAGE',
                data: { page: e },
              })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchContent;
