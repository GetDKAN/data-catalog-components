import { renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { expect, test} from '@jest/globals';
import { setupServer } from 'msw/node';
import useMetastore from './useMetastore';
import { handlers, themeList, keywordList } from '../testHelpers/handlers';

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

test('Fetch list of themes', async () => {
  const { result } = renderHook(() => useMetastore("/api/1", "themeAPIArray", "theme"), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.data).toEqual(themeList)
});

test('Fetch single theme by id', async () => {
  const { result } = renderHook(() => useMetastore("/api/1", "themeAPISingle", "theme", "1234"), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.data).toEqual(themeList[0])
});

test('Fetch single theme by incorrect id', async () => {
  const { result } = renderHook(() => useMetastore("/api/1", "themeAPISingle", "theme", "qwerty"), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isError).toBe(true))
  expect(result.current.data).toEqual(undefined)
  expect(result.current.error).toEqual(new Error("404 Failed Fetch"))
});

test('Fetch list of keywords', async () => {
  const { result } = renderHook(() => useMetastore("/api/1", "keywordAPIArray", "keyword"), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.data).toEqual(keywordList)
});

test('Fetch single keyword by id', async () => {
  const { result } = renderHook(() => useMetastore("/api/1", "keywordAPISingle", "keyword", "0987"), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.data).toEqual(keywordList[0])
});


// error test
//  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  // expect(result.current.data).toEqual(undefined)
  // await waitFor(() => expect(result.current.isError).toBe(true))
  // expect(result.current.data).toEqual(undefined)