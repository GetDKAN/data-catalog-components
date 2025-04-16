import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { MetastoreSchemaDataset, MetastoreSchemaDatasetRefId } from '../types/dataset';

function useDataset(rootUrl: string, queryKey: string): UseQueryResult<Array<MetastoreSchemaDataset>>
function useDataset(rootUrl: string, queryKey: string, id: string): UseQueryResult<MetastoreSchemaDataset>
function useDataset(rootUrl: string, queryKey: string, showRefId: boolean): UseQueryResult<Array<MetastoreSchemaDatasetRefId>>
function useDataset(rootUrl: string, queryKey: string, id: string, showRefId: boolean, ): UseQueryResult<MetastoreSchemaDatasetRefId>
function useDataset(rootUrl: string, queryKey: string, idOrShowRef?: string | boolean, showRefId?: boolean) {
  const id: string = typeof idOrShowRef === "string" ? idOrShowRef : "";
  const refId: boolean | undefined = typeof idOrShowRef === "boolean" ? idOrShowRef : showRefId;

  const fetchUrl: string = `${rootUrl}/metastore/schemas/dataset/items/${id ? id : ""}${refId ? "?show-reference-ids": ""}`;
  const result = useQuery({
    queryKey: [queryKey],
    queryFn: async (): Promise<
      MetastoreSchemaDataset | MetastoreSchemaDatasetRefId | Array<MetastoreSchemaDataset> | Array<MetastoreSchemaDatasetRefId>
    > => {
      const response = await fetch(fetchUrl);
      if(!response.ok) {
        throw new Error(response.status + " Failed Fetch");
      }
      return response.json();
    }
  });
  return {...result}
}

export default useDataset;
