import { renderHook, waitFor, act } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { expect, test} from '@jest/globals';
import { setupServer } from 'msw/node';
import useSearchAPI from './useSearchAPI';
import { handlers } from '../testHelpers/handlers';
import { searchResults } from '../testHelpers/responseObjects';

const server = setupServer(...handlers)
type createWrapperProps = {
  children: ReactNode;
}
const createWrapper = () => {
  const queryClient = new QueryClient({ defaultOptions: {
    queries: {
      retry: false,
    }
  }});
  
  return ({ children }: createWrapperProps) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
};

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Fetch default search results', async () => {
  const { result } = renderHook(() => useSearchAPI("/api/1", "basicSearch", {}, []), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.data).toEqual(searchResults)
  act(() => {
    result.current.searchParams.set({fulltext: "something", "sort-order": "asc", sort: "modified"})
  })
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.searchParams.urlString).toEqual("fulltext=something&sort-order=asc&sort=modified")
  act(() => {
    result.current.facets.set("theme", "blah", true)
  })
  await waitFor(() => expect(result.current.isSuccess).toBe(true));
  expect(result.current.facets.value).toEqual({theme: ["blah"]})
});
