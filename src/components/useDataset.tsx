import { useQuery } from '@tanstack/react-query';
import { MetastoreSchemaDataset, MetastoreSchemaDatasetRefId } from '../types/dataset';

type UseDatasetArray = {
  status: any;
  data: Array<MetastoreSchemaDataset> | undefined;
  error: any;
}

type UseDatasetArrayShowRef = {
  status: any;
  data: Array<MetastoreSchemaDatasetRefId> | undefined;
  error: any;
}

type UseDatasetSingle = {
  status: any;
  data: MetastoreSchemaDataset | undefined;
  error: any;
}

type UseDatasetSingleShowRef = {
  status: any;
  data: MetastoreSchemaDatasetRefId | undefined;
  error: any;
}

function useDataset(rootUrl: string, queryKey: string): UseDatasetArray
function useDataset(rootUrl: string, queryKey: string, id: string): UseDatasetSingle
function useDataset(rootUrl: string, queryKey: string, showRefId: boolean): UseDatasetArrayShowRef
function useDataset(rootUrl: string, queryKey: string, id: string, showRefId: boolean, ): UseDatasetSingleShowRef
function useDataset(rootUrl: string, queryKey: string, idOrShowRef?: string | boolean, showRefId?: boolean) {
  const id: string = typeof idOrShowRef === "string" ? idOrShowRef : "";
  const refId: boolean | undefined = typeof idOrShowRef === "boolean" ? idOrShowRef : showRefId;

  const fetchUrl: string = `${rootUrl}/metastore/schemas/dataset/items/${id ? id : ""}${refId ? "?show-reference-ids": ""}`;
  const {status, data, error} = useQuery({
    queryKey: [queryKey],
    queryFn: (): Promise<
      MetastoreSchemaDataset | MetastoreSchemaDatasetRefId | Array<MetastoreSchemaDataset> | Array<MetastoreSchemaDatasetRefId>
    > => {
      return fetch(fetchUrl).then(res => res.json());
    }
  });
  return {status, data, error}
}

export default useDataset;
