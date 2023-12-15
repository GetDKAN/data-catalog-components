import '@testing-library/jest-dom';
import searchReducer from './search_reducer';

describe('search_reducer', () => {
  test('SET_FACETS_DATA - Empty action', () => {
    const state = {}
    const action = {
      type: 'SET_FACETS_DATA'
    }

    const newState = searchReducer(state, action);
    expect(newState).toStrictEqual({})
  })

  test('SET_FACETS_DATA - action.data.facetResults must be an array', () => {
    const state = {}
    const action = {
      type: 'SET_FACETS_DATA',
      data: {}
    }

    expect(
      searchReducer(state, action)
    ).toStrictEqual({})

    const action2 = {
      type: 'SET_FACETS_DATA',
      data: {
        facetsResults: {}
      }
    }

    expect(
      searchReducer(state, action2)
    ).toStrictEqual({})

    const action3 = {
      type: 'SET_FACETS_DATA',
      data: {
        facetsResults: []
      }
    }

    expect(
      searchReducer(state, action3)
    ).toStrictEqual({ facetsResults: [] })

  })

  test('SET_FACETS_DATA - Update existing facets and add new facets', () => {
    const state = {
      facetsResults: [
        {
          type: 'keyword',
          name: 'goodbye',
          total: 0
        },
        {
          type: 'keyword',
          name: 'hello',
          total: 0
        }
      ]
    }

    const action = {
      type: 'SET_FACETS_DATA',
      data: {
        facetsResults: [
          {
            type: 'keyword',
            name: 'hello',
            total: 1
          },
          {
            type: 'keyword',
            name: 'hola',
            total: 2
          }
        ]
      }
    }

    expect(
      searchReducer(state, action)
    ).toStrictEqual({ facetsResults: [
        {
          type: 'keyword',
          name: 'goodbye',
          total: 0
        },
        {
          type: 'keyword',
          name: 'hello',
          total: 1
        },
        {
          type: 'keyword',
          name: 'hola',
          total: 2
        }
      ] })
  })
})


