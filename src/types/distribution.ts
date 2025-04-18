export type MetastoreSchemaDistribution = {
  identifier: string;
  data: {
    "@type": string;
    title: string;
    description: string;
    format: string;
    mediaType: string;
    downloadURL: string;
    accessURL: string;
    conformsTo: string;
    describedBy: string;
    describedByType: string;
  };
}
