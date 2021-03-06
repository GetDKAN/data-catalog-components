import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from 'reactstrap';
import SearchFacets from '../../components/SearchFacets';
import { SearchDispatch } from '../../services/search/search_defaults';
import { BulletList } from 'react-content-loader';

const SearchSidebar = ({ sortOptions }) => {
  const { searchState, dispatch, defaultFacets } = useContext(SearchDispatch);
  const { facetsResults, loading } = searchState;

  return (
    <div className="dc-search-sidebar col-md-4 col-sm-12">
      <div className="dc-search-sidebar-options">
        <Label for="dc-search-list-sort">Sort by:</Label>
        <Input
          type="select"
          name="dc-search-list-sort"
          id="dc-search-list-sort"
          onChange={(e) => {
            dispatch({ type: 'UPDATE_SORT', data: { sort: e.target.value } });
          }}
        >
          {sortOptions.map((sortOpt) => (
            <option
              key={sortOpt.field}
              value={sortOpt.field}
            >
              {sortOpt.label}
            </option>
          ))}
        </Input>
      </div>
      <div className="dc-search-sidebar-options">
        {loading ? <BulletList / > :
        facetsResults && facetsResults.length
          && (
            <SearchFacets
              facetsConfig={defaultFacets}
              facetsResults={facetsResults}
              selectedFacets={searchState.selectedFacets}
              dispatch={dispatch}
            />
          )
        }
      </div>
    </div>
  );
};

SearchSidebar.defaultProps = {
  sortOptions: [
    {
      field: 'modified',
      order: 'desc',
      label: 'Date',
    },
    {
      field: 'title',
      order: 'asc',
      label: 'Alphabetical',
    },
  ],
};

SearchSidebar.propTypes = {
  sortOptions: PropTypes.arrayOf(PropTypes.object),
};

export default SearchSidebar;
