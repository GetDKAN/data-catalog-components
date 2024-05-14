import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './index';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    data: {
      total: 0
    }
  })
})

describe('<Search />', () => {

  const base = {
    "showAll": false,
    "limit": 10,
    "reset": {
      "active": false,
      "icon": <span></span>
    }
  }

  test('no facets', async() => {
    const queryClient = new QueryClient();
    await act(async () => {
      render(
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      );
    });
    expect(screen.queryByRole('listitem')).toBeNull();
    expect('hello').toBeTruthy()
  });

});
