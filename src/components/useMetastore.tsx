import { useQuery } from '@tanstack/react-query';
import { MetastoreSchemaTheme } from '../types/theme';
import { MetastoreSchemaKeyword } from '../types/keyword';

type UseThemeArray = {
  status: any;
  data: Array<MetastoreSchemaTheme> | undefined;
  error: any;
}
type UseKeyWordArray = {
  status: any;
  data: Array<MetastoreSchemaKeyword> | undefined;
  error: any;
}

function useMetastore(rootUrl: string, queryKey: string, schema: "theme"): UseThemeArray
function useMetastore(rootUrl: string, queryKey: string, schema: "keyword"): UseKeyWordArray
function useMetastore(rootUrl: string, queryKey: string, schema: "theme" | "keyword") {
  const fetchUrl: string = `${rootUrl}/metastore/schemas/${schema}/items`;
  const {status, data, error} = useQuery({
    queryKey: [queryKey],
    queryFn: (): Promise<
      Array<MetastoreSchemaTheme> | Array<MetastoreSchemaKeyword>
    > => {
      return fetch(fetchUrl).then(res => res.json());
    }
  });
  return {status, data, error}
}

export default useMetastore;

