import { DownloadPermission } from "./permissions";

export interface ResultsMetadata {
  download_results?: DownloadPermission;
}

export interface DatasetColumn {
  display_name: string;
  source: string;
  name: string;
}

export interface Dataset {
  data: {
    rows: any[][];
    cols: DatasetColumn[];
    rows_truncated: number;
    results_metadata: ResultsMetadata;
  };
  database_id: number;
  row_count: number;
  running_time: number;
}
