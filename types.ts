
export interface Country {
  name: string;
  code: string; // ISO 3166-1 alpha-2 code
  summary: string;
}

export interface ClusterItem {
    name: string;
    code: string; // ISO 3166-1 alpha-2 code for countries, or an identifier for other entities
    summary: string;
}

export interface Cluster {
  name: string;
  description: string;
  items: ClusterItem[];
}

export interface Taxonomy {
  tabTitle: string;
  clusters: Cluster[];
}

export interface PolicyAnalysis {
  taxonomies: Taxonomy[];
  analysisReport: string;
}
