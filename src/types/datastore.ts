export type DatastoreSchema = {
  results?: Record<string, any>[];
  count?: number;
  schema?: Object;
  query: {
    keys: boolean;
    limit: number;
    offset: number;
    conditions: DatastoreCondition[];
    resources: {id: string; alias: string}[];
    count: boolean;
    results: boolean;
    schema: boolean;
    format: string;
    rowIds: boolean;
    properties: string[];
  };
}

export type DatastoreCondition = {
  property: string;
  value: string;
  operator: string;
}
