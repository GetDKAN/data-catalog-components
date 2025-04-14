import { useQuery } from '@tanstack/react-query';
import { MetastoreSchemaTheme } from '../types/theme';


type UseThemeResult = {
  status: any;
  data: Array<MetastoreSchemaTheme> | undefined;
  error: any;
}

const useTheme = (rootUrl: string, queryKey: string): UseThemeResult => {
  const fetchUrl: string = `${rootUrl}/metastore/schemas/theme/items`;
  const {status, data, error} = useQuery({
    queryKey: [queryKey],
    queryFn: (): Promise<Array<MetastoreSchemaTheme>> => {
      return fetch(fetchUrl).then(res => res.json());
    }
  });
  return {status, data, error}
}

export default useTheme;

