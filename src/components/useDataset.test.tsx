import { renderHook, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { expect, test} from '@jest/globals';
import { setupServer } from 'msw/node';
import useDataset from './useDataset';
import { handlers } from '../testHelpers/handlers';
import { baseDataset, showRefIdDataset } from '../testHelpers/responseObjects';

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

test('Fetch list of datasets', async () => {
  const { result } = renderHook(() => useDataset("/api/1", "basicDataset"), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.data).toEqual(baseDataset)
});

test('Fetch single dataset by id', async () => {
  const { result } = renderHook(() => useDataset("/api/1", "singleDataset", "12345"), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.data).toEqual(baseDataset[0])
});

test('Fetch list of datasets with reference ids', async () => {
  const { result } = renderHook(() => useDataset("/api/1", "datasetsWithRefIds", true), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.data).toEqual(showRefIdDataset)
});

test('Fetch single dataset by id with reference id', async () => {
  const { result } = renderHook(() => useDataset("/api/1", "themeAPISingleWithRef", "12345", true), {
    wrapper: createWrapper()
  });
  await waitFor(() => expect(result.current.isSuccess).toBe(false))
  expect(result.current.data).toEqual(undefined)
  await waitFor(() => expect(result.current.isSuccess).toBe(true))
  expect(result.current.data).toEqual(showRefIdDataset[0])
});
