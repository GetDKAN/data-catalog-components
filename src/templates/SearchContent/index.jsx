import React, { useContext } from 'react';
import Loader from 'react-loader-advanced';
import LoadingSpin from 'react-loading-spin';
import Pagination from 'react-js-pagination';

import SearchResultsMessage from '../../components/SearchResultsMessage';
import SearchListItem from '../../components/SearchListItem';
import SearchInput from '../../components/SearchInput';
import SearchPaginationResults from '../../components/SearchPaginationResults';
import SearchPageSizer from '../../components/SearchPageSizer';
import { SearchDispatch } from '../../services/search/search_defaults';

const SearchContent = () => {
  const { searchState, dispatch, defaultFacets } = useContext(SearchDispatch);
  const {
    items, fulltext, totalItems, selectedFacets, loading,
  } = searchState;
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
          <Loader
            hideContentOnLoad
            backgroundStyle={{ backgroundColor: '#f9fafb' }}
            foregroundStyle={{ backgroundColor: '#f9fafb' }}
            show={loading}
            message={<LoadingSpin width="3px" primaryColor="#007BBC" />}
          >
            <ol>
              {items.map((item) => (
                <SearchListItem key={item.identifier} item={item} />
              ))}
            </ol>
          </Loader>
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
              itemsCountPerPage={searchState['page-size']}
              totalItemsCount={totalItems}
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
