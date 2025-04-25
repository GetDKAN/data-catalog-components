import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { MetastoreSchemaTheme } from '../types/theme';
import { MetastoreSchemaKeyword } from '../types/keyword';

function useMetastore(rootUrl: string, queryKey: string, schema: "theme"): UseQueryResult<Array<MetastoreSchemaTheme>>
function useMetastore(rootUrl: string, queryKey: string, schema: "keyword"): UseQueryResult<Array<MetastoreSchemaKeyword>>
function useMetastore(rootUrl: string, queryKey: string, schema: "theme", id: string): UseQueryResult<MetastoreSchemaTheme>
function useMetastore(rootUrl: string, queryKey: string, schema: "keyword", id: string): UseQueryResult<MetastoreSchemaKeyword>
function useMetastore(rootUrl: string, queryKey: string, schema: "theme" | "keyword", id?: string) {
  const fetchUrl: string = `${rootUrl}/metastore/schemas/${schema}/items/${id ? id : ""}`;
  const result = useQuery({
    queryKey: [queryKey],
    queryFn: async (): Promise<
      Array<MetastoreSchemaTheme> | Array<MetastoreSchemaKeyword> | MetastoreSchemaTheme | MetastoreSchemaKeyword
    > => {
      const response = await fetch(fetchUrl);
      if(!response.ok) {
        throw new Error(response.status + " Failed Fetch");
      }
      return response.json();
    },
  });
  return {...result}
}

export default useMetastore;
