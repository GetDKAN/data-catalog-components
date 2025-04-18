import { MetastoreSchemaTheme } from "../types/theme";

export const fetchThemes = (rootUrl: string): Promise<Array<MetastoreSchemaTheme>> => (
  fetch(`${rootUrl}/metastore/schemas/theme/items`)
    .then((rest) => rest.json())
);