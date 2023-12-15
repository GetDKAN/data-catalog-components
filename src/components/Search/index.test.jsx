import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import Search from './index';

describe('<Search />', () => {

  const base = {
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": <span></span>
    }
  }

  test('no facets', () => {
    render(
      <Search
        location={{}}
        searchEndpoint=""
        defaultFacets={{
          "theme": {
            "label": "Topics",
            "field": "theme.0.title",
            ... base
          },
          "keyword": {
            "label": "Tags",
            "field": "keyword.*.title",
            ... base
          },
          "publisher__name": {
            "label": "Publishers",
            "field": "publisher__name",
            ... base
          }
        }}
        sortOptions={[
          {
            field: 'modified',
            order: 'desc',
            label: 'Date'
          },
          {
            field: 'title',
            order: 'asc',
            label: 'Alphabetical'
          }
        ]}
        path="/components/search"
      >
        <div>
          <p>search</p>
        </div>
      </Search>
    );
    expect(screen.queryByRole('listitem')).toBeNull();
    expect('hello').toBeTruthy()
  });

});
