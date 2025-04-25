import { renderHook, waitFor, act } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { expect, test} from '@jest/globals';
import { setupServer } from 'msw/node';
import { handlers } from '../testHelpers/handlers';
import useDatastore from './useDatastore';

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

test('Fetch datastore results with distribution id', async () => {
  const { result } = renderHook(() => useDatastore("/api/1", "basicTest", "abcd", {}), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.urlString).toBe("/api/1/datastore/query/abcd")
});

test('Fetch datastore results with limit', async () => {
  const { result } = renderHook(() => useDatastore("/api/1", "basicTest", "abcd", {params: {limit: 25}}), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.urlString).toBe("/api/1/datastore/query/abcd?limit=25")
  expect(result.current?.data?.results).toHaveLength(25);
  act(() => {
    const params = result.current.params;
    params.set({
      ...params.previous,
      limit: 10,
    })
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(true));
  expect(result.current.urlString).toBe("/api/1/datastore/query/abcd?limit=10")
  expect(result.current?.data?.results).toHaveLength(10);
});

test('Fetch datastore results with offset', async () => {
  const { result } = renderHook(() => useDatastore("/api/1", "basicTest", "abcd", {params: {offset: 25}}), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.urlString).toBe("/api/1/datastore/query/abcd?offset=25")
  act(() => {
    const params = result.current.params;
    params.set({
      ...params.previous,
      offset: 10,
    })
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(true));
  expect(result.current.urlString).toBe("/api/1/datastore/query/abcd?offset=10")
  act(() => {
    const params = result.current.params;
    params.set({
      ...params.previous,
      limit: 25,
    })
  });
  expect(result.current.urlString).toBe("/api/1/datastore/query/abcd?offset=10&limit=25");
  act(() => {
    const params = result.current.params;
    params.set({
      ...params.previous,
      limit: 25,
      offset: undefined,
    })
  });
  expect(result.current.urlString).toBe("/api/1/datastore/query/abcd?limit=25")
});

test('Fetch datastore results with distribution index', async () => {
  const { result } = renderHook(() => useDatastore("/api/1", "basicTest", "1234", 1, {}), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.urlString).toBe("/api/1/datastore/query/1234/1")
});
