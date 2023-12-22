import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import SearchFacets from '../../components/SearchFacets';
import { SearchDispatch } from '../../services/search/search_defaults';
import { BulletList } from 'react-content-loader';

const SearchSidebar = ({ sortOptions, facetsResults }) => {
  const { searchState, dispatch, defaultFacets } = useContext(SearchDispatch);
  const { loading, sort } = searchState;
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  
  const label = sortOptions.filter((s) => {
    return s.field == sort;
  })[0].label
  
  return (
    <div className="dc-search-sidebar col-md-4 col-sm-12">
      <div className="dc-search-sidebar-options">
        <Label for="dc-search-list-sort">Sort by:</Label>
        <Dropdown
          name="dc-search-list-sort"
          id="dc-search-list-sort"
          toggle={toggle}
          isOpen={dropdownOpen}
        >
          <DropdownToggle caret><span>{label}</span></DropdownToggle>
          <DropdownMenu>
            {sortOptions.map((sortOpt) => (
              <DropdownItem
                key={sortOpt.field}
                value={sortOpt.field}
                onClick={(e) => {
                  dispatch({ type: 'UPDATE_SORT', data: { sort: sortOpt.field, "sort-order": sortOpt.order } });
                }}
              >
                {sortOpt.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
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
