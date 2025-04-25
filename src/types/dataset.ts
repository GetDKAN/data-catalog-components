import { AccessLevels, APFrequencies } from "./metadataEnums";
import { MetastoreSchemaTheme } from "./theme";
import { MetastoreSchemaKeyword } from "./keyword";
import { MetastoreSchemaPublisher } from "./publisher";
import { MetastoreSchemaDistribution } from './distribution';

export type MetastoreSchemaDataset = {
  "@type": string;
  accessLevel: AccessLevels;
  description: string;
  title: string;
  identifier: string;
  modified: string;
  accrualPeriodicity?: APFrequencies
  describedBy?: string;
  describedByType?: string;
  issued?: string;
  license?: string;
  spatial?: string;
  temporal?: string;
  isPartOf?: string;
  publisher: {
    "@type": string;
    name: string;
  };
  contactPoint: {
    fn: string;
    hasEmail: string;
  };
  theme?: Array<string>;
  keyword: Array<string>;
  distribution: Array<{
    "@type": string;
    downloadURL: string;
    mediaType: string;
    format: string;
    title: string;
  }>;
  references: Array<{
    type: string;
    format: string;
  }>;
}

export type MetastoreSchemaDatasetRefId = {
  "@type": string;
  accessLevel: AccessLevels;
  description: string;
  title: string;
  identifier: string;
  modified: string;
  accrualPeriodicity?: APFrequencies;
  describedBy?: string;
  describedByType?: string;
  issued?: string;
  license?: string;
  spatial?: string;
  temporal?: string;
  isPartOf?: string;
  publisher: MetastoreSchemaPublisher;
  contactPoint: {
    fn: string;
    hasEmail: string;
  };
  theme?: Array<MetastoreSchemaTheme>;
  keyword: Array<MetastoreSchemaKeyword>;
  distribution: Array<MetastoreSchemaDistribution>;
  references: Array<{
    type: string;
    format: string;
  }>;
}
