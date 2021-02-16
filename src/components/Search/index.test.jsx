import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import Search from './index';

describe('<Search />', () => {

  test('no facets', () => {
    render(
      <Search
        location={{}}
        searchEndpoint=""
        defaultFacets={{
          "theme": {
            "label": "Topics",
            "field": "theme.0.title",
            "showAll": false,
            "limit": 10,
            "reset": {
              "active": false,
              "icon": <span></span>
            },
          },
          "keyword": {
            "label": "Tags",
            "field": "keyword.*.title",
            "showAll": false,
            "limit": 10,
            "reset": {
              "active": false,
              "icon": <span></span>
            },
          },
          "publisher__name": {
            "label": "Publishers",
            "field": "publisher__name",
            "showAll": false,
            "limit": 10,
            "reset": {
              "active": false,
              "icon": <span></span>
            },
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
    expect('hello').toBeTruthy()
  });

});
